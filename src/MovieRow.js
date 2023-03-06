import MovieImage from "./MovieImage";
import React from "react";

const MovieRow = (props) => {
  // const imgUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="row">
      <h4>{props.data.name}</h4>
      <div className="images-container">
        {props.data.items.slice(0, 5).map((movie, i) => (
          <MovieImage key={movie.id} data={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
