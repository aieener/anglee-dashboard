import React, { Component } from "react";
import axios from "axios";

class NewYorkTimesPage extends Component {
  state = {
    articles: [],
    apiKey: "OQr3kIYAhimfbgYm72j0lSCmIJuahUkd",
    page: 1,
    error: false
  };

  componentDidMount() {
    var url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=345f60dfe08547e2b7dbd49637e0a9e2";
    axios
      .get(url)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  render() {
    return <h1 className="text-center">This is the New York Times page</h1>;
  }
}

export default NewYorkTimesPage;
