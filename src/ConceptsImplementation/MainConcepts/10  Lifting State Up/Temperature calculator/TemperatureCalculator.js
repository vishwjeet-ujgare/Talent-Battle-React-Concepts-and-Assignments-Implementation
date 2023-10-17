import React, { Component } from "react";
import TemperatureInputFields from "./TemperatureInputFields";
import BoilingVerdict from "./BoilingVerdict";
import { tryConvert } from "./TempConverter";

class TemperatureCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      scale: "celsius",
    };
    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelciusChange(temp) {
    this.setState({
      scale: "celsius",
      temperature: temp,
    });
  }

  handleFahrenheitChange(temp) {
    this.setState({
      scale: "fahrenheit",
      temperature: temp,
    });
  }

  render() {
    const scale = this.state.scale;
    const temp = this.state.temperature;
    const celcius =
      scale === "fahrenheit" ? tryConvert(temp, "toCelsius") : temp;
    const fahrenheit =
      scale === "celsius" ? tryConvert(temp, "toFahrenheit") : temp;

    return (
      <div>
         <br />
        <div>
          <a href="https://legacy.reactjs.org/docs/lifting-state-up.html">
            {" "}
            Lifting State Up
          </a>
          <br />
          There should be a single “source of truth” for any data that changes in a React application. Usually, the state is first added to the component that needs it for rendering. Then, if other components also need it, you can lift it up to their closest common ancestor. Instead of trying to sync the state between different components,
        </div>
        <br />
        <TemperatureInputFields
          scale="celsius"
          temperature={celcius}
          onTemperatureChange={this.handleCelciusChange}
        />
        <TemperatureInputFields
          scale="fahrenheit"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celcius={celcius} />
      </div>
    );
  }
}
export default TemperatureCalculator;
