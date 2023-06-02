import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Loader from "./Loader";
import PropTypes from "prop-types";
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalPage: 0,
    };
  }
  static defaultProps = {
    country: "in",
    page_size: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    page_size: PropTypes.number,
    category: PropTypes.string,
  };
  async componentDidMount() {
    this.props.progress(10);
    let url = `
      https://newsapi.org/v2/top-headlines?&country=${this.props.country}&apiKey=${this.props.api}&category=${this.props.category}&page=1&pageSize=${this.props.page_size}&sortBy=popularity`;
    this.setState({ loading: true });
    let datas = await fetch(url);
    datas = await datas.json();
    this.props.progress(50);
    this.setState({
      articles: datas.articles,
      totalPage: datas.totalResults,
      loading: false,
    });

    this.props.progress(100);
  }
  prev = async () => {
    this.props.progress(10);
    let url = `https://newsapi.org/v2/top-headlines?&country=${
      this.props.country
    }&apiKey=${this.props.api}&page=${this.state.page - 1}&pageSize=${
      this.props.page_size
    }&sortBy=popularity`;
    this.setState({ loading: true });
    let datas = await fetch(url);
    datas = await datas.json();
    this.props.progress(50);
    this.setState({
      page: this.state.page - 1,
      articles: datas.articles,
      loading: false,
    });

    this.props.progress(100);
  };
  next = async () => {
    this.props.progress(10);
    let url = `https://newsapi.org/v2/top-headlines?&country=${
      this.props.country
    }&apiKey=${this.props.api}&page=${this.state.page + 1}&pageSize=${
      this.props.page_size
    }&sortBy=popularity`;
    this.setState({ loading: true });
    let datas = await fetch(url);
    datas = await datas.json();
    this.props.progress(50);
    this.setState({
      page: this.state.page + 1,
      articles: datas.articles,
      loading: false,
    });
    this.props.progress(100);
  };
  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center my-3">Top Headlines</h1>
          {this.state.loading && <Loader />}
          <div className="container my-3">
            <div className="row">
              {!this.state.loading &&
                this.state.articles.map((elements) => {
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
                disabled={this.state.page <= 1}
                className="btn btn-primary"
                onClick={this.prev}
              >
                Previous
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginRight: "10%" }}
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalPage / this.props.page_size)
                }
                onClick={this.next}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
