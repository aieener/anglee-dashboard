import React, { Component } from "react";
import { Redirect } from "react-router";
import MovieCards from "components/Admin/MovieCards/MovieCards";
import axios from "@/axios/axios-core";
import { Breadcrumb } from "antd";

export default class MovieCardsContainer extends Component {
  state = {
    movie: null,
    selectedMovie: null
  };

  handleCardOnClick = movie => {
    this.setState({ selectedMovie: movie });
  };

  getMovies = () => {
    return axios.get("/movies").then(res => {
      const moviesBack = res.data.movies;
      this.setState({ movies: moviesBack });
    });
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    if (this.state.selectedMovie) {
      return (
        <Redirect push to={`imdbReview/${this.state.selectedMovie.title}`} />
      );
    }

    const breadCrumb = (
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>IMDb Reviews</Breadcrumb.Item>
      </Breadcrumb>
    );

    return (
      <div style={{ margin: " 16px 0" }}>
        {breadCrumb}
        <MovieCards
          isAdmin={false}
          movies={this.state.movies}
          handleCardOnClick={this.handleCardOnClick}
        />
      </div>
    );
  }
}
