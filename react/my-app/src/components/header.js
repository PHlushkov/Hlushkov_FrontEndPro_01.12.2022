import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <p>{this.props.title}</p>
      </header>
    );
  }
}

export default Header;
