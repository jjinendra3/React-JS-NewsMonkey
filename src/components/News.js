import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Loader from "./Loader";
import PropTypes from "prop-types";
import Weather from "./Weather";
import github from "./download.png";
import linkedin from "./linkedin.png";
const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalRes, settotalRes] = useState(0);
  const UpdateNews = async (whycall) => {
    props.progress(10);
    let url;
    if (whycall === "first") {
      url = `https://newsapi.org/v2/top-headlines?&&country=${props.country}&apiKey=a57bbd16932d430ebd6c706ec2ded623&category=${props.category}&page=${page}&pageSize=${props.page_size}&sortBy=popularity`;
    }
    //ApiKey is given here for your testing, alhtough it is recommended that you use your own ApiKey
    if (whycall === "next") {
      url = `
      https://newsapi.org/v2/top-headlines?&country=${
        props.country
      }&apiKey=a57bbd16932d430ebd6c706ec2ded623&category=${
        props.category
      }&page=${page + 1}&pageSize=${props.page_size}&sortBy=popularity`;
      setpage(page + 1);
    }
    if (whycall === "prev") {
      url = `
      https://newsapi.org/v2/top-headlines?&country=${
        props.country
      }&apiKey=a57bbd16932d430ebd6c706ec2ded623&category=${
        props.category
      }&page=${page - 1}&pageSize=${props.page_size}&sortBy=popularity`;
      setpage(page - 1);
    }
    setloading(true);
    let datas = await fetch(url);
    datas = await datas.json();
    props.progress(50);
    setarticles(datas.articles);
    settotalRes(datas.totalResults);
    setloading(false);
    props.progress(100);
  };
  const prev = () => {
    UpdateNews("prev");
  };
  const next = () => {
    UpdateNews("next");
  };
  useEffect(() => {
    UpdateNews("first");
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container my-3" style={{ justifyContent: "center" }}>
        <div className="d-flex justify-content-between ">
          <div className="container">
            {" "}
            <br />{" "}
            <h1
              className="text "
              style={
                props.color === "light"
                  ? { marginLeft: "5%" }
                  : { marginLeft: "5%", color: "white" }
              }
            >
              Top Headlines
            </h1>
          </div>
          <Weather color={props.color} />
        </div>
        {loading && <Loader />}
        <div className="container my-3">
          <div className="row">
            {!loading &&
              articles.map((elements) => {
                return (
                  //the div class that is just after muts have the unique key
                  <div className="col-md-4" key={elements.url}>
                    <div className="d-flex justify-content-center">
                      <Newsitem
                        color={props.color}
                        title={elements.title}
                        description={elements.description}
                        imgurl={elements.urlToImage}
                        newsurl={elements.url}
                        publish_date={elements.publishedAt}
                        author={elements.author}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="d-flex justify-content-between my-4">
            <button
              type="button"
              disabled={page <= 1}
              className="btn btn-primary"
              onClick={prev}
              style={
                props.color === "light"
                  ? {}
                  : {
                      backgroundColor: "black",
                      borderColor: "blue",
                      color: "white",
                    }
              }
            >
              Previous
            </button>
            <button
              type="button"
              className="btn btn-primary"
              disabled={page + 1 > Math.ceil(totalRes / props.page_size)}
              onClick={next}
              style={
                props.color === "light"
                  ? {}
                  : {
                      backgroundColor: "black",
                      borderColor: "blue",
                      color: "white",
                    }
              }
            >
              Next
            </button>
          </div>
        </div>
      </div>
      {!loading && (
        <div
          className="end"
          style={
            props.color === "light"
              ? {
                  textAlign: "center",
                  height: "100px",
                  backgroundColor: "#F8F1F1",
                  width: "100%",
                  marginLeft: "0",
                  marginRight: "0",
                }
              : {
                  textAlign: "center",
                  height: "100px",
                  backgroundColor: "#213555",
                  width: "100%",
                  marginLeft: "0",
                  marginRight: "0",
                  color: "white",
                }
          }
        >
          <p style={{ marginBottom: "0", paddingTop: "3%" }}>
            {" "}
            Made with ❤️ by Jinendra Jain{" "}
          </p>
          <a
            className="mx-1"
            href="https://github.com/jjinendra3"
            target="_blank"
          >
            <img
              src={github}
              alt=""
              style={{ height: "22px", width: "22px", borderRadius: "100%" }}
            />
          </a>
          <a
            className="mx-1"
            href="https://www.linkedin.com/in/jjinendra3/"
            target="_blank"
          >
            <img
              src={linkedin}
              alt=""
              style={{ height: "30px", width: "30px" }}
            />
          </a>
        </div>
      )}
    </>
  );
};
News.defaultProps = {
  country: "in",
  page_size: 12,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  page_size: PropTypes.number,
  category: PropTypes.string,
};
export default News;
