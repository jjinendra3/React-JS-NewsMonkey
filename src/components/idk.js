import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Loader from "./Loader";
import PropTypes from "prop-types";
const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalPage, settotalPage] = useState(0);

  const UpdateNews = async (whycall) => {
    props.progress(10);
    let url;
    if (whycall === "first") {
      url = `
      https://newsapi.org/v2/top-headlines?&country=${props.country}&apiKey=${props.api}&category=${props.category}&page=${page}&pageSize=${props.page_size}&sortBy=popularity`;
    }
    if (whycall === "next") {
      url = `
      https://newsapi.org/v2/top-headlines?&country=${props.country}&apiKey=${
        props.api
      }&category=${props.category}&page=${page + 1}&pageSize=${
        props.page_size
      }&sortBy=popularity`;
      setpage(page + 1);
      console.log(page);
    }
    if (whycall === "prev") {
      url = `
      https://newsapi.org/v2/top-headlines?&country=${props.country}&apiKey=${
        props.api
      }&category=${props.category}&page=${page - 1}&pageSize=${
        props.page_size
      }&sortBy=popularity`;
      setpage(page - 1);
    }
    setloading(true);
    let datas = await fetch(url);
    datas = await datas.json();
    props.progress(50);
    setarticles(datas.articles);
    settotalPage(datas.totalResults);
    setloading(false);
    props.progress(100);
  };
  const prev = () => {
    UpdateNews("prev");
    // props.progress(10);
    // let url = `https://newsapi.org/v2/top-headlines?&country=${
    //   props.country
    // }&apiKey=${props.api}&page=${page - 1}&pageSize=${
    //   props.page_size
    // }&sortBy=popularity`;
    // setloading(true);
    // let datas = await fetch(url);
    // datas = await datas.json();
    // props.progress(50);
    // setpage(page-1);
    // setarticles(datas.articles);
    // settotalPage(datas.totalResults);
    // setloading(false);
    // props.progress(100);
  };
  const next = () => {
    UpdateNews("next");
    // props.progress(10);
    // let url = `https://newsapi.org/v2/top-headlines?&country=${
    //   props.country
    // }&apiKey=${props.api}&page=${page + 1}&pageSize=${
    //   props.page_size
    // }&sortBy=popularity`;
    // setloading(true);
    // let datas = await fetch(url);
    // datas = await datas.json();
    // props.progress(50);
    // setpage(page+1);
    // setarticles(datas.articles);
    // settotalPage(datas.totalResults);
    // setloading(false);
    // props.progress(100);
  };
  useEffect(() => {
    UpdateNews("first");
  }, []);

  return (
    <>
      <div className="container my-3">
        <h1 className="text-center my-3">Top Headlines</h1>
        {loading && <Loader />}
        <div className="container my-3">
          <div className="row">
            {!loading &&
              articles.map((elements) => {
                return (
                  //the div class that is just after muts have the unique key
                  <div className="col-md-4" key={elements.url}>
                    <Newsitem
                      title={elements.title}
                      description={elements.description}
                      imgurl={elements.urlToImage}
                      newsurl={elements.url}
                      publish_date={elements.publishedAt}
                      author={elements.author}
                    />
                  </div>
                );
              })}
          </div>
          <div className="d-flex justify-content-between my-5">
            <button
              type="button"
              disabled={page <= 1}
              className="btn btn-primary"
              onClick={prev}
            >
              Previous
            </button>
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginRight: "10%" }}
              disabled={page + 1 > Math.ceil(totalPage / props.page_size)}
              onClick={next}
            >
              Next
            </button>
          </div>
        </div>
      </div>
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
