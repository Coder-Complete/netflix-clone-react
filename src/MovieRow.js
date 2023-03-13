import "./MovieRow.css";

import React, { useState } from "react";

import Movie from "./Movie";

const MovieRow = (props) => {
  const [page, setPage] = useState(1);

  // set spec width for movie
  // see width of screen
  // calc how many imgs can be shown
  // calc how many "pages" of imgs there can be
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
