import React from "react";
import YouTube from "react-youtube";

 
class Video extends React.Component {
    
  render() {
    const opts = {
      height: '620px',
      width: '95%',
  
      opacity: '0.5',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        'controls': 0,
        loop: 1
      }
    };
    
    return (
      <YouTube
        videoId="7n9aMTKKIR4"
        opts={opts}
        onReady={this._onReady}
      />
    );
};

_onReady(event) {
    event.target.playVideo();
}
};
  
export default Video;