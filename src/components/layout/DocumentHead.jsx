import React, { PropTypes } from 'react';
import Helmet from "react-helmet";

export default React.createClass({
  propTypes: {
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired
  },

  render() {
    return (
      <Helmet
        title={this.props.title}
        meta={[
          { name: 'description', content: this.props.description },
          { name: 'title',       content: this.props.title },
          { name: 'copyright',   content: `Copyright ${new Date().getUTCFullYear()} Opsee, Inc. All rights reserved.` }

          { name: 'og:site_name',   content: this.props.title },
          { name: 'og:title',       content: this.props.title },
          { name: 'og:type',        content: 'website' },
          { name: 'og:description', content: this.props.excerpt },
          { name: 'og:url',         content: 'https://opsee.com' },
          { name: 'og:url',         content: this.props.cover },

          { name: 'twitter:card',        content: 'summary_large_image'},
          { name: 'twitter:site',        content: this.props.twitter },
          { name: 'twitter:title',       content: this.props.title },
          { name: 'twitter:description', content: this.props.excerpt },
          { name: 'twitter:url',         content: `https://opsee.com${this.props.path}` },
          { name: 'twitter:creator',     content: this.props.twitter },
          { property: 'twitter:image',   content: this.props.cover}
        ]}
      />
    );
  }
});