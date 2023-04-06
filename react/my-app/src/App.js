import React from "react";
import Header from "./components/header.js";
import Navigation from "./components/navigation.js";
import Container from "./components/container";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header title="React Application" />
        <Navigation />
        <Container />
      </div>
    );
  }

  clickResult = () => {
    console.log("Click");
  };
}

export default App;
