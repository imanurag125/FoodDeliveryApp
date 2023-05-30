import axios from "axios";
import React from "react";
// import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Componenet Did Mount");
  }

  render() {
    // console.log("Parent Render");

    return (
      <>
        <h1>About</h1>
        <ProfileClass name="First Child " />
        {/* <ProfileClass name="Second Child Class" /> */}
      </>
    );
  }
}
export default About;
