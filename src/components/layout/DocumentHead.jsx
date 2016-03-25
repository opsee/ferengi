import _ from 'lodash';
import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { DEFAULT_META, ROUTE_META } from '../../constants/routeMeta';

/**
 * This component provides isomorphic meta for the document <head> tag.
 * It is used both on the server (see render-server.js) to render the static pages,
 * and on on the client (see the main App.jsx component) so that route changes
 * trigger document meta changes (e.g., changing <title>).
 *
 * For more documentation, check out the react-helmet library:
 * https://github.com/nfl/react-helmet
 */
export default React.createClass({
  propTypes: {
    // The absolute path for the page, e.g., /foo/bar (or /foo/bar/)
    path: PropTypes.string.isRequired
  },

  getPath() {
    // Since route meta is keyed without the trailing slash, make sure we strip
    // any trailing slashes from the route prop before lookup
    const pathname = this.props.path;
    if (pathname.substr(-1) === '/') {
      return pathname.substr(0, pathname.length - 1);
    }
    return pathname;
  },

  render() {
    const path = this.getPath();
    const meta = _.assign({}, DEFAULT_META, ROUTE_META[path]);

    return (
      <Helmet
        title={meta.title}
        meta={[
          { name: 'description', content: meta.description },
          { name: 'title',       content: meta.title },
          { name: 'copyright',   content: `Copyright ${new Date().getUTCFullYear()} Opsee, Inc. All rights reserved.` },

          { name: 'og:site_name',   content: meta.title },
          { name: 'og:title',       content: meta.title },
          { name: 'og:type',        content: 'website' },
          { name: 'og:description', content: meta.excerpt },
          { name: 'og:url',         content: 'https://opsee.com' },
          { name: 'og:url',         content: meta.cover },

          { name: 'twitter:card',        content: 'summary_large_image'},
          { name: 'twitter:site',        content: meta.twitter },
          { name: 'twitter:title',       content: meta.title },
          { name: 'twitter:description', content: meta.excerpt },
          { name: 'twitter:url',         content: `https://opsee.com${this.props.path}` },
          { name: 'twitter:creator',     content: meta.twitter },
          { property: 'twitter:image',   content: meta.cover}
        ]}
      />
    );
  }
});