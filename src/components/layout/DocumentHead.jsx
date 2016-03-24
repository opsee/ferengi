import _ from 'lodash';
import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { DEFAULT_META, ROUTE_META } from '../../constants/routeMeta';

export default React.createClass({
  propTypes: {
    path: PropTypes.string.isRequired,
    cover: PropTypes.string,
    excerpt: PropTypes.string,
    title: PropTypes.string,
    twitter: PropTypes.string
  },

  render() {
    const meta = _.assign({}, DEFAULT_META, ROUTE_META[this.props.path], this.props);

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