import React, { Component } from 'react';
import './SelectInput.css'

class SelectInput extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  	  <div className="SelectInput">
  	  	<p>{this.props.name}</p>
  	  	<div className="select">
  	  	  <div className="slider" 
               style={{float: this.props.isOn ? 'right': 'left'}}
               onClick={this.props.toggle} />
  	  	</div>
  	  </div>
  	);
  }
}

export default SelectInput;