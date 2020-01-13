import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import { List } from "antd";

const MovieCards = props => {
  let movieCards = <div className={"loader"} />;
  if (props.movies) {
    movieCards = (
      <List
        grid={{ gutter: 16, x2: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }}
        dataSource={props.movies}
        renderItem={movie => (
          <List.Item>
            <MovieCard
              isAdmin={props.isAdmin}
              movie={movie}
              deleteMovie={props.deleteMovie}
              crawlTheInternet={props.crawlTheInternet}
              cardOnClick={props.handleCardOnClick}
            />
          </List.Item>
        )}
      />
    );
  }
  return movieCards;
};

export default MovieCards;
