import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Logo from "./Logo";
import "./Nav.scss";

const LOGO_COLORS = {
  GREEN: "#697841",
  PURPLE: "#6c00ff",
  GOLD: "#ffb600",
  RED: "#ca2b0a",
};

class Nav extends Component {
  render() {
    let pages = [
      { name: "Work", url: "/work" },
      { name: "Feed", url: "/feed" },
      { name: "Info", url: "/info" },
    ];

    let path = this.props.location.pathname;

    let logoColor = LOGO_COLORS.GOLD;

    if (path.includes("/work")) {
      logoColor = LOGO_COLORS.PURPLE;
    } else if (path.includes("/info")) {
      logoColor = LOGO_COLORS.GREEN;
    }

    return (
      <nav className={`Nav ${path === "/" && "Nav--Home"}`}>
        <Logo logoClass="Nav__Logo" fill={logoColor} />
        <ul className="Nav__Links">
          {pages.map((page) => (
            <li key={page.name} className="Nav__Links__Link">
              <Link
                className={path.includes(page.url) && "active"}
                to={page.url}
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default withRouter(Nav);
