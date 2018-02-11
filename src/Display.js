import React, { Component } from 'react';
import './Display.css'

class Display extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	return(
  	  <div className="Display">
  	  	<p>{this.props.text}</p>
  	  </div>
  	);
  }
}

export default Display;