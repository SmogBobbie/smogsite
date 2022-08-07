import React, { Component } from "react";
import "./Home.scss";
import videoSrc from "../images/SMOG_LOOP_16-9.mp4";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home__Video--Wrap">
          <video
            className="Home__Video"
            autoPlay
            playsInline
            muted
            loop
            defaultMuted
            preload="auto"
            id="myVideo"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}

export default Home;
