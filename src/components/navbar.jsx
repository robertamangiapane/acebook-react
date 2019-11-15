import React, { Component } from "react";
import ReactDOM from "react-dom";
import Logout from "./logout";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  sessionButton() {
    if (this.props.authToken) {
      return <Logout updateAuthState={this.props.updateAuthState} label="Log Out Hun?" />;
    } else {
      return (
        <Link id="navbar-login-button" to="/log_in">
          <a className="homepage-link" href="javascript:void(0)">
            Login
          </a>
        </Link>
      );
    }
  }
  render() {
    console.log('here')
    return (
      <header>
        <nav className="navbar-container">
          <Link to="/">
            <a className="homepage-link" href="javascript:void(0)">
              Winkleface
            </a>
          </Link>
          <ul className="logout-button">{this.sessionButton()}</ul>

          <ul>
            <Link to="/posts">
              <a className="homepage-link" href="javascript:void(0)">
                Home
              </a>
            </Link>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
