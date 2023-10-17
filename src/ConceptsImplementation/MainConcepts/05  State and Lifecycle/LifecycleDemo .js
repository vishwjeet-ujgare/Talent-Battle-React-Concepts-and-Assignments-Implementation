import React, { Component } from "react";

class LifecycleDemo extends Component {
  // Constructor is called when the component is created
  constructor() {
    super();
    console.log("Constructor invoked.");
    
    // Initialize state in the constructor
    this.state = {
      message: "Hello talent battle",
      checkboxState:true
    };
  }

  // componentDidMount is called after the component is inserted into the DOM
  componentDidMount() {
    console.log("componentDidMount called");
    console.log("=====================");
  }

  // componentDidUpdate is called after a component's updates are flushed to the DOM
  componentDidUpdate() {
    console.log("componentDidUpdate called");
    console.log("=====================");
  }

  // componentWillUnmount is called just before the component is unmounted from the DOM
  componentWillUnmount() {
    console.log("componentWillUnmount called");
    console.log("=====================");
  }

  // Handle button click to update state
  updateMsg = () => {
    this.setState({ message: "Message is updated" });
  };

  shouldComponentUpdate()
  {
    return this.state.checkboxState;
  }

  handleCheckboxChange = () => {
    this.setState((prevState) => ({
      checkboxState: !prevState.checkboxState
    }));
  };

  // render is required and it returns the JSX to be rendered
  render() {
    return (
      <div>
        <h2>Demonstrate a component lifecycle</h2>
        <mark>Open console to see output</mark>
        <h3>{this.state.message}</h3>
        <button onClick={this.updateMsg}> Update Values</button>
      <div>
      <input type="checkbox" onChange={this.handleCheckboxChange}/>
      <label>Stop Updating</label>
      </div>
      
      </div>
    );
  }
}

export default LifecycleDemo;
