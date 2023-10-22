import React, { Component } from "react";
import Button from "./Button";
import "./CSS/buttonComponent.css";
class ButtonComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const isStateEmpty = this.props.isStateEmpty;
    const isOperaterPresent = this.props.isOperaterPresent;
    const leftValue = this.props.leftValue;
    const rightValue = this.props.rightValue;
    const operator = this.props.operator;
    const outputValue = this.props.outputValue;
    const inputValue = this.props.inputValue;

    return (
      <div id="button-component">
        <div className="row">
          <Button
            btnText="+"
            handleInputOutput={this.props.handleInputOutput}
            inputValue={inputValue}
            operator = {operator}
            isOperaterPresent = {isOperaterPresent}
            focusInput={this.props.focusInput}
            isStateEmpty={isStateEmpty}
   
          />
          <Button
            btnText="-"
            handleInputOutput={this.props.handleInputOutput}
            inputValue={inputValue}
            operator = {operator}
            isOperaterPresent = {isOperaterPresent}
            focusInput={this.props.focusInput}
            isStateEmpty={isStateEmpty}
          />
        </div>

        <div className="row">
          <Button
            btnText="x"
            handleInputOutput={this.props.handleInputOutput}
            inputValue={inputValue}
            operator = {operator}
            isOperaterPresent = {isOperaterPresent}
            focusInput={this.props.focusInput}
            isStateEmpty={isStateEmpty}
          />
          <Button
            btnText="/"
            handleInputOutput={this.props.handleInputOutput}
            inputValue={inputValue}
            operator = {operator}
            isOperaterPresent = {isOperaterPresent}
            focusInput={this.props.focusInput}
            isStateEmpty={isStateEmpty}
          />
        </div>

        <div className="row ">
          <Button
            btnText="="
            handleInputOutput={this.props.handleInputOutput}
            isStateEmpty={isStateEmpty}
            focusInput={this.props.focusInput}
            outputValue={outputValue}
          />
        </div>

        <div className="row ">
          <Button
            btnText="Clear"
            handleInputOutput={this.props.handleInputOutput}
            focusInput={this.props.focusInput}
          />
        </div>
      </div>
    );
  }
}

export default ButtonComponent;
