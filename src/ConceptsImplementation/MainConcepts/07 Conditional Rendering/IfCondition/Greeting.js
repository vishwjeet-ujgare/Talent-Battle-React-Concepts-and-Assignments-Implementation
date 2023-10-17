import React from "react";
import UserGreeting from "./UserGreeting";
import GuestGretting from "./GuestGretting";



function Greeting(props) {
  const isLogin = props.isLogin;
  if (isLogin) {
    return <UserGreeting />;
  } else {
    return <GuestGretting />;
  }
}

export default Greeting;
