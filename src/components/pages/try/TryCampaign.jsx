import React, { PropTypes } from 'react';
import Header from '../../Header';
import SignUpPanel from '../../panels/SignUpPanel';
import SkewPanel from '../../panels/SkewPanel';
import { Padding } from '../../layout';

export default React.createClass({
  propTypes: {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    splashClass: PropTypes.string
  },

  render() {
    return (
      <div>
        <Header theme="dark" />

        <main>
          <div className={this.props.splashClass}>
            <Padding tb={2} lr={4}>
              <h1>{this.props.title}</h1>
            </Padding>
          </div>

          {this.props.children}

          <SkewPanel backgroundColor="#333" skewBottom={false}>
            <SignUpPanel />
          </SkewPanel>
        </main>
      </div>
    );
  }
});
