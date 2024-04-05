import React from "react";
import UserClass from "./UserClass";
class About extends React.Component {
  constructor() {
    super();
    console.log("parent constrctor");
  }
  componentDidMount() {
    console.log("parent did mount");
  }
  componentWillUnmount() {
    console.log("parent componentWillUnmount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About React Class Component</h1>
        <UserClass />
      </div>
    );
  }
}
export default About;
