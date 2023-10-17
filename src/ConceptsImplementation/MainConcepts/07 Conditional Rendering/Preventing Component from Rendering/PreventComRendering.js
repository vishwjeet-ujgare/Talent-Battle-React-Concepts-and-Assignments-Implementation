import React from "react";
import WarningMsg from "./WarningMsg";

class PreventComRendering extends React.Component {
constructor()
{
    super();
    this.state={
        isWarning:false,
    }

    this.handleWarning=this.handleWarning.bind(this)
}

handleWarning()
{
    this.setState({
        isWarning:!this.state.isWarning
    })
}
  render() {
    return (
      <>
        <h2><mark>Preventing Component from Rendering</mark> </h2>
        <p>
          In rare cases you might want a component to hide itself even though it
          was rendered by another component. <br/>To do this return null instead of
          its render output.
        </p>

        <div>
            <WarningMsg isWarning={this.state.isWarning}/>
            <button onClick={this.handleWarning}>{(this.state.isWarning)?"Hide Warning ":"Show Warning"}</button>
        </div>
    </>
    );
  }
}
export default PreventComRendering;
