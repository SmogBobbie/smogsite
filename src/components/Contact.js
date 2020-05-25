import React, { Component } from "react";
import client from "../client";
import "./Contact.scss";

let fields;

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: fields || [],
    };
  }

  componentDidMount() {
    if (fields !== undefined) return;

    console.log("fetching");

    client
      .getEntries({
        content_type: "contact",
      })
      .then((entries) => {
        this.setState({
          fields: entries.items,
        });

        fields = entries.items;
      });
  }

  render() {
    let { fields } = this.state;
    console.log(fields);
    return (
      <div className="Contact">
        <div className="Contact__Column Contact__Label">
          <span>Contact</span>
        </div>
        <address className="Contact__Column Contact__Info">
          <ul>
            {fields.map((item) => {
              return (
                <li key={item.fields.type}>
                  <a href={item.fields.url}>{item.fields.display}</a>
                </li>
              );
            })}
          </ul>
        </address>
      </div>
    );
  }
}

export default Contact;
