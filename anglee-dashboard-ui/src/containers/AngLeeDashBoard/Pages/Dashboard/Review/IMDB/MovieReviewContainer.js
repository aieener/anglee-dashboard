import React, { Component } from "react";
import TableContainer from "./Table/TableContainer";
import axios from "../../../../../../axios/axios-core";
import { Rate, Card } from "antd";
export default class MovieReviewContainer extends Component {
  state = {
    reviews: [],
    loading: true,
    movieName: ""
  };
  componentDidMount() {
    this.getIMDbReviews();
  }

  getIMDbReviews = () => {
    const movieName = this.props.match.params.movieName;
    return axios.get(`/reviews/imdb/${movieName}`).then(res => {
      const reviews = res.data.reviews;
      this.setState({ reviews: reviews, loading: false, movieName: movieName });
    });
  };
  render() {
    const { movieName, reviews, loading } = this.state;
    console.log(reviews);
    const gridStyle = {
      width: "25%",
      textAlign: "center"
    };
    return (
      <div>
        <TableContainer
          reviews={reviews}
          movieName={movieName}
          loading={loading}
        ></TableContainer>
      </div>
    );
  }
}
