import React, { Component } from 'react';
import './VolumeSlider.css'

class VolumeSlider extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  	  <div className="VolumeSlider">
  	  	<input type="range" 
               min="0.0" 
               max="1.0" 
               step="0.01"
               value={this.props.volume}
               onChange={this.props.adjustVolume}
               className="vol-slide" />
  	  </div>
  	);
  }
}

export default VolumeSlider;