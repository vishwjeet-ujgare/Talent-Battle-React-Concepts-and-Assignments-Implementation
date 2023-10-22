import React from "react";
import Title from "./Title";
import InputOutputComponent from "./InputOutputComponent";
import ButtonComponent from "./ButtonComponent";

class MiniCalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      isStateEmpty: true,
      isOperaterPresent: false,
      leftValue: "",
      rightValue: "",
      operator: "",
      inputValue : "",
      outputValue: "",
    };
    this.inputRef = React.createRef();
    this.handleInputOutput = this.handleInputOutput.bind(this);
    this.focusInput=this.focusInput.bind(this)
  }

  handleInputOutput(
    isStateEmpty = true,
    isOperaterPresent = false,
    leftValue = "",
    rightValue = "",
    operator = "",
    inputValue = "",
    outputValue = ""
  ) {
    this.setState({
      isStateEmpty: isStateEmpty,
      isOperaterPresent: isOperaterPresent,
      leftValue: leftValue,
      rightValue: rightValue,
      operator: operator,
      inputValue: inputValue,
      outputValue: outputValue,
    });
  }


  focusInput = () => {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  };
  render() {
    const isStateEmpty = this.state.isStateEmpty;
    const isOperaterPresent = this.state.isOperaterPresent;
    const leftValue = this.state.leftValue;
    const rightValue = this.state.rightValue;
    const operator = this.state.operator;
    const inputValue = this.state.inputValue;
    const outputValue = this.state.outputValue;
    return (
      <div id="mini-calculator-container">
        <Title />
        <InputOutputComponent
          handleInputOutput={this.handleInputOutput}
          isStateEmpty={isStateEmpty}
          isOperaterPresent={isOperaterPresent}
          leftValue={leftValue}
          rightValue={rightValue}
          operator={operator}
          inputValue={inputValue}
          outputValue={outputValue}
          inputRef={this.inputRef}
        />
        <ButtonComponent
          handleInputOutput={this.handleInputOutput}
          isStateEmpty={isStateEmpty}
          isOperaterPresent={isOperaterPresent}
          leftValue={leftValue}
          rightValue={rightValue}
          operator={operator}
          inputValue={inputValue}
          outputValue={outputValue}
          focusInput={this.focusInput}
        />
      </div>
    );
  }
}

export default MiniCalculator;
