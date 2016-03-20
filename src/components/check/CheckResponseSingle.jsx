import React, {PropTypes} from 'react';
import _ from 'lodash';

import Highlight from '../global/Highlight';
import Color from '../type/Color';
import style from './checkResponseSingle.css';

const CheckResponseSingle = React.createClass({
  propTypes: {
    code: PropTypes.number,
    body: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ]),
    headers: PropTypes.object,
    json: PropTypes.bool
  },
  getDefaultProps() {
    return {
      code: undefined,
      body: null,
      headers: {}
    };
  },
  getBody(){
    const {props} = this;
    if (_.isObject(props.body)){
      return JSON.stringify(props.body, null, ' ');
    }
    return props.body || '';
  },
  renderHeaders(){
    return (
      <div>
        {_.chain(this.props.headers).keys().map((key, i) => {
          return (
            <div key={`header-${i}`}>
              <code style={{fontSize: '1.4rem'}}>{key}:&nbsp;<Color c="success">{this.props.headers[key]}</Color></code>
            </div>
          );
        }).value()}
      </div>
    );
  },
  render(){
    return (
      <div className={style.wrapper}>
        <div className={style.section}>
          <h4 className={style.heading}>Status Code</h4>

          <div className={style.contents}>
            <strong>Status Code:</strong>&nbsp;<Color c="success"><code style={{fontSize: '1.5rem'}}>{this.props.code}</code></Color><br/>
          </div>
        </div>

        <div className={style.section}>
          <h4 className={style.heading}>Headers</h4>

          <div className={style.contents}>
            {this.renderHeaders()}
          </div>
        </div>

        <div className={style.section}>
          <h4 className={style.heading}>Body</h4>

          <div className={style.contents}>
            <Highlight>{this.getBody()}</Highlight>
          </div>
        </div>
      </div>
    );
  }
});

export default CheckResponseSingle;