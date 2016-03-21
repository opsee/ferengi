import React, {PropTypes} from 'react';
import cx from 'classnames';
import _ from 'lodash';

import {ChevronUp, ChevronDown} from 'emissary/src/js/components/icons';
import Button from '../forms/Button';
import style from './expandable.css';

const Expandable = React.createClass({
  propTypes: {
    children: PropTypes.node,
    noFade: PropTypes.bool,
    className: PropTypes.string
  },
  getInitialState(){
    return {
      open: false
    };
  },
  getClass(){
    const keys = _.chain({
      expandable: true,
    })
    .assign(this.props, this.state)
    .pickBy(d => !!d)
    .keys()
    .value();
    return cx(_.chain(style).pick(keys).values().value(), this.props.className);
  },
  handleToggle(){
    this.setState({
      open: !this.state.open
    });
  },
  renderFade(){
    if (!this.props.noFade){
      return <span className={style.fade}/>;
    }
    return null;
  },
  renderButton(){
    if (this.state.open){
      return (
        <Button color="info" onClick={this.handleToggle} className={style.button} title="Collapse">
          <ChevronUp inline/>
        </Button>
      );
    }
    return (
      <Button color="info" onClick={this.handleToggle} className={style.button} title="Expand">
        <ChevronDown inline/>
      </Button>
    );
  },
  render(){
    return (
      <div className={this.getClass()}>
        {this.props.children}
        {this.renderFade()}
        {this.renderButton()}
      </div>
    );
  }
});

export default Expandable;