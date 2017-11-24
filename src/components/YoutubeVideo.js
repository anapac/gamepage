import React from 'react';

import './YoutubeVideo.css';

class YoutubeVideo extends React.Component {
  render () {
    return (
      <iframe
        title={this.props.videoId}
        className="youtubeVideo"
        src={"https://www.youtube.com/embed/" + this.props.videoId}
        frameBorder="0"
        allowFullScreen="true">
      </iframe>
    );
  } // render()
} // class YoutubeVideo

export default YoutubeVideo;
