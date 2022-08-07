import React, { Component } from "react";
import { Link } from "react-router-dom";
import logoSrc from "../images/smog-logo-cropped.png";
import "./Logo.scss";

class Logo extends Component {
  render() {
    let { logoClass } = this.props;
    let fill = this.props.fill || "#fff";

    return (
        <Link to="/">
          <div class="Logo" style={{backgroundImage: `url(${logoSrc})`}} />
        </Link>
    );
  }
}

export default Logo;
