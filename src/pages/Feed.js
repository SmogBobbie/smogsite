import React, { Component } from "react";
import client from "../client";
import "./Feed.scss";

let items;

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: items || [],
    };
  }

  componentDidMount() {
    client
      .getEntries({
        content_type: "feedImage",
      })
      .then((res) => {
        this.setState({
          items: res.items,
        });
        items = res.items;
      });
  }

  render() {
    return (
      <div className="Feed">
        {this.state.items.map((item) => (
          <div key={item.sys.id} className="Feed__Image">
            {item.fields.image.fields.file.contentType === "video/mp4" ? (
              <video controls>
                <source
                  src={item.fields.image.fields.file.url}
                  type="video/mp4"
                />
              </video>
            ) : (
              <img loading="lazy" src={`https:${item.fields.image.fields.file.url}`} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default Feed;
