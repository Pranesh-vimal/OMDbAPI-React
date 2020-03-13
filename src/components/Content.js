import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    AOS.init({
      duration: 3000
    });
  }
  render() {
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 p-2 md:mt-10 mt-3">
          <div className="flex justify-center  p-2">
            <img
              data-aos="fade-right"
              className="rounded-md object-cover "
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
              <label className="p-3 rounded-md text-white">
                <span className="text-white">Type : </span>
                {this.props.data.Type}
              </label>
            </div>

            <div className="flex">
              <a
                data-aos="flip-left"
                href="/"
                className="text-center flex-1 text-white bg-red-500 p-2 rounded-md w-full hover:bg-red-600 md:block hidden"
              >
                Back
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}
