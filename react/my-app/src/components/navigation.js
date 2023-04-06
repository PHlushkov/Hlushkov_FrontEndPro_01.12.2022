import React from "react";

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <ul className="list">
          <li>
            <a className="link" href="#">
              Menu
            </a>
          </li>
          <li>
            <a className="link" href="#">
              Data
            </a>
          </li>
          <li>
            <a className="link" href="#">
              FAQ
            </a>
          </li>
          <li>
            <a className="link" href="#">
              React
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
