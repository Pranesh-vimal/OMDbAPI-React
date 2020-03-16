import React, { Component } from "react";
import axios from "axios";
import Content from "./Content";
import History from "./History";
import Input from "./Input";
import loading from "./loading.gif";

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
      year: "",
      data: [],
      error: "",
      content: false,
      input: true,
      history: [],
      historyValue: false,
      loading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  componentDidMount() {
    if (localStorage.getItem("history")) {
      this.setState({
        history: JSON.parse(localStorage.getItem("history")),
        historyValue: true
      });
    }
  }
  onSubmit = async () => {
    if (this.state.movie !== "" && this.state.year !== "") {
      this.setState({
        loading: true
      });
      axios
        .get(
          `https://www.omdbapi.com/?apikey=edd9fad4&t=${this.state.movie}&y=${this.state.year}`
        )
        .then(async res => {
          this.setState({
            data: res.data,
            content: true,
            input: false,
            error: "",
            loading: false
          });
          var historyOfAll;
          var history;
          if (this.state.data.Response === "True") {
            if (localStorage.getItem("history")) {
              historyOfAll = JSON.parse(localStorage.getItem("history"));
              history = {
                movie: this.state.data.Title,
                year: this.state.data.Year,
                id: Date.now(),
                url: this.state.data.Poster
              };
              historyOfAll.push(history);
              localStorage.setItem("history", JSON.stringify(historyOfAll));
            } else {
              historyOfAll = [];
              history = {
                movie: this.state.data.Title,
                year: this.state.data.Year,
                id: Date.now(),
                url: this.state.data.Poster
              };
              historyOfAll.push(history);
              localStorage.setItem("history", JSON.stringify(historyOfAll));
            }
          }
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
      <div className="p-2 mt-5">
        {this.state.input && (
          <Input
            movie={this.state.movie}
            onChange={this.onChange}
            year={this.state.year}
            onSubmit={this.onSubmit}
            error={this.state.error}
          />
        )}
        {this.state.loading && (
          <div className="flex justify-center">
            <img src={loading} className="p-2 h-20 w-20" alt="loading" />
          </div>
        )}
        {this.state.input && (
          <History
            data={this.state.historyValue}
            history={this.state.history}
          />
        )}
        {this.state.content && <Content data={this.state.data} />}
      </div>
    );
  }
}
