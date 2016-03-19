import React, { PropTypes } from 'react';
import style from './buttonInput.css';
import Button from './Button';
import Input from './Input';

export default React.createClass({
  propTypes: {
    onChange: PropTypes.func,
    type: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func,
    buttonText: PropTypes.string,
    className: PropTypes.string,
    chevron: PropTypes.bool
  },

  getClass() {
    return [
      style.group,
      this.props.className
    ].join(' ');
  },

  render() {
    return (
      <div className={this.getClass()}>
        <Input className={style.input} onChange={this.props.onChange}
               value={this.props.value} />
        <span className={style.buttonWrapper}>
          <Button className={style.button} onClick={this.props.onClick} chevron={this.props.chevron}>
            {this.props.buttonText}
          </Button>
        </span>
      </div>
    );
  }
});