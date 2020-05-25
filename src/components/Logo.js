import React, { Component } from "react";
import { ReactComponent as LogoImage } from "../images/logo.svg";
import "./Logo.scss";

class Logo extends Component {
  render() {
    let { logoClass } = this.props;
    let fill = this.props.fill || "#fff";

    return (
      <span className="Logo">
        <LogoImage style={{ fill: fill }} className={logoClass} />
      </span>
    );
  }
}

export default Logo;
