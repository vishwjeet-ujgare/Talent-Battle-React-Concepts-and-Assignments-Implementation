import './ChangeTextButton.css'
import React, { Component } from "react";

class ChangeTextButton extends Component {
  constructor() {
    super();
    this.state = {
      message: "Click On a Button To Change a Msg",
      textColor:"aqua",
      randomColor:"rgb(255,255,255)"
    }
  }

  changeText() {
    this.setState({
      message: "You have Clicked Button Successfuly..!!"
    })
  }

  changeTextColor(textColor)
  {
    this.setState({
      textColor:textColor
  })
  }

   randomColor() {
    this.setState({
      randomColor : `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    
    })

  }

  addRandomBackground() {
    const msgElem = document.getElementById('msg');
    if (msgElem) {
      msgElem.style.backgroundColor = `rgb(
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)}
      )`;
    }
  }
  render() {
    return (
      <div>
        <h1 id="msg" style={{backgroundColor:this.state.textColor}}>{this.state.message}</h1>
        <button onClick={()=>this.changeText()}>Click Here</button>
       <button onClick={()=>this.changeTextColor("red")} >Red</button>
       <button onClick={()=>this.changeTextColor("blue")} >Blue</button>
       <button onClick={()=>this.addRandomBackground()} >Random Color</button>
       <button onClick={()=>this.changeTextColor("white")} >Reset Color</button>
      </div>
    );
  }
}

export default ChangeTextButton;
