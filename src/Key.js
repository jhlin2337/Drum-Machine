import React, { Component } from 'react';
import './Key.css';

class Key extends Component {
  constructor(props) {
  	super(props);
    this.state = {
      classes: "Key power-on"
    }

  	this.playSound = this.playSound.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isPowerOn) {
      this.setState({classes: "Key power-on"});
    } else {
      this.setState({classes: "Key"});
    }
  }

  playSound() {
    if (!this.props.isPowerOn) {
      return;
    }

  	let sound = new Audio(this.props.audio);
    sound.volume = this.props.volume;
  	sound.play();
  	sound.currentTime = 0;
  }

  render() {
  	return (
   	  <button className={this.state.classes}
              onClick={this.playSound}>
  	  	{this.props.value}
  	  </button>
  	)
  }
}

export default Key;