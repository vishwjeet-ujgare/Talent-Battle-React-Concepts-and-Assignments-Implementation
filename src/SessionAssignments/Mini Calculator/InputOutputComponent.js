import React from "react";
import Input from "./Input";
import Output from "./Output";
import "./CSS/inputOutputComponent.css";
class InputOutputComponent extends React.Component {
  render() {
    const isStateEmpty = this.props.isStateEmpty;
    const isOperaterPresent = this.props.isOperaterPresent;
    const leftValue = this.props.leftValue;
    const rightValue = this.props.rightValue;
    const operator = this.props.operator;
    const outputValue = this.props.outputValue;
    const inputValue = this.props.inputValue;
    return (
      <div id="input-output-component">
        <Input
          handleInputOutput={this.props.handleInputOutput}
          isStateEmpty={isStateEmpty}
          isOperaterPresent={isOperaterPresent}
          leftValue={leftValue}
          rightValue={rightValue}
          operator={operator}
          inputValue={inputValue}
          outputValue={outputValue}
          inputRef={this.props.inputRef}
        />
        <Output
          handleInputOutput={this.props.handleInputOutput}
          isStateEmpty={isStateEmpty}
          isOperaterPresent={isOperaterPresent}
          leftValue={leftValue}
          rightValue={rightValue}
          operator={operator}
          inputValue={inputValue}
          outputValue={outputValue}
        />
      </div>
    );
  }
}
export default InputOutputComponent;
