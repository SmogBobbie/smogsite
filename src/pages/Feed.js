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
            <img src={`https:${item.fields.image.fields.file.url}`} />
          </div>
        ))}
      </div>
    );
  }
}

export default Feed;
