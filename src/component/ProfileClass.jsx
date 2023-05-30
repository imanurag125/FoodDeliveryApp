import React from "react";
import axios from "axios";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummyName",
        location: "dummy Location",
      },
      count: 0,
      date: new Date(),
    };
    console.log(this.props.name + " Child Class Constructor");
  }

  componentDidMount() {
    // const data = await axios.get("https://api.github.com/users/imanurag125");

    // console.log(data.data);

    // this.setState({
    //   userInfo: data.data,
    // });
    console.log("Child Componenet Did Mount");
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  componentDidUpdate() {
    console.log("Component did update");
  }
  componentWillUnmount() {
    console.log("Component will unmount");
    clearInterval(this.timerId);
  }

  render() {
    console.log(" Child Class Render");

    const style = {
      color: "#f32170",
    };
    return (
      <>
        {/* <h1 style={style}>{this.props.name} Based Profile Page</h1> */}

        {/* <h1>{this.state?.userInfo?.name} </h1>
        <img src={`${this.state?.userInfo?.avatar_url}`} alt="" /> */}
        <h1 style={style}> {this.state.date.toLocaleTimeString()} </h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase
        </button>
        <h2>{this.state.count} </h2>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrease
        </button>
      </>
    );
  }
}
export default Profile;
