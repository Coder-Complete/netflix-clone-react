import React from "react";

const MovieRow = (props) => {
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="row">
      <h4>{props.data.name}</h4>
      <div className="images-container">
        {props.data.items.map((movie) => (
          <img
            src={imgUrl + movie.poster_path}
            alt={movie.name}
            key={`${Math.random()}-${movie.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
