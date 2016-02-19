import React from 'react';
import css from './root.css';
import style from './root.css.json';


module.exports = React.createClass({

  render() {
    return (
      <html>
        <head>
          <title>Opsee</title>
          <link rel="stylesheet" type="text/css" href="style.css" />
        </head>

        <body>
          <div className={style.welcome}>
            Welcome to the filet zone.
          </div>

          <script src={this.props.assets.main} />
        </body>
      </html>
    );
  }
});