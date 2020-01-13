import React, { Component } from "react";
import IMDbTableView from "../../../../../../../components/Dashboard/Reviews/IMDb/IMDbTableView";
import { Link } from "react-router-dom";
import { Layout, Breadcrumb } from "antd";
import ReviewDescription from "../../../../../../../components/Dashboard/Reviews/IMDb/IMDbReviewDetail";
const { Content } = Layout;

export default class TableContainer extends Component {
  state = {
    pagination: {},
    currentReview: null
  };

  handleReadDetail = review => {
    this.setState({ currentReview: review });
  };

  render() {
    const { movieName, reviews, loading } = this.props;
    let inReviewBreadCrumb = null;

    let body = (
      <IMDbTableView
        reviews={reviews}
        loading={loading}
        handleReadDetail={this.handleReadDetail}
        {...this.props}
      />
    );

    if (this.state.currentReview) {
      const review = this.state.currentReview;
      inReviewBreadCrumb = <Breadcrumb.Item>{review.title}</Breadcrumb.Item>;
      body = <ReviewDescription review={review} />;
    }

    const breadCrumb = (
      <Breadcrumb style={{ margin: "16px 0 " }}>
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
          <Link
            to={`/dashboard/imdbReview/${movieName}`}
          >{`${movieName}`}</Link>
        </Breadcrumb.Item>
        {inReviewBreadCrumb}
      </Breadcrumb>
    );

    return (
      <div>
        {breadCrumb}
        <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
          {body}
        </div>
      </div>
    );
  }
}
