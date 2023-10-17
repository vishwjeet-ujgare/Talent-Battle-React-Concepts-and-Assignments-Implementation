import React from "react";
import GuestGretting from "./GuestGretting";
import UserGreeting from "./UserGreeting";
import SubTitle from "./SubTitle";

class IfCondition extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
      BtnMsg: "Sign In",
    };
    this.handeClick = this.handeClick.bind(this);
  }

  //find out what is wrong here
  // handeClick(e) {
  //   this.setState(()=>({
  //     isLogin: !this.state.isLogin,
  //   }))

  //  { (this.state.isLogin)
  //     ? this.setState(()=>({ BtnMsg: "Sign In  " }))
  //     : this.setState(()=>({ BtnMsg: "Sign Out " }));}
  // }

  handeClick(prevState) {
    this.setState((prevState) => ({
      isLogin: !prevState.isLogin,
      BtnMsg: prevState.isLogin ? "Sign In" : "Sign Out",
    }));
  }
  render() {
    return (
      <div>
         <div>
          <p>
            <mark>
              In React, you can create distinct components that encapsulate
              behavior you need.
              <br /> Then, you can render only some of them, depending on the
              state
              <br />   

                   
            </mark>
          </p>
          <SubTitle subTitleMsg="if Statement with stateFull"/>   
        </div>

        <div>
          {this.state.isLogin ? <UserGreeting /> : <GuestGretting />}
          <button onClick={this.handeClick}>{this.state.BtnMsg}</button>
        </div>
      </div>
    );
  }
}




export default IfCondition;
