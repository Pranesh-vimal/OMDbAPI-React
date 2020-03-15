import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div
        id="bg"
        className="sticky bottom-0 p-2 text-center text-white font-extrabold w-full"
      >
        <div>
          Developed By{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Pranesh-vimal">
            Pranesh
          </a>
        </div>
      </div>
    );
  }
}
