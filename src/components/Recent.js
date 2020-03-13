import React, { Component } from "react";

export default class Recent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="p-2 mt-2 bg-yellow-300 rounded-md">
        <label className="p-2 m-1 font-hairline">
          <span className="font-extrabold">Title : </span>
          {this.props.item.movie}
        </label>
        <br />
        <label className="p-2 m-1 font-hairline">
          <span className="font-extrabold">Year : </span>
          {this.props.item.year}
        </label>
      </div>
    );
  }
}
