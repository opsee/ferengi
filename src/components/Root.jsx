import React from 'react';

import style from './root.css';

module.exports = React.createClass({

  render() {
    return (
      <html>
        <head>
          <title>Opsee</title>
        </head>

        <body>
          <div className="welcome">
            Welcome to the filet zone.
          </div>

          <script src={this.props.assets.main} />
        </body>
      </html>
    );
  }
});