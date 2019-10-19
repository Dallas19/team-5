/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "logo.png";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
    this.sidebar = React.createRef();
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    return (
      <div
        className="sidebar"
        data-color={this.props.bgColor}
        data-active-color={this.props.activeColor}
      >
        <div className="logo">
          <a
            href="https://www.unitedwaysatx.org/"
            className="simple-text align-center"
          >
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </a>
          <a
            href="https://www.unitedwaysatx.org/"
            className="simple-text logo-normal"
            style={{textAlign: 'center'}}
          >
            United Way
          </a>
        </div>
        <div className="sidebar-wrapper" ref={this.sidebar}>
          <Nav>
              return (
                <div>
                <li
                  className={
                    this.activeRoute("/dashboard") +
                    ("prop.pro" ? " active-pro" : "")
                  }
                  key={"Internal"}
                >
                  <NavLink
                    to={"/admin/dashboard"}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className="nc-icon nc-bank" />
                    <p>Internal</p>
                  </NavLink>
                </li>
                <li
                className={
                  this.activeRoute("StratExt") +
                  ("prop.pro" ? " active-pro" : "")
                }
                key={"External"}
              >
                <NavLink
                  to={"/admin/StratExt"}
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className={"nc-icon nc-diamond"} />
                  <p>External</p>
                </NavLink>
              </li>
              </div>
              );
            })
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
