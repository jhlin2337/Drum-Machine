import React, { Component } from 'react';
import SelectInput from './SelectInput';
import Display from './Display';
import VolumeSlider from './VolumeSlider';
import './Controller.css';

class Controller extends Component {
  constructor(props) {
  	super(props);
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
  	return (
  	  <div className="Controller">
  	    <SelectInput name="Power" 
                     isOn={this.props.isPowerOn} 
                     toggle={this.props.togglePower}/>
  	    <Display text={this.props.isPowerOn ? this.props.text: ""} />
  	    <VolumeSlider volume={this.props.volume}
                      adjustVolume={this.props.isPowerOn ? this.props.adjustVolume: null}/>
  	    <SelectInput name="Bank" 
                     isOn={this.props.isPianoKitOn}
                     toggle={this.props.isPowerOn ? this.props.togglePianoKit: null}/>
  	  </div>
  	)
  }
}

export default Controller;