import React, { Component } from "react";
import { Redirect } from "react-router";
import MovieCards from "../../../../components/Admin/MovieCards/MovieCards";
import axios from "../../../../axios/axios-core";

export default class MovieCardContainer extends Component {
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
      return <Redirect push to={`imdbReview/${this.state.selectedMovie.title}`} />;
    }

    return (
      <MovieCards
        isAdmin={false}
        movies={this.state.movies}
        handleCardOnClick={this.handleCardOnClick}
      />
    );
  }
}
