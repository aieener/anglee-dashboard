import React from "react";
import MovieCard from "./MovieCard/MovieCard";

const MovieCards = props => {
  let movieCards = <div className={"loader"}></div>;
  if (props.movies) {
    movieCards = (
      <div className={"d-flex m-2 flex-wrap"}>
        {props.movies.map((movie, idx) => {
          return (
            <div className={"m-2"} key={idx}>
              <MovieCard movie={movie} deleteMovie={props.deleteMovie}/>
            </div>
          );
        })}
      </div>
    );
  }
  return movieCards;
};

export default MovieCards;
