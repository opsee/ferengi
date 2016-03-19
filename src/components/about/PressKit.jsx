import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <h2 className='text-accent'>Press Kit</h2>
        <p>A collection of Opsee brand resources and assets for your use:</p>

        <h3>Logo Usage Guidelines</h3>
        <ul>
          <li>Do not modify these logos, or use them suggest sponsorship or endorsement by Opsee.</li>
          <li>Do not use these logos to confuse any other brand with Opsee</li>
          <li>Do not use these logos on colors that clash, or are difficult to read. Different versions of the logo are provided for light and dark backgrounds - please use them appropriately. Monochrome logos are also provided if your usage requires them, or if you&rsquo;re in doubt about which color version will work best.</li>
          <li>Do not change the colors, rotate, or obstruct any part of the logo</li>
        </ul>

        <h3>Logo Pack</h3>

        <p>All logo variants, available for download as a .ZIP file:</p>

        <div className="row padding-tb">
          <div className="col-xs-12 text-center">
            <div className="padding-b">
              <a href="https://s3-us-west-1.amazonaws.com/opsee-public-images/opseelogos-all.zip"><img src={'/' + require('../images/press/opseelogos-all.png')} alt="all Opsee logos for download"/></a>
            </div>
            <div className="padding-b">
              <a className="btn btn-primary btn-block" href="https://s3-us-west-1.amazonaws.com/opsee-public-images/opseelogos-all.zip">DOWNLOAD</a>
              <small>All logos come in small and large PNG, and vector SVG formats (161kB .ZIP file)</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
});