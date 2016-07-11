import cx from 'classnames';
import React, { PropTypes } from 'react';
import {Button} from '../forms';
import style from './videoPlayer.css';
import {Play} from 'emissary/src/js/components/icons';

const VideoPlayer = React.createClass({
  propTypes: {
    className: PropTypes.string
  },
  getInitialState() {
    return {
      show: false
    };
  },
  handleButtonClick(){
    const iframe = document.querySelector('#video');
    const player = new window.Vimeo.Player(iframe);
    this.setState({
      show: true
    });
    player.play().catch(err => {
      console.log(err);
    });
  },
  render() {
    return (
      <div className={style.outer}>
        {!this.state.show && <Button secondary="true" onClick={this.handleButtonClick} className={style.button}>Watch the video&nbsp;<Play btn/></Button>}
        <div className={cx(style.wrapper, this.state.show && style.show)}>
          <iframe src="https://player.vimeo.com/video/173789397?color=e53a35&title=0&byline=0&portrait=0" className={style.iframe} frameBorder="0" allowFullScreen id="video"></iframe>
        </div>
      </div>
    );
  }
});

export default VideoPlayer;