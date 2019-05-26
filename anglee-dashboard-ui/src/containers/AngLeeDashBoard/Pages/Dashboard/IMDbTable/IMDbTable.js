import React, { Component } from "react";
import axios from "../../../../../axios/axios-core";
import IMDbTableView from "../../../../../components/Dashboard/Reviews/IMDb/IMDbTableView";
import { Layout, Breadcrumb } from "antd";
const { Content } = Layout;

export default class IMDbTableContainer extends Component {
  state = {
    pagination: {},
    reviews: [],
    loading: true
  };


  componentDidMount() {
    this.getIMDbReviews();
  }

  getIMDbReviews = () => {
    return axios.get("/reviews/imdb").then(res => {
      const reviews = res.data.reviews;
      console.log(reviews);
      this.setState({ reviews: reviews, loading: false });
    });
  };

  render() {
    return (
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Review</Breadcrumb.Item>
          <Breadcrumb.Item>IMDb</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
          <IMDbTableView
            reviews={this.state.reviews}
            loading={this.state.loading}
          />
        </div>
      </Content>
    );
  }
}
