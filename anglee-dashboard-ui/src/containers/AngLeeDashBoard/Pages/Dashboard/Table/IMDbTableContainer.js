import React, { Component } from "react";
import axios from "../../../../../axios/axios-core";
import IMDbTableView from "../../../../../components/Dashboard/Reviews/IMDb/IMDbTableView";
import { Link } from "react-router-dom";
import { Layout, Breadcrumb } from "antd";
import ReviewDescription from "./ReviewDescription";
const { Content } = Layout;

export default class IMDbTableContainer extends Component {
  state = {
    pagination: {},
    reviews: [],
    loading: true,
    currentReview: null
  };

  componentDidMount() {
    this.getIMDbReviews();
  }

  getIMDbReviews = () => {
    const movieName = this.props.match.params.movieName;
    return axios.get(`/reviews/imdb/${movieName}`).then(res => {
      const reviews = res.data.reviews;
      this.setState({ reviews: reviews, loading: false });
    });
  };

  handleReadDetail = review => {
    this.setState({ currentReview: review });
  };

  render() {
    let inReviewBreadCrumb = null;

    let body = (
      <IMDbTableView
        reviews={this.state.reviews}
        loading={this.state.loading}
        handleReadDetail={this.handleReadDetail}
        {...this.props}
      />
    );

    const movieName = this.props.match.params.movieName;
    if (this.state.currentReview) {
      const review = this.state.currentReview;
      inReviewBreadCrumb = <Breadcrumb.Item>{review.title}</Breadcrumb.Item>;
      body = <ReviewDescription review={review} />;
    }

    const breadCrumb = (
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item
          onClick={() => {
            this.setState({ currentReview: null });
          }}
        >
          <Link to={`/dashboard/imdbReview`}>IMDb Reviews</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item
          onClick={() => {
            this.setState({ currentReview: null });
          }}
        >
          <Link to={`/dashboard/imdbReview/${movieName}`}>{`IMDb ${movieName}`}</Link>
        </Breadcrumb.Item>
        {inReviewBreadCrumb}
      </Breadcrumb>
    );

    return (
      <Content style={{ margin: "0 16px" }}>
        {breadCrumb}
        <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
          {body}
        </div>
      </Content>
    );
  }
}
