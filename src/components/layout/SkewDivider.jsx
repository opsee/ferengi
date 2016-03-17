import React, { PropTypes } from 'react';
import cx from 'classnames';

import style from './skewDivider.css';

const SkewDivider = React.createClass({
  propTypes: {
    className: PropTypes.string
  },
  render() {
    return (
      <div className={cx([style.divider, this.props.className])} />
    );
  }
});

export default SkewDivider;