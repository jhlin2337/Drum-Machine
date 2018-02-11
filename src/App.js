import React, { Component } from 'react';
import Keyboard from './Keyboard'
import Controller from './Controller'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPowerOn: true,
      isPianoKitOn: false,
      volume: 0.5,
      text: "Volume: 50"
    }

    this.togglePower = this.togglePower.bind(this);
    this.togglePianoKit = this.togglePianoKit.bind(this);
    this.adjustVolume = this.adjustVolume.bind(this);
  }

  togglePower() {
    this.setState(prevState => ({
      isPowerOn: !prevState.isPowerOn
    }));
  }

  togglePianoKit() {
    this.setState(prevState => ({
      isPianoKitOn: !prevState.isPianoKitOn
    }));
  }

  adjustVolume(event) {
    this.setState({
      volume: event.target.value,
      text: "Volume: " + Math.round(this.state.volume * 100)
    });
  }

  render() {
    return (
      <div className="App">
        <Keyboard isPowerOn={this.state.isPowerOn}
                  isPianoKitOn={this.state.isPianoKitOn}
                  volume={this.state.volume}/>
        <Controller isPowerOn={this.state.isPowerOn} 
                    togglePower={this.togglePower}
                    isPianoKitOn={this.state.isPianoKitOn}
                    togglePianoKit={this.togglePianoKit} 
                    volume={this.state.volume}
                    adjustVolume={this.adjustVolume}
                    text={this.state.text}/>
      </div>
    );
  }
}

export default App;
