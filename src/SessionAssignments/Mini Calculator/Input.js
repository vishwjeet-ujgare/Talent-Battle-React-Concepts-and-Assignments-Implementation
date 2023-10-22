import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyDown(e) {
    const k = e.key;
    if (
      (k >= 0 && k <= 9 && k !== " ") ||
      k === "Backspace" ||
      k === "Delete" ||
      k === "ArrowLeft" ||
      k === "ArrowRight"
    ) {
    } else {
      e.preventDefault();
    }
  }

  handleChange(e) {
    let unfilterInputValue = e.target.value;

    if (unfilterInputValue === "") {
      this.props.handleInputOutput(true, false, "", "", "", "", "");
      console.log("Input is empty");
      return;
    } else {
      this.props.handleInputOutput(
        false,
        false,
        "",
        "",
        "",
        unfilterInputValue,
        ""
      );
    }

    if (unfilterInputValue.includes("+")) {
      this.splitToLeftRgithValues(unfilterInputValue, "+");
    } else if (unfilterInputValue.includes("-")) {
      this.splitToLeftRgithValues(unfilterInputValue, "-");
      console.log("it include Substraction");
    } else if (unfilterInputValue.includes("x")) {
      this.splitToLeftRgithValues(unfilterInputValue, "x");
      console.log("it include Multiplicaion");
    } else if (unfilterInputValue.includes("/")) {
      this.splitToLeftRgithValues(unfilterInputValue, "/");
      console.log("it include Division");
    }
  }

  splitToLeftRgithValues(inputValue, operator) {
    let leftRigthValues = inputValue.split(operator);
    let leftValue = Number.parseInt(leftRigthValues[0]);
    let rightValue = Number.parseInt(leftRigthValues[1]);

    if (!Number.isNaN(leftValue) && !Number.isNaN(rightValue)) {
      if (rightValue === 0 && operator === "/") {
        
        this.props.handleInputOutput(false, true, leftValue, rightValue, operator, inputValue, "Can't Divide by zero");
      } else {
        let outputValue;
        if ("+" === operator) {
          outputValue = leftValue + rightValue;
        } else if ("-" === operator) {
          outputValue = leftValue - rightValue;
        } else if ("x" === operator) {
          outputValue = leftValue * rightValue;
        } else if ("/" === operator) {
          outputValue = leftValue / rightValue;
        }
        this.props.handleInputOutput(false, true, leftValue, rightValue, operator, inputValue, outputValue);
      }
  }
  }


  render() {
    const inputValue = this.props.inputValue ? this.props.inputValue : "";
    return (
      <input
        id="input"
        type="text"
        value={inputValue}
        ref={this.props.inputRef}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange}
      />
    );
  }
}

export default Input;
