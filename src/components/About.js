import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
class About extends React.Component {
  constructor() {
    super();
    //console.log("parent constrctor");
  }
  componentDidMount() {
    //console.log("parent did mount");
  }
  componentWillUnmount() {
    //console.log("parent componentWillUnmount");
  }
  render() {
    //console.log("parent render");
    return (
      <div>
        <h1>About React Class Component</h1>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass />
      </div>
    );
  }
}
export default About;
