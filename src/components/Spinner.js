import React, { Component } from "react";
import spinner from "./spinner.gif";

class Spinner extends Component {
  render() {
    return (
      <>
        <img
          src={spinner}
          alt="loading..."
          style={{
            width: "200px",
            margin: "auto",
            display: "block",
            marginTop: "200px",
          }}
        />
      </>
    );
  }
}

export default Spinner;
