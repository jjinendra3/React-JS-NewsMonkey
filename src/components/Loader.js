import React from "react";
import loading from "./loading.gif";

const Loader = (props) => {
  return (
    <div className="text-center">
      <img
        src={loading}
        alt="loading"
        style={{ height: "15%", width: "15%" }}
      />
      <p
        style={
          props.colorer === "light"
            ? { fontWeight: "500" }
            : { fontWeight: "500", color: "white" }
        }
      >
        Monkey Fetching News...
      </p>
    </div>
  );
};
export default Loader;
