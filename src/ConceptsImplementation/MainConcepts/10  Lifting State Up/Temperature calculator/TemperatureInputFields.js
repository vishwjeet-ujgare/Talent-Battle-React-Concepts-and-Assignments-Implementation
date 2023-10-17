import React, { Component } from "react";
import "./TemperatureInputFields.css";

class TemperatureInputFields extends Component {
constructor(props)
{
  super(props)
  this.handleChange=this.handleChange.bind(this)
}

handleChange(e) {
  this.props.onTemperatureChange(e.target.value);
}
  render() {

    const scale=this.props.scale;
    const temperature=this.props.temperature

    return (
      <div>
        <fieldset>
          <legend>Enter temperature in {scale}:</legend>
          <input id="userInput" value={temperature} onChange={this.handleChange} />
        </fieldset>
      </div>
    );
  }
}

export default TemperatureInputFields;
