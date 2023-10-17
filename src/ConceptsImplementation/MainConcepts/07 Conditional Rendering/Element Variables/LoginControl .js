import React from "react";
import LogoutButton from "./LogoutButton";
import Greeting from "../IfCondition/Greeting";
import LoginButton from "./LogineButton";

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <div>
          <h3><mark>Element Variables</mark></h3> 
          <p>You can use variables to store elements. <br/>This can
          help you conditionally render a part of the component while the rest
          of the output doesn’t change.</p>
        </div>
        <Greeting isLogin={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
