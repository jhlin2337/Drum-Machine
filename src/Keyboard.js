import React, { Component } from 'react';
import Key from './Key'
import './Keyboard.css';

class Keyboard extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	const heaterSounds = {
  	  Q: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  	  W: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  	  E: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  	  A: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  	  S: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  	  D: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  	  Z: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  	  X: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  	  C: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  	}

  	const pianoSounds = {
  	  Q: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  	  W: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  	  E: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  	  A: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  	  S: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  	  D: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  	  Z: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  	  X: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  	  C: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  	}

	return (
	  <div className="keyboard">
		<div className="row1">
		  <Key value="Q" 
		  	   audio={this.props.isPianoKitOn ? pianoSounds['Q']: heaterSounds['Q']} 
		  	   isPowerOn={this.props.isPowerOn}
		  	   volume={this.props.volume}/>
		  <Key value="W" 
		  	   audio={this.props.isPianoKitOn ? pianoSounds['W']: heaterSounds['W']} 
		  	   isPowerOn={this.props.isPowerOn}
		  	   volume={this.props.volume}/>
		  <Key value="E" 
		  	   audio={this.props.isPianoKitOn ? pianoSounds['E']: heaterSounds['E']} 
		  	   isPowerOn={this.props.isPowerOn}
		  	   volume={this.props.volume}/>
		</div>
		<div className="row2">
		  <Key value="A" 
		  	   audio={this.props.isPianoKitOn ? pianoSounds['A']: heaterSounds['A']} 
		  	   isPowerOn={this.props.isPowerOn}
		  	   volume={this.props.volume}/>
		  <Key value="S" 
		  	   audio={this.props.isPianoKitOn ? pianoSounds['S']: heaterSounds['S']} 
		  	   isPowerOn={this.props.isPowerOn}
		  	   volume={this.props.volume}/>
		  <Key value="D" 
		  	   audio={this.props.isPianoKitOn ? pianoSounds['D']: heaterSounds['D']} 
		  	   isPowerOn={this.props.isPowerOn}
		  	   volume={this.props.volume}/>
		</div>
		<div className="row3">
		  <Key value="Z" 
		  	   audio={this.props.isPianoKitOn ? pianoSounds['Z']: heaterSounds['Z']} 
		  	   isPowerOn={this.props.isPowerOn}
		  	   volume={this.props.volume}/>
		  <Key value="X" 
		  	   audio={this.props.isPianoKitOn ? pianoSounds['X']: heaterSounds['X']} 
		  	   isPowerOn={this.props.isPowerOn}
		  	   volume={this.props.volume}/>
		  <Key value="C" 
		  	   audio={this.props.isPianoKitOn ? pianoSounds['C']: heaterSounds['C']} 
		  	   isPowerOn={this.props.isPowerOn}
		  	   volume={this.props.volume}/>
		</div>
	  </div>
	);
  }
}

export default Keyboard;