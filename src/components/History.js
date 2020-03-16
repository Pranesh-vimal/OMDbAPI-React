import React, { Component } from "react";
import Recent from "./Recent";

export default class History extends Component {
  render() {
    return (
      <div className={this.props.data ? "block" : "hidden"}>
        <div className="grid grid-cols-1 md:grid-cols-3 p-2 md:mt-10 mt-3">
          <div></div>
          <div className="p-2 ">
            <div
              id="bg1"
              className="w-full p-2 rounded-md text-center text-white font-hairline"
            >
              Recent Searches{" "}
              <i className="fas fa-info-circle justify-end tooltip">
                <span id="bg" className="tooltip-text mt-1 ml-2 p-3 rounded">
                  Only Successfull <br /> Searches Will Be Displayed
                </span>
              </i>
            </div>
            {this.props.history.map(item => {
              return <Recent key={item.id} item={item} />;
            })}
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}
