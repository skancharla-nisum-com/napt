import React, { Component } from "react";
import "./Header.scss";
import nisumLogo from "../assets/nisumlogo.png";

class Header extends Component {
  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    console.log("logged out");
  };

  render() {
    return (
      <div className="top-header m-0 d-flex">
        <div className="logo-section">
          <a href="/">
            <img className="img" src={nisumLogo} alt="logo" />
          </a>
        </div>
        <div className="text-center top-head">
          <h2 className="h-line-height h-color m-0 bold">
            Nisum Automation Platform (NAPT)
          </h2>
        </div>
        <div className="text-right pl-0 dropdown logout-toggle">
          <span className="logout h-line-height" data-toggle="dropdown">
            <i
              className="fa fa-user-circle-o fa-2x mt-3"
              aria-hidden="true"
            ></i>
          </span>
          <div className="dropdown-menu dropdown-menu-right mt-3 logout-menu">
            <span className="dropdown-item">
              <i className="fa fa-user mr-2" aria-hidden="true"></i>Username
            </span>
            <span className="dropdown-item" onClick={this.logout}>
              <i className="fa fa-sign-out mr-2" area-hidden="true"></i>logout
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
