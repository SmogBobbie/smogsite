import React, { Component } from "react";
import Copyright from "../components/Copyright";
import Contact from "../components/Contact";
import client from "../client";
import "./Info.scss";

let content;

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: content || null,
    };
  }

  componentDidMount() {
    if (content !== undefined) return;

    client.getEntry("79QIeJG8JfPFbjEm79utjt").then((entry) => {
      this.setState({
        content: entry.fields.content.content,
      });

      content = entry.fields.content.content;
    });
  }

  render() {
    let { content } = this.state;
    return (
      <section className="About">
        <div className="About__Text">
          {content &&
            content.map((e, i) => {
              return (
                <p key={i} className="About__Paragraph">
                  {e.content[0].value}
                </p>
              );
            })}
        </div>

        <Contact />
      </section>
    );
  }
}

export default Info;
