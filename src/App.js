import React, { Component } from "react";
import Header from "./components/Header";
import Display from "./components/Display";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";

export default class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }
  render() {
    return (
      <div className="h-screen flex flex-col justify-between">
        <Header />
        <div data-aos="fade-up">
          <Display className="mb-auto" />
        </div>
        <Footer />
      </div>
    );
  }
}
