import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Newsbox from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default class App extends Component {
  state = {
    progress: 0,
  };
  progress = (progrees) => {
    this.setState({ progress: progrees });
  };
  apiKey = process.env.REACT_APP_NEWS_APP;

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Newsbox
                  api={this.apiKey}
                  progress={this.progress}
                  key="general"
                  page_size={6}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <Newsbox
                  api={this.apiKey}
                  progress={this.progress}
                  key="business"
                  page_size={6}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <Newsbox
                  api={this.apiKey}
                  progress={this.progress}
                  key="entertainment"
                  page_size={6}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <Newsbox
                  api={this.apiKey}
                  progress={this.progress}
                  key="health"
                  page_size={6}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <Newsbox
                  api={this.apiKey}
                  progress={this.progress}
                  key="science"
                  page_size={6}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <Newsbox
                  api={this.apiKey}
                  progress={this.progress}
                  key="sports"
                  page_size={6}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <Newsbox
                  api={this.apiKey}
                  progress={this.progress}
                  key="technology"
                  page_size={6}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
