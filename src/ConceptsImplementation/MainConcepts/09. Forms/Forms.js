import React from "react";
import "./Forms.css";

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      dob: "2000-01-01",
      education: "Graduation",
      gender: "",
      msg: "",
      img: "",
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(event) {
    let targetElm = event.target;
    let targetName = targetElm.name;
    let targetValue = targetElm.value;

    if (targetName === "firstName") {
      this.setState({
        firstName: targetValue,
      });
    } else if (targetName === "lastName") {
      this.setState({
        lastName: targetValue,
      });
    } else if (targetName === "dob") {
      this.setState({
        dob: targetValue,
      });
    } else if (targetName === "education") {
      this.setState({
        education: targetValue,
      });
    } else if (targetName === "gender") {
      this.setState({
        gender: targetValue,
      });
    } else if (targetName === "textarea") {
      this.setState({
        msg: targetValue,
      });
    } else if (targetName === "img") {
      this.setState({
        img: targetElm.files[0],
      });
    }
  }

  handleSubmit(event) {
    // Creating an object with form data
    const formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      dob: this.state.dob,
      education: this.state.education,
      gender: this.state.gender,
      msg: this.state.msg,
      img: this.state.img ? this.state.img.name : "No Image Selected",
    };

    alert("Given data is submitted:\n" + JSON.stringify(formData, null, 2));
    event.preventDefault();
  }

  render() {
    return (
      <div>
<div>
  <h2>Controlled Components,The textarea Tag,The select Tag,The file input Tag,Handling Multiple Inputs,Controlled Input Null Value</h2>
  <h2><mark>Enter you data</mark> </h2>
  </div>


        <div className="mainDiv">
          <div className="leftDiv">
            <form onSubmit={this.handleSubmit}>
              <label>
                First Name :
                <input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleFirstNameChange}
                />
              </label>

              <br />
              <label>
                Last Name :
                <input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleFirstNameChange}
                />
              </label>

              <br />
              <label>
                Birth Date :
                <input
                  type="date"
                  name="dob"
                  value={this.state.dob}
                  onChange={this.handleFirstNameChange}
                />
              </label>

              <br />
              <label>
                Education :
                <select
                  name="education"
                  value={this.state.education}
                  onChange={this.handleFirstNameChange}
                >
                  <option value="12th">Higher Secondary Education</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Graduation" selected>
                    Graduation
                  </option>
                  <option value=" Post Graduation ">Post Graduation</option>
                </select>
              </label>

              <br />
              <label>
                Gender:
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={this.handleFirstNameChange}
                />{" "}
                Male
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={this.handleFirstNameChange}
                />{" "}
                Female
              </label>

              <br />
              <label>
                Why should we hire you ? :<br />
                <textarea
                  name="textarea"
                  value={this.state.msg}
                  onChange={this.handleFirstNameChange}
                ></textarea>
              </label>

              <br />
              <label>
                Select Image :
                <input
                  type="file"
                  name="img"
                  onChange={this.handleFirstNameChange}
                />
              </label>
              <br />
              <br />
              <input type="submit" style={{ width: "180px", height: "40px" }} />
            </form>
          </div>
          <div className="rightDiv">
            <p>
              First Name : {this.state.firstName}
              <br />
              Last Name : {this.state.lastName}
              <br />
              Birth Date : {this.state.dob}
              <br />
              Education :{this.state.education} <br />
              Gender :{this.state.gender} <br />
              Other Information : {this.state.msg}
              <br />
            </p>
            <div>
              Photo:
              <br />
              {this.state.img && (
                <img
                  className="img"
                  src={URL.createObjectURL(this.state.img)}
                  alt="img"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Forms;

/*
 first name :
 last Name:
 Birth Date :
 select Education from higher education , Graduation , Post graduation , diploma , other
 Gender  checkbox male  Female other 
 textarea 
 Photo : file hanling 
*/
