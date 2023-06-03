import React from "react";
import logo from "C:/Users/asus/Desktop/CWH/newsapp/src/bufferer.png";

const Newsitem = (props) => {
  let { title, description, imgurl, newsurl, publish_date, author } = props;
  return (
    <div>
      <div className="card my-3" style={{ width: "18rem", height: "32rem" }}>
        <img
          src={imgurl === null ? logo : imgurl}
          className="card-img-top"
          alt="..."
          style={{ width: "18rem", height: "15rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">
            {title.length > 45 ? title.slice(0, 45) + "..." : title}
          </h5>
          <div className="d-flex justify-content-between">
            <p
              className="date text-muted"
              style={{
                fontSize: "10px",
                fontWeight: "500",
                display: "inline",
              }}
            >
              {publish_date !== null
                ? "Published on: " + publish_date.slice(0, 10)
                : ""}
            </p>
            <p
              className="card-text text-muted"
              style={{ fontSize: "10px", display: "inline" }}
            >
              {author === null ? "Author: Anonymous" : author}
            </p>
          </div>

          <p className="card-text">
            {description !== null
              ? description.slice(0, 208) + "..."
              : "Press Read More to read more about the article."}
          </p>

          <a
            href={newsurl}
            target="_blank  "
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
//}
export default Newsitem;
