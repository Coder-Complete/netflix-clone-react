import "./MovieRow.css";

import Movie from "./Movie";
import React from "react";

const MovieRow = (props) => {
  return (
    <div className="row">
      <h4>{props.data.name}</h4>
      <div className="images-container">
        <div className="left-arrow">{"<"}</div>
        {props.data.items.map((movie) => (
          <Movie data={movie} key={`${movie.id}`} />
        ))}
        <div className="right-arrow">{">"}</div>
      </div>
    </div>
  );
};

export default MovieRow;
