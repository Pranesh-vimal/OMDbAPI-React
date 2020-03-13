import React, { Component } from "react";
import Header from "./components/Header";
import Display from "./components/Display";
import AOS from "aos";
import "aos/dist/aos.css";

export default class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000
    });
  }
  render() {
    return (
      <div>
        <Header />
        <div data-aos="fade-up">
          <Display />
        </div>
      </div>
    );
  }
}
