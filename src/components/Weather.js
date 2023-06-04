import axios from "axios";
import React, { useState, useEffect } from "react";

const Weather = () => {
  const WeatherApi = process.env.REACT_APP_WEATHER_APP;
  const [temp, settemp] = useState(0);
  const [location, setlocation] = useState("Mumbai");

  const [img, setimg] = useState(
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Derror&psig=AOvVaw2CmbXL32ahaVghebA0fsuJ&ust=1685977084010000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCND4_Jrwqf8CFQAAAAAdAAAAABAZ"
  );
  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${REACT_APP_WEATHER_APP}&query=${location}`
      )
      .then((response) => {
        //use your api key here
        settemp(response.data.current.temperature);
        setimg(response.data.current.weather_icons);
      });
  }, []);

  return (
    <div
      className="container"
      style={{ textAlign: "right", marginRight: "5%" }}
    >
      <button
        className="btn btn-outline-primary "
        style={{ height: "90%" }}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
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
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Select Your City
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
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
                    }}
                  >
                    Mumbai
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary my-1"
                    onClick={() => {
                      setlocation("Delhi");
                    }}
                  >
                    Delhi
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary my-1"
                    onClick={() => {
                      setlocation("Chennai");
                    }}
                  >
                    Chennai
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary my-1"
                    onClick={() => {
                      setlocation("Kolkata");
                    }}
                  >
                    Kolkata
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary my-1"
                    onClick={() => {
                      setlocation("Hyderabad");
                    }}
                  >
                    Hyderabad
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary my-1"
                    onClick={() => {
                      setlocation("Bangalore");
                    }}
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
