import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoImage } from "../images/logo.svg";
import "./Logo.scss";

class Logo extends Component {
  render() {
    let { logoClass } = this.props;
    let fill = this.props.fill || "#fff";

    return (
      <span className="Logo">
        <Link to="/">
          <LogoImage style={{ fill: fill }} className={logoClass} />
        </Link>
      </span>
    );
  }
}

export default Logo;
