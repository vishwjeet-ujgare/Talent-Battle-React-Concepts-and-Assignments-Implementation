import React from "react";

class userInfo extends React.Component {

  render() {
    return (
      <div className="userInfo">
        <div className="avtart">
          <img src={this.props.user.srcUrl} alt={this.props.user.name} />
        </div>
        <div className="userInfo-name">{this.props.user.name}</div>
      </div>
    );
  }
}
export default userInfo;
