import Movie from "./Movie";
import React from "react";

const MovieRow = (props) => {
  return (
    <div className="row">
      <h4>{props.data.name}</h4>
      <div className="images-container">
        {props.data.items.map((movie) => (
          <Movie data={movie} key={`${Math.random()}-${movie.id}`} />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
