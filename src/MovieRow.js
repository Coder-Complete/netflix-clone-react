import MovieImage from "./MovieImage";
import React from "react";

const MovieRow = (props) => {
  // const imgUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="row">
      <h4>{props.data.name}</h4>
      <div className="images-container">
        {props.data.items.map((movie) => (
          <MovieImage key={`${Math.random()}-${movie.id}`} data={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
