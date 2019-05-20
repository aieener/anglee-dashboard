import React, { Component } from "react";
import axios from "../../../../axios-core";
import MovieCards from "../../../../components/Admin/MovieCards/MovieCards";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminLayout from "../../../../components/Admin/AdminLayout";
import MovieEditForm from "../../../../components/Admin/MovieForm/MovieEditForm";

import { Layout } from "antd";
const { Content } = Layout;

class AdminPage extends Component {
  state = {
    movies: null,
    collapsed: true,
    selectedKeys: ["movieCards"]
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  getMovies = () => {
    return axios.get("/movies").then(res => {
      const moviesBack = res.data.movies;
      this.setState({ movies: moviesBack });
    });
  };

  addMovie = data => {
    return axios
      .post("/add-movie", data)
      .then(res => {
        this.getMovies().then(() => {
          console.log("refreshed admin page");
          this.setState({ selectedKeys: ["movieCards"] });
        });
      })
      .catch(err => console.log(err));
  };

  deleteMovie = movieId => {
    console.log("called deleteMovie at Admin", movieId);
    axios
      .post("/delete-movie", { movieId: movieId })
      .then(res => {
        this.getMovies();
      })
      .catch(err => console.log(err));
  };

  updateKey = newKey => {
    this.setState({ selectedKeys: [newKey] });
    console.log(this.state);
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const curUrl = "/anglee-dashboard/admin";
    const movieCards = (
      <MovieCards movies={this.state.movies} deleteMovie={this.deleteMovie} />
    );

    const content = (
      <Content>
        <Route path={curUrl} exact render={() => movieCards} />
        <Route
          path={curUrl + "/add"}
          exact
          render={() => <MovieEditForm addMovie={this.addMovie} />}
        />
      </Content>
    );
    return (
      <Router>
        <AdminLayout
          collapsed={this.state.collapsed}
          content={content}
          curUrl={curUrl}
          onCollapse={this.onCollapse}
          selectedKeys={this.state.selectedKeys}
          updateKey={this.updateKey}
        />
      </Router>
    );
  }
}

export default AdminPage;
