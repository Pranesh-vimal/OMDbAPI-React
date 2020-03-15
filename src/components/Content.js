import React, { Component } from "react";

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.data.Response === "True" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 p-2 md:mt-10 mt-3">
            <div className="flex justify-center p-2">
              <img
                data-aos="fade-right"
                className="rounded-md "
                src={this.props.data.Poster}
                alt={this.props.data.Title}
              />
            </div>
            <div className="text-white p-2" data-aos="zoom-in">
              <div id="bg1" className=" p-2 text-center rounded-md">
                Movie Details
              </div>
              <div id="bg2" className="p-2 rounded-md my-2 flex">
                <label className="p-3 rounded-md text-white">
                  <span className="text-white">Title : </span>
                  {this.props.data.Title}
                </label>
              </div>
              <div id="bg2" className="p-2 rounded-md my-2 flex">
                <label className="p-3 rounded-md text-white">
                  <span className="text-white">Year : </span>
                  {this.props.data.Year}
                </label>
              </div>
              <div id="bg2" className="p-2 rounded-md my-2 flex">
                <label className="p-3 rounded-md text-white capitalize">
                  <span className="text-white">Type : </span>
                  {this.props.data.Type}
                </label>
              </div>

              <div className="flex">
                <a
                  href="/"
                  className="text-center flex-1 text-white bg-red-500 p-2 rounded-md w-full hover:bg-red-600"
                >
                  Back
                </a>
              </div>
            </div>
            <div></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 p-2 md:mt-10 mt-3">
            <div></div>
            <div className="text-white text-center p-2 " data-aos="zoom-in">
              <div className="p-2 rounded-md" id="bg1">
                No Data Found. Enter Correct Movie Title And Year!
              </div>
              <div className="flex">
                <a
                  href="/"
                  className="text-center flex-1 text-white bg-red-500 mt-2 p-2 rounded-md w-full hover:bg-red-600"
                >
                  Go Back
                </a>
              </div>
            </div>
            <div></div>
          </div>
        )}
      </div>
    );
  }
}
