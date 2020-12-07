import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './Sidenav.scss';

class Sidenav extends Component {
  render() {
    console.log(this.props)
    return (
      <React.Fragment>
          <nav className="menu">
              <ul className="menu-list">
                {this.props.links.map((link, index) => (
                  <li key={index}>
                    <NavLink to={`/${link.root}`} activeClassName="active">
                        <i className={`${link.class} list-icon`} aria-hidden="true"></i>
                        <span>{link.title}</span>
                    </NavLink>
                  </li>
                ))}
              </ul> 
          </nav>          
      </React.Fragment>
    )
  }
}

export default Sidenav;
