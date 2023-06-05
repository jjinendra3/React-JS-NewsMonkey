import axios from "axios";
import React, { useState, useEffect } from "react";

const Weather = (props) => {
  const [temp, settemp] = useState(0);
  const [location, setlocation] = useState("Mumbai");
  const [img, setimg] = useState("");
  useEffect(() => {
    updatelocation();
    //eslint-disable-next-line
  }, []);
  const updatelocation = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=423ae496f5ad8720dfc5baa6a72527c7`
      )
      //ApiKey is given here for your testing, alhtough it is recommended that you use your own ApiKey
      .then((response) => {
        settemp(Math.floor(response.data.main.temp - 276.15));

        setimg(
          `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`
        );
      });
  };
  return (
    <div
      className="container"
      style={{ textAlign: "right", marginRight: "5%" }}
    >
      <button
        className="btn btn-outline-primary "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={
          props.coloro !== "light"
            ? { height: "90%" }
            : {
                height: "90%",
                borderColor: "#171717",
                color: "white",
                backgroundColor: "#171717",
              }
        }
      >
        <div className="d-flex justify-content-between">
          <div className="container">
            <img
              src={img}
              alt=""
              style={{
                width: "80%",
                height: "80%",
                borderRadius: "100%",
                marginTop: "8%",
              }}
            />
          </div>
          <div className="container mx-4 " style={{ marginTop: "10px" }}>
            <p className="fw-light" style={{ display: "inline" }}>
              {" "}
              {location}
            </p>

            <p className="fw-bold text-body-dark" style={{ fontSize: "20px" }}>
              {" "}
              {temp}°C
            </p>
          </div>
        </div>
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div
              className="modal-header"
              style={
                props.color === "light"
                  ? {}
                  : {
                      backgroundColor: "black",
                      color: "white",
                      textAlign: "center",
                    }
              }
            >
              <h1
                className="modal-title fs-5 text-justify"
                id="exampleModalLabel"
              >
                Select Your City
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                data-bs-theme="dark"
              ></button>
            </div>
            <div
              className="modal-body"
              style={
                props.color === "light"
                  ? {}
                  : { backgroundColor: "black", color: "white" }
              }
            >
              <div className="list-group">
                <div
                  className="btn-group-vertical"
                  role="group"
                  aria-label="Vertical button group"
                >
                  <button
                    type="button"
                    className="btn btn-primary my-1"
                    onClick={() => {
                      setlocation("Mumbai");
                      updatelocation();
                    }}
                    style={
                      props.color === "light"
                        ? {}
                        : {
                            borderColor: "blue",
                            backgroundColor: "black",
                            color: "white",
                          }
                    }
                  >
                    Mumbai
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary my-1"
                    onClick={() => {
                      setlocation("Delhi");
                      updatelocation();
                    }}
                    style={
                      props.color === "light"
                        ? {}
                        : {
                            borderColor: "blue",
                            backgroundColor: "black",
                            color: "white",
                          }
                    }
                  >
                    Delhi
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary my-1"
                    onClick={() => {
                      setlocation("Chennai");
                      updatelocation();
                    }}
                    style={
                      props.color === "light"
                        ? {}
                        : {
                            borderColor: "blue",
                            backgroundColor: "black",
                            color: "white",
                          }
                    }
                  >
                    Chennai
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary my-1"
                    onClick={() => {
                      setlocation("Kolkata");
                      updatelocation();
                    }}
                    style={
                      props.color === "light"
                        ? {}
                        : {
                            borderColor: "blue",
                            backgroundColor: "black",
                            color: "white",
                          }
                    }
                  >
                    Kolkata
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary my-1"
                    onClick={() => {
                      setlocation("Hyderabad");
                      updatelocation();
                    }}
                    style={
                      props.color === "light"
                        ? {}
                        : {
                            borderColor: "blue",
                            backgroundColor: "black",
                            color: "white",
                          }
                    }
                  >
                    Hyderabad
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary my-1"
                    onClick={() => {
                      setlocation("Bangalore");
                      updatelocation();
                    }}
                    style={
                      props.color === "light"
                        ? {}
                        : {
                            borderColor: "blue",
                            backgroundColor: "black",
                            color: "white",
                          }
                    }
                  >
                    Bangalore
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
