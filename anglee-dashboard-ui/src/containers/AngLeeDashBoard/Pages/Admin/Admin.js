import React, { Component } from "react";
import axios from "axios";

class AdminPage extends Component {
  state = {
    articles: [],
    apiKey: "OQr3kIYAhimfbgYm72j0lSCmIJuahUkd",
    page: 1,
    error: false
  };

  componentDidMount() {

    axios
      .get("/movies")
      .then(res => console.log("fetchMovies From backend,", res.data.movies));
  }

  render() {
    return <h1 className="text-center">This is the Admin Page</h1>;
  }
}

export default AdminPage;