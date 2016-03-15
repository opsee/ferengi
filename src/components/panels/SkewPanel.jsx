import React, { PropTypes } from 'react';
import style from './skewPanel.css';

export default React.createClass({
  propTypes: {
    backgroundColor: PropTypes.string,
    children: PropTypes.node,
    skewTop: PropTypes.bool,
    skewBottom: PropTypes.bool
  },

  getDefaultProps() {
    return {
      skewTop: true,
      skewBottom: true
    };
  },

  getPanelStyle() {
    return {
      backgroundColor: this.props.backgroundColor,
      marginBottom: this.props.skewBottom ? 55 : null, // FIXME
      marginTop: this.props.skewTop ? 55 : null // FIXME
    };
  },

  render() {
    return (
      <div className={style.panel} style={this.getPanelStyle()}>
        { this.props.skewTop ?
          <div className={style.skewTop} style={{backgroundColor: this.props.backgroundColor}} />
        : null }

        <div className={style.contents}>
          {this.props.children}
        </div>

        { this.props.skewBottom ?
          <div className={style.skewBottom} style={{backgroundColor: this.props.backgroundColor}} />
        : null }
      </div>
    );
  }
});