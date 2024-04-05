import React from "react";

class UserClass extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "undefined",
        location: "undefined",
        contact: "undefined",
      },
    };
    console.log("child constructor");
  }
  async componentDidMount() {
    console.log("child componentDidMount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({ userInfo: json });

    console.log(json);
  }

  render() {
    console.log("child render");
    const { name, location, contact, avatar_url } = this.state.userInfo;
    return (
      <div
        style={{ border: "2px solid black", margin: "10px", padding: "10px" }}
      >
        <img src={avatar_url} alt="avatar" />
        <h1>Name: {name}</h1>
        <h1>Location: {location}</h1>
        <h1>Contact: {contact || "not provided"}</h1>
      </div>
    );
  }
}
export default UserClass;
