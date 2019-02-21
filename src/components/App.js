import React from "react";

import robot from "../assets/robot.svg";
import check from "../assets/check.svg";
import UserAuthorized from "./UserAuthorized";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      authShow: true
    };
    if (!localStorage.getItem("List")) {
      localStorage.setItem("List", JSON.stringify([]));
    }
  }

  handleChange = e => {
    const name = e.target.value;
    this.setState({ name });
  };

  handleVerify = () => {
    localStorage.setItem("name", this.state.name);
    this.setState({
      authShow: !this.state.authShow
    });
  };
  render() {
    if (!localStorage.getItem("name")) {
      return (
        <div className={this.state.authShow ? "main" : "main-hidden"}>
          <div className="main__header">
            <img src={robot} alt="robot" className="main__header--img" />
            <div className="main__header--text">
              Hello,I am your ToDo helper
            </div>
          </div>
          <div className="main__subheader">How can I call You?</div>
          <div className="main__container">
            <input
              className="main__container--input"
              onChange={this.handleChange}
              placeholder="Your Name"
            />
            <img
              src={check}
              alt="check"
              onClick={this.handleVerify}
              className={
                this.state.name.length > 2
                  ? "main__container--proceed-visible"
                  : "main__container--proceed"
              }
            />
          </div>
        </div>
      );
    } else {
      return <UserAuthorized />;
    }
  }
}

export default App;
