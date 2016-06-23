import _ from 'lodash';
import cx from 'classnames';
import React, {PropTypes} from 'react';
import Form from 'newforms/Form';
import CharField from 'newforms/CharField';
import {connect} from 'react-redux';
import Autosuggest from 'react-autosuggest';

import {BoundField, Button, Input} from '../forms';
import {Add, Delete} from 'emissary/src/js/components/icons';
import {Padding, Expandable, Grid, Row, Col} from '../layout';
import Highlight from '../global/Highlight';
import validate from 'emissary/src/js/modules/validate';
import getKeys from 'emissary/src/js/modules/getKeys';
import relationships from 'slate/src/relationships';
import slate from 'slate';
import style from './assertionSelection.css';
import { trackEvent } from '../../modules/analytics';
import { TRY_CHECK, TRY_CHECK_ASSERTION } from '../../constants/analyticsConstants';

const AssertionsSelection = React.createClass({
  propTypes: {
    check: PropTypes.object,
    assertions: PropTypes.array,
    response: PropTypes.object,
    responseFormatted: PropTypes.object,
    onChange: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      assertions: [],
      response: {
        code: undefined,
        headers: [],
        body: undefined
      }
    };
  },

  getInitialState() {
    return {
      assertions: []
    };
  },

  componentDidMount(){
    if (this.props.assertions.length){
      const assertions = this.props.assertions.map(this.getNewSchema);
      this.runChange(assertions);
    }
  },

  getAssertion(index) {
    return this.state.assertions[index];
  },

  getForm(type = 'code', kwargs){
    const self = this;
    let obj = null;
    switch (type){
    case 'code':
      obj = Form.extend({
        operand: CharField({
          widgetAttrs: {
            noLabel: true
          }
        })
      });
      break;
    case 'header':
      obj = Form.extend({
        operand: CharField({
          widgetAttrs: {
            noLabel: true
          }
        })
      });
      break;
    case 'json':
      obj = Form.extend({
        operand: CharField({
          widgetAttrs: {
            noLabel: true
          }
        }),
        value: CharField({
          label: 'JSON path (optional) <a target="_blank" href="https://app.opsee.com/docs/checks">(Learn More)</a>',
          required: false,
          widgetAttrs: {
            placeholder: self.getJsonPlaceholder()
          }
        })
      });
      break;
    default:
      obj = Form.extend({
        operand: CharField({
          label: 'Value',
          widgetAttrs: {
            noLabel: true
          }
        })
      });
      break;
    }
    return new obj(kwargs);
  },

  getNewSchema(assertion = {}, assertionIndex){
    const self = this;
    const opts = {
      onChange(){
        self.handleInputChange(this.cleanedData, assertionIndex);
        self.forceUpdate();
      },
      labelSuffix: '',
      prefix: `assertion-${assertionIndex}`,
      validation: {
        on: 'blur change',
        onChangeDelay: 300
      },
      initial: _.omitBy(assertion, a => !a)
    };
    return _.assign({}, assertion, {
      form: this.getForm(assertion.key, opts)
    });
  },

  getJsonBodyKeys(){
    const json = this.getJsonBody();
    if (json){
      const keys = getKeys(json);
      if (Array.isArray(keys) && keys.length){
        return keys;
      }
    }
    return [];
  },

  getFilteredJsonBodyKeys(assertionIndex){
    const assertion = this.getAssertion(assertionIndex);
    return this.getJsonBodyKeys().filter(path => {
      return path.match(`^${_.escapeRegExp(assertion.value)}`);
    });
  },

  getJsonPlaceholder(assertionIndex){
    if (!_.get(this.state.assertions, `[${assertionIndex}].value`)){
      const keys = this.getJsonBodyKeys();
      const last = _.chain(keys).sortBy(keys, k => k.length).last().value();
      return last || 'animals.dogs[0].breed';
    }
    return null;
  },

  getFinalAssertions(assertions = this.state.assertions){
    return assertions.map(n => _.pick(n, ['key', 'value', 'relationship', 'operand']));
  },

  getResponse(){
    return this.props.response;
  },

  getResponseFormatted(){
    return this.props.responseFormatted;
  },

  getResponseBody(){
    const json = this.getJsonBody();
    return json ? JSON.stringify(json) : this.getResponse().body;
  },

  getSlateTest(assertion){
    let response = this.getResponse();
    response.body = typeof response.body === 'object' ? JSON.stringify(response.body) : response.body;
    if (response && response.body && validate.assertion(assertion)){
      return slate.checkAssertion(assertion, response);
    }
    return null;
  },

  getJsonBody(){
    try {
      const res = this.getResponse();
      const body = _.get(res, 'body');
      const json = JSON.parse(body);
      const headers = _.get(res, 'headers');
      if (Array.isArray(headers)){
        const arr = _.chain(headers).find({name: 'Content-Type'}).get('values').value() || [];
        const type = arr.join(' ');
        return type && type.match('json', 'gi') && json;
      }
      return false;
    } catch (err){
      return false;
    }
  },

  getJsonPathMeta(assertion){
    const body = this.getJsonBody();
    let data = null;
    let scalar = false;
    if (body){
      try {
        data = _.get(body, assertion.value);
        if (data){
          scalar = (typeof data === 'string' || typeof data === 'number') ? true : false;
          data = scalar ? data : JSON.stringify(data);
        }
      } catch (err){
        _.noop();
      }
    }
    return {
      data,
      scalar
    };
  },

  getBodySnippet(assertion){
    const meta = this.getJsonPathMeta(assertion);

    if (meta && meta.data && assertion.value){
      if (meta.scalar){
        return this.renderReturnedValue(assertion, meta.data);
      }
      return (
        <Highlight wrap style={{width: '100%'}} noBg>
          {meta.data}
        </Highlight>
      );
    } else if (!meta.data && assertion.value){
      return this.renderReturnedValue(assertion, '>> No JSON data selected', 'danger');
    }

    return (
      <div className={style.bodySnippet}>
        <Expandable style={{width: '100%'}} noFade>
          <Highlight wrap noBg>
            {this.getResponseBody()}
          </Highlight>
        </Expandable>
      </div>
    );
  },

  getAssertionClass(assertion) {
    let test = this.getSlateTest(assertion);
    if (test && test.success){
      return style.assertionSuccess;
    } else if (test){
      return style.assertionFailure;
    }
    return style.assertion;
  },

  getAssertionStatus(assertion) {
    let test = this.getSlateTest(assertion);
    if (test && test.success){
      return 'passing';
    } else if (test){
      return 'failing';
    }
    return null;
  },

  runSetAssertionsState(iteratee){
    const assertions = this.state.assertions.map(iteratee);
    this.setState({
      assertions
    });
    return assertions;
  },

  runChange(assertions = this.state.assertions){
    this.setState({
      assertions
    });
    this.props.onChange(this.getFinalAssertions(assertions));
  },

  runSetType(index, type){
    this.runSetAssertionsState((n, i) => {
      return _.assign({}, n, {
        type: index === i ? type : n.type
      });
    });
  },

  runSetValue(index, data, e){
    if (e){
      e.preventDefault();
    }
    const assertions = this.runSetAssertionsState((n, i) => {
      const value = data || n.valueState;
      return _.assign({}, n, {
        value: index === i ? value : n.value
      });
    }, true);
    this.props.onChange(this.getFinalAssertions(assertions));
  },

  runRemoveType(index){
    this.runSetAssertionsState((n, i) => {
      return _.assign({}, n, {
        type: index === i ? undefined : n.type
      });
    });
  },

  runNewAssertion(key){
    trackEvent(TRY_CHECK, TRY_CHECK_ASSERTION, {
      assertionType: key
    });

    const assertions = this.state.assertions.concat([
      this.getNewSchema({key}, this.state.assertions.length)
    ]);
    this.runChange(assertions);
  },

  runDelete(index){
    const assertions = _.reject(this.state.assertions, (n, i) => i === index);
    this.runChange(assertions);
  },

  runSetAssertionData(index, data){
    const assertions = this.state.assertions.map((assertion, i) => {
      let d = {};
      if (index === i){
        d = data;
        assertion.form.setData(_.defaults(data, assertion));
      }
      return _.assign(assertion, d);
    });
    return this.runChange(assertions);
  },

  handleInputChange(data, index){
    const assertions = this.runSetAssertionsState((assertion, i) => {
      const d = index === i ? data : {};
      return _.assign(assertion, d);
    });
    this.props.onChange(this.getFinalAssertions(assertions));
  },

  handleJsonSuggestionSelect(assertionIndex, event, data){
    this.runSetAssertionData(assertionIndex, {
      value: data.newValue
    });
  },

  handleSubmit(e){
    e.preventDefault();
    return false;
  },

  renderRelationship(assertionIndex) {
    const assertion = this.getAssertion(assertionIndex);
    if (!assertion.relationship) {
      return this.renderRelationshipButtons(assertionIndex);
    }
    return this.renderChosenRelationship(assertionIndex);
  },

  renderRelationshipButtons(assertionIndex){
    const assertion = this.getAssertion(assertionIndex);
    return (
      <div className={style.relationshipButtons}>
        {relationships.map(rel => {
          let data = {
            relationship: rel.id
          };
          if (rel.id === 'equal' && !assertion.operand){
            if (assertion.key === 'code'){
              data.operand = _.get(this.getResponseFormatted(), 'code') || '';
            } else if (assertion.key === 'header'){
              data.operand = _.get(this.getResponseFormatted(), `headers.${assertion.value}`) || '';
            } else if (assertion.key === 'json'){
              data.operand = this.getJsonPathMeta(assertion).data || '';
            }
          }
          return (
            <Button className={style.relationshipButton} secondary
              onClick={this.runSetAssertionData.bind(null, assertionIndex, data)}
              key={`assertion-${assertionIndex}-relationship-${rel.id}`}>
              {rel.name}
            </Button>
          );
        })}
      </div>
    );
  },

  renderChosenRelationship(assertionIndex){
    const assertion = this.getAssertion(assertionIndex);
    if (assertion.relationship){
      const obj = _.find(relationships, {id: assertion.relationship}) || {};
      return (
        <div className={style.chosenRelationship}>
          <Button className={style.relationshipButton} secondary color="white" onClick={this.runSetAssertionData.bind(null, assertionIndex, {relationship: null})}>{obj.name}</Button>
          <div className={style.label}>relationship</div>
        </div>
      );
    }
    return null;
  },

  renderOperand(assertionIndex){
    const assertion = this.getAssertion(assertionIndex);
    if (assertion.relationship && !assertion.relationship.match('empty|notEmpty')){
      return (
        <div className={style.operand}>
          <BoundField className={style.operandInput} bf={this.state.assertions[assertionIndex].form.boundField('operand')}/>
          <div className={style.label}>expected value</div>
        </div>
      );
    }
    return null;
  },

  renderReturnedValue(assertion, value, title){
    return (
      <div className={style.returnedValue}>
        <Input className={style.input} value={value} disabled />
        <div className={style.label}>{title || 'value'}</div>
      </div>
    );
  },

  renderHeader(assertionIndex){
    const assertion = this.getAssertion(assertionIndex);
    const selectedHeader = assertion.value;
    const selectedHeaderResult = _.get(this.getResponseFormatted(), `headers.${assertion.value}`);
    const headers = _.get(this.getResponseFormatted(), 'headers') || {};
    const headerKeys = _.keys(headers);

    let buttons = null;

    if (!assertion.relationship && assertion.value){
      buttons = this.renderRelationshipButtons(assertionIndex);
    } else if (!assertion.value){
      buttons = (
        <Padding t={1}>
          {headerKeys.map(key => {
            return (
              <Button flat nocap onClick={this.runSetAssertionData.bind(null, assertionIndex, {value: key})} color="text" style={{margin: '0 .5rem 1rem'}} key={`assertion-${assertionIndex}-header-key-${key}`}>{key}</Button>
            );
          })}
        </Padding>
      );
    }

    const helper = assertion.value ? (
      <div>
        <div style={{width: '100%'}}>
          {this.renderReturnedValue(assertion, selectedHeaderResult)}
        </div>
        <div className={style.rightSide}>
          {this.renderChosenRelationship(assertionIndex)}
          {this.renderOperand(assertionIndex)}
        </div>
      </div>
    ) : null;

    const title = selectedHeader ? ` - ${selectedHeader}` : '';

    return (
      <div>
        {/* this.renderTitle(assertionIndex, `Response Header${title}`) */}

        <div className={style.contents}>
          {helper}
          {buttons}
        </div>
      </div>
    );
  },

  renderJsonPath(assertion, index) {
    const inputID = `json-path-${index}`;
    // <label className="label" htmlFor={inputID}>JSON path (optional) a></label>
    return (
      <div className={style.jsonPath}>
        <div className="form-group">
          <div className={style.autosuggest}>
            <Autosuggest suggestions={this.getFilteredJsonBodyKeys(index)}
              inputProps={{
                onChange: this.handleJsonSuggestionSelect.bind(null, index),
                value: assertion.value || '',
                placeholder: this.getJsonPlaceholder(index),
                id: inputID
              }} renderSuggestion={this.renderSuggestion} getSuggestionValue={(s) => s}
              style={{width: '100%'}} shouldRenderSuggestions={() => true} />
          </div>
          <div className="flex between-xs">
            <div className={style.label}>JSON path (optional)</div>
            <div className={style.label}><a target="_blank" href="https://app.opsee.com/docs/checks">Learn More</a></div>
          </div>
        </div>
      </div>
    );
  },

  renderJsonInput(assertion){
    const jsonBody = this.getJsonBody();
    if (jsonBody){
      return (
        <Padding b={1} style={{width: '100%'}}>
          <BoundField bf={assertion.form.boundField('value')}/>
        </Padding>
      );
    }
    return null;
  },

  renderBody(assertionIndex){
    const assertion = this.getAssertion(assertionIndex);
    let buttons = null;
    if (!assertion.relationship){
      buttons = this.renderRelationshipButtons(assertionIndex);
    }
    return (
      <div>
        {/* this.renderTitle(assertionIndex, 'Plaintext Response Body') */}

        <div className={style.contents}>
          {this.getBodySnippet(assertion) || 'Select a header below'}
          {this.renderChosenRelationship(assertionIndex)}
          {this.renderOperand(assertionIndex)}
          {buttons}
        </div>
      </div>
    );
  },

  renderSuggestion(suggestion){
    return <span>{suggestion}</span>;
  },

  renderCode(assertionIndex){
    const assertion = this.getAssertion(assertionIndex);
    return (
      <div className="flex flex-row middle-xs">
          {this.renderReturnedValue(assertion, this.getResponse().code, 'status code')}
          {this.renderRelationship(assertionIndex)}
          {this.renderOperand(assertionIndex)}
      </div>
    );
  },

  renderJson(assertionIndex){
    const assertion = this.getAssertion(assertionIndex);
    return (
      <div className="flex flex-col middle-xs">
        {this.renderJsonPath(assertion, assertionIndex)}
        {this.renderRelationship(assertionIndex)}
        {this.renderOperand(assertionIndex)}
      </div>
    );
  },

  renderRemoveButton() {
    return (
      <div className={style.remove}>
        <Button className={style.removeButton} color="danger" title="Remove this Assertion" onClick={this.runDelete.bind(null, index)}>
          <Delete className={style.removeSVG} inline fill="danger"/>
        </Button>
      </div>
    );
  },

  renderAssertion(assertion, index){
    const key = assertion.key || 'code';
    const status = this.getAssertionStatus(assertion);
    const className = cx(style.assertion, {
      [style.assertionPassing]: status === 'passing',
      [style.assertionFailing]: status === 'failing',
    });
    return (
      <div key={index} className={className}>
        {this[`render${_.capitalize(key)}`](index)}
      </div>
    );
  },

  renderAssertionList(){
    if (!_.has(this.getResponse(), 'code')) {
      return null;
    }
    if (!this.state.assertions.length){
      return null;
    }
    return this.state.assertions.map(this.renderAssertion);
  },

  renderAssertionPickType(){
    return (
      <div>
        <Padding tb={2}>
          <h3 className="font-accent">Add an Assertion</h3>
          <div><em className="small text-muted">Learn more about assertions <a target="_blank" href="https://app.opsee.com/docs/checks">in our documentation</a>.</em></div>
        </Padding>
        {['code', 'header', 'body'].map(type => {
          let schemaType = type;
          if (this.getJsonBody() && type === 'body'){
            schemaType = 'json';
          }
          let name = _.capitalize(type);
          if (name === 'Code'){
            name = 'Status Code';
          }
          return (
            <Button className={style.button} onClick={this.runNewAssertion.bind(null, schemaType)} key={`assertion-button-${type}`} secondary>
              <Add inline fill="white"/>&nbsp;{name}
            </Button>
          );
        })}
      </div>
    );
  },

  render(){
    return (
      <div className={style.wrapper}>
        {this.renderAssertionList()}
        {this.renderAssertionPickType()}
      </div>
    );
  }
});

const mapStateToProps = (state) => ({
  redux: state
});

export default connect(mapStateToProps)(AssertionsSelection);