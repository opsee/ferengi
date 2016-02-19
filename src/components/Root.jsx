import React from 'react';

module.exports = React.createClass({
  render() {
    return (
      <html>
        <head>
          <title>Opsee</title>
        </head>

        <body>
          Welcome to the filet zone.

          <script src={this.props.assets.main} />
        </body>
      </html>
    );
  }
});