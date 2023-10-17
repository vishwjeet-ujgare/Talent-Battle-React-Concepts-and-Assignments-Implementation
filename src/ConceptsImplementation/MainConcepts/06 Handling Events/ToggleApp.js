import React from "react";

class ToggleApp extends React.Component {
  constructor() {
    super();
    this.state = {
      isToggle: true,
    };
    // This binding is necessary to make `this` work in the callback
     this.handleClick = this.handleClick.bind(this);

    this.checkboxE = document.getElementById("checkbox");
  }

  handleClick(e) {
    this.setState({
      isToggle: !this.state.isToggle,
    });
  }

  render() {
    return (
      <div>
        <div>
          <mark>
            . React events do not work exactly the same as native events.
            Check out bind method also 
          </mark>
        </div>
        <div>
          <input
            id="checkbox"
            type="checkbox"
            checked={this.state.isToggle}
            disabled={true}
          />
          <label>{this.state.isToggle ? "Checked" : "Unchecked"}</label>
        </div>
        <button style={{ width: "200px" }} onClick={this.handleClick}>
          Toggle Checkbox
        </button>
         {/* This syntax ensures `this` is bound within handleClick */}
        <button
          style={{ width: "200px" }}
          onClick={() => {
            this.handleClick();
          }}
        > 
          Toggle Checkbox with arrow funcnality
        </button>
       
      </div>
    );
  }
}

export default ToggleApp;
