import React, {PropTypes} from 'react';

import InputWithLabel from './InputWithLabel.jsx';

const BoundField = React.createClass({
  propTypes: {
    bf: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string
  },
  render(){
    return (
      <div className={this.props.className}>
        <div className="form-group">
          <InputWithLabel bf={this.props.bf}>
            {this.props.children}
          </InputWithLabel>
        </div>
      </div>
    );
  }
});

export default BoundField;