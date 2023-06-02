import React, { Component } from "react";
import loading from "./loading.gif";

export default class Loader extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src={loading}
          alt="loading"
          style={{ height: "15%", width: "15%" }}
        />
        <p style={{ fontWeight: "500" }}>Monkey Fetching News...</p>
      </div>
    );
  }
}
