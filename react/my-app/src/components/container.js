import React from "react";
import Image from "./logo";
import logo from "../img/logo.png";

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Image imeg={logo} />
      </div>
    );
  }
}

export default Container;
