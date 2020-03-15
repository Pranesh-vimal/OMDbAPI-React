import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { movie, year, error } = this.props;
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 p-2 md:mt-10 mt-5">
          <div className=""></div>
          <div className="p-2">
            <div
              id="bg1"
              className="w-full p-2 rounded-md text-center text-white font-hairline"
            >
              Search Your Movie
            </div>
            <div className="flex">
              <label
                id="bg2"
                className="p-2 mt-2 flex-auto text-center rounded-md mr-1 text-white font-extrabold"
              >
                Movie Title :{" "}
              </label>
              <input
                className="p-2 mt-2 flex-auto rounded-md border focus:outline-none ml-1"
                placeholder="Enter Movie Name"
                type="text"
                name="movie"
                value={movie}
                onChange={this.props.onChange}
                autoComplete="off"
              />
            </div>
            <div className="flex">
              <label
                id="bg2"
                className="p-2 mt-2 flex-auto text-center rounded-md mr-1 text-white font-extrabold"
              >
                Movie Year :{" "}
              </label>
              <input
                className="p-2 mt-2 flex-auto rounded-md border focus:outline-none ml-1"
                placeholder="Enter Movie Year"
                type="text"
                name="year"
                value={year}
                onChange={this.props.onChange}
                autoComplete="off"
              />
            </div>
            <div>
              <button
                onClick={this.props.onSubmit}
                className="mt-2 rounded-md w-full bg-red-400 p-2 text-white font-extrabold hover:bg-red-500 focus:outline-none"
              >
                Search
              </button>
              {error && (
                <h1
                  id="bg1"
                  className="p-2 text-center text-white mt-2 rounded-md font-extrabold"
                >
                  {error}
                </h1>
              )}
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    );
  }
}
