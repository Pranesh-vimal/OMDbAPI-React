import React, { Component } from "react";
import axios from "axios";
import Content from "./Content";

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
      year: "",
      data: [],
      error: "",
      API_KEY: "edd9fad4",
      content: false,
      input: true
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  onSubmit = async () => {
    if (this.state.movie !== "" && this.state.year !== "") {
      axios
        .get(
          `https://www.omdbapi.com/?apikey=${this.state.API_KEY}&t=${this.state.movie}&y=${this.state.year}`
        )
        .then(async res => {
          this.setState({
            data: res.data,
            content: true,
            input: false,
            error: ""
          });
        })
        .catch(err => {
          if (err) throw err;
        });
    } else {
      this.setState({
        error: "Fill All Fields *"
      });
    }
  };

  render() {
    return (
      <div className="p-2">
        {this.state.input && (
          <div className="grid grid-cols-1 md:grid-cols-3 p-2 md:mt-10 mt-3">
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
                  value={this.state.movie}
                  onChange={this.onChange}
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
                  value={this.state.year}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <button
                  onClick={this.onSubmit}
                  className="mt-2 rounded-md w-full bg-red-400 p-2 text-white font-extrabold hover:bg-red-500 focus:outline-none"
                >
                  Submit
                </button>
                {this.state.error && (
                  <h1
                    id="bg1"
                    className="p-2 text-center text-white mt-2 rounded-md font-extrabold"
                  >
                    {this.state.error}
                  </h1>
                )}
              </div>
            </div>
            <div className=""></div>
          </div>
        )}
        {this.state.content && <Content data={this.state.data} />}
      </div>
    );
  }
}
