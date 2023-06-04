import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Newsbox from "./components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  const [progress, setprogress] = useState(0);
  const progreass = (progrees) => {
    setprogress(progrees);
  };
  const apiKey = process.env.REACT_APP_NEWS_APP;
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Newsbox
                api={apiKey}
                progress={progreass}
                key="general"
                page_size={12}
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
                api={apiKey}
                progress={progreass}
                key="business"
                page_size={12}
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
                api={apiKey}
                progress={progreass}
                key="entertainment"
                page_size={12}
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
                api={apiKey}
                progress={progreass}
                key="health"
                page_size={12}
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
                api={apiKey}
                progress={progreass}
                key="science"
                page_size={12}
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
                api={apiKey}
                progress={progreass}
                key="sports"
                page_size={12}
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
                api={apiKey}
                progress={progreass}
                key="technology"
                page_size={12}
                country="in"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
