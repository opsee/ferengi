import React from 'react';
import Button from '../forms/Button';
import { Padding } from '../layout';
import { Col, Row } from 'emissary/src/js/modules/bootstrap';

export default React.createClass({
  render() {
    return (
      <div>
        <h2 className="text-accent">Press Kit</h2>
        <p>A collection of Opsee brand resources and assets for your use:</p>

        <div className="section">
          <h3>Logo Usage Guidelines</h3>
          <ul>
            <li><p>Do not modify these logos, or use them suggest sponsorship or endorsement by Opsee.</p></li>
            <li><p>Do not use these logos to confuse any other brand with Opsee</p></li>
            <li><p>Do not use these logos on colors that clash, or are difficult to read. Different versions of the logo are provided for light and dark backgrounds - please use them appropriately. Monochrome logos are also provided if your usage requires them, or if you&rsquo;re in doubt about which color version will work best.</p></li>
            <li><p>Do not change the colors, rotate, or obstruct any part of the logo</p></li>
          </ul>
        </div>

        <div className="section">
          <h3>Logo pack</h3>

          <p>All logo variants, available for download as a .zip file:</p>

          <Row className="padding-tb">
            <Col xs={12} className="text-center">
              <div className="padding-b">
                <a href="https://s3-us-west-1.amazonaws.com/opsee-public-images/opseelogos-all.zip"><img src={'/' + require('../images/press/opseelogos-all.png')} alt="all Opsee logos for download"/></a>
              </div>

              <div className="padding-b">
                <Padding tb={2}>
                  <Button to="https://s3-us-west-1.amazonaws.com/opsee-public-images/opseelogos-all.zip" target="_blank" secondary chevron>
                    Download
                  </Button>
                </Padding>
                <p><small>All logos come in small and large PNG, and vector SVG formats (161kB .ZIP file)</small></p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
});