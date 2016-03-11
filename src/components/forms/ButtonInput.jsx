import React, { PropTypes } from 'react';
import style from './buttonInput.css';
import Button from './Button';
import Input from './Input';

export default React.createClass({
  propTypes: {
    onChange: PropTypes.func,
    type: PropTypes.string,
    value: PropTypes.string
  },

  render() {
    return (
      <div className={`${style.group} clearfix`}>
        <Input className={style.input} onChange={this.props.onChange}
               value={this.props.value} />
        <Button className={style.button}>
          {this.props.buttonText}
        </Button>
      </div>
    );
  }
});