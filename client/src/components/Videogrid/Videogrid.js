import React from "react";
import YouTube from "react-youtube";

 
class Videogrid extends React.Component {
    
  render() {
    const opts = {
      height: '300px',
      width: '40%',
  
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
  
export default Videogrid;