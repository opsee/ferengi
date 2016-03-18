import React from 'react';

import {ga} from '../../modules';

const Analytics = React.createClass({
  contextTypes: {
    history: React.PropTypes.object.isRequired
  },
  componentDidMount() {
    this.historyListener = this.context.history.listen((err, renderProps) => {
      if (err || !renderProps) {
        return;
      }
      this.runPageview(renderProps.location);
    });
  },
  shouldComponentUpdate() {
    return false;
  },
  componentWillUnmount() {
    if (!this.historyListener) {
      return;
    }
    this.historyListener();
    this.historyListener = null;
  },
  runPageview(location = {}) {
    const path = location.pathname + location.search;
    if (this.latestUrl === path) {
      return;
    }
    this.latestUrl = path;

    // wait for correct title
    setTimeout(() => {
      ga('send', 'pageview', {
        page: path,
        title: document.title
      });
    }, 0);
  },
  render() {
    return null;
  }
});

export default Analytics;