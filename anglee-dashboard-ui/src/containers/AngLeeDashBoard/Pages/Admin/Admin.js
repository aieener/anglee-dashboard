import React, { Component } from "react";
import axios from "../../../../axios/axios-core";
import axiosCrawler from "../../../../axios/axios-crawler";
import MovieCards from "../../../../components/Admin/MovieCards/MovieCards";
import { Route } from "react-router-dom";
import AdminLayout from "../../../../components/Admin/AdminLayout";
import MovieEditForm from "../../../../components/Admin/MovieForm/MovieEditForm";

import { Layout } from "antd";
const { Content } = Layout;

class AdminPage extends Component {
  state = {
    movies: [],
    collapsed: true,
    selectedKeys: ["movieCards"]
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  crawlTheInternet = movie => {
    let reviews = [];
    axios
      .get(`/reviews/imdb/${movie.title}`)
      .then(res => {
        reviews = res.data.reviews;
      })
      .then(() => {
        if (reviews.length !== 0) {
          console.log(`already crawled movie: ${movie.title}`);
          return;
        } else {
          this._executeCrawling(movie);
        }
      });
  };

  _executeCrawling = movie => {
    console.log(`starting to crawl the movie: ${movie.title} ...`);
    return axiosCrawler
      .post("/crawlIMDb", movie)
      .then(res => {
        console.log(`crawling job done!`);
        return axios.post("/reviews/imdb/add-review", res.data);
      })
      .then(res => {
        console.log(res.data);
        console.log(
          `crawling result for movie : ${movie.title} is saved to db`
        );
      })
      .catch(err => console.log(err));
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
        return this.getMovies();
      })
      .then(() => {
        console.log("refreshed admin page");
        this.setState({ selectedKeys: ["movieCards"] });
      })
      .catch(err => console.log(err));
  };

  deleteMovie = movie => {
    const movieId = movie._id;
    const movieName = movie.title;
    console.log("called deleteMovie at Admin", movieId);
    axios
      .post("/delete-movie", { movieId: movieId })
      .then(res => {
        console.log(res.data);
        return axios.post("/reviews/imdb/delete-review", {
          movieName: movieName
        }); // refactor to handle not only imdb
      })
      .then(res => {
        console.log(res.data);
        return this.getMovies();
      })
      .catch(err => console.log(err));
  };

  updateMenuKey = newKey => {
    this.setState({ selectedKeys: newKey });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const rootUrl = "/admin";
    const movieCards = (
      <MovieCards
        isAdmin={true}
        movies={this.state.movies}
        deleteMovie={this.deleteMovie}
        crawlTheInternet={this.crawlTheInternet}
      />
    );

    const content = (
      <Content style={{ margin: "16px 16px" }}>
        <Route path={rootUrl} exact render={() => movieCards} />
        <Route
          path={`${rootUrl}/add`}
          exact
          render={() => <MovieEditForm addMovie={this.addMovie} />}
        />
      </Content>
    );
    return (
      <AdminLayout
        collapsed={this.state.collapsed}
        content={content}
        rootUrl={rootUrl}
        onCollapse={this.onCollapse}
        selectedKeys={this.state.selectedKeys}
        updateMenuKey={this.updateMenuKey}
      />
    );
  }
}

export default AdminPage;
