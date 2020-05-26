import React, { Component } from "react";
import "./Project.scss";

class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { fields } = this.props.project;
    let urlParts = fields.vimeoUrl.split("/");
    let vimeoId = urlParts[urlParts.length - 1];
    console.log(fields);
    return (
      <div className="Project">
        <h1 className="Project__Title">{fields.title}</h1>
        <div class="Project__Video">
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0`}
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
        <div class="Project__Credits">
          <div class="Project__Credits__Column Project__Credits__Label">
            <span>Credits</span>
          </div>
          <div class="Project__Credits__Column Project__Credits__List">
            <ul>
              {fields.credits.map((credit) => {
                return (
                  <li key={credit.sys.id}>
                    {credit.fields.roll} - {credit.fields.firstName}{" "}
                    {credit.fields.lastName}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
