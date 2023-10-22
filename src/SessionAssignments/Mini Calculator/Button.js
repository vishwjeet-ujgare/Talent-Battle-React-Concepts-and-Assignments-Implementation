import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.focusInput = this.props.focusInput;
  }

  handleOnClick() {
    if (this.props.isOperaterPresent || this.props.isStateEmpty ||(this.props.inputValue=="Can't Divide by zero")) {
      this.focusInput();
      return;
    }

    if (this.props.btnText === "+") {
      this.handleAddition();
    } else if (this.props.btnText === "-") {
      this.handleSubstraction();
    } else if (this.props.btnText === "x") {
      this.handleMultiplication();
    } else if (this.props.btnText === "/") {
      this.handleDivision();
    } else if (this.props.btnText === "=") {
      this.handleEqualsTo();
    } else if (this.props.btnText === "Clear") {
      this.handleClear();
    }

    this.focusInput();
  }

  handleAddition() {
    let inputValue = this.props.inputValue;
console.log("input value "+inputValue)
    if (
      inputValue == undefined ||
      (inputValue != undefined && inputValue.includes("+"))
    ) {
      return;
    } else {
      this.props.handleInputOutput(
        false,
        true,
        "",
        "",
        "+",
        this.props.inputValue + "+",
        "0"
      );
    }
  }

  handleSubstraction() {
    let inputValue = this.props.inputValue;
    console.log("Substraction " + " -");
    if (
      inputValue == undefined ||
      (inputValue != undefined && inputValue.includes("-"))
    ) {
      return;
    } else {
      this.props.handleInputOutput(
        false,
        true,
        "",
        "",
        "-",
        this.props.inputValue + "-",
        "0"
      );
    }
  }

  handleMultiplication() {
    let inputValue = this.props.inputValue;
    console.log("Multiplication " + " x");
    if (
      inputValue == undefined ||
      (inputValue != undefined && inputValue.includes("x"))
    ) {
      return;
    } else {
      this.props.handleInputOutput(
        false,
        true,
        "",
        "",
        "x",
        this.props.inputValue + "x",
        "0"
      );
    }
  }

  handleDivision() {
    let inputValue = this.props.inputValue;
    console.log("Division " + " /");
    if (
      inputValue == undefined ||
      (inputValue != undefined && inputValue.includes("/"))
    ) {
      return;
    } else {
      this.props.handleInputOutput(
        false,
        true,
        "",
        "",
        "/",
        this.props.inputValue + "/",
        ""
      );
    }
  }

  handleEqualsTo() {
    if (this.props.outputValue == "0") {
      return;
    }

    console.log(this.props.outputValue);
    this.props.handleInputOutput(
      false,
      false,
      "",
      "",
      "",
      (""+this.props.outputValue),
      "0"
    );
  }

  handleClear() {
    this.props.handleInputOutput(true, false, "", "", "", "", "");
  }

  render() {
    return (
      <button className="button" onClick={this.handleOnClick}>
        {this.props.btnText}
      </button>
    );
  }
}

export default Button;
