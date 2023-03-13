import "./Movie.css";

import { GiEnergyShield } from "react-icons/gi";
import React from "react";

function Movie({ data }) {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="movie">
      <div className="movie__image-container">
        <img src={imgUrl + data.poster_path} alt={data.name} />
      </div>
      <div className="movie-details">
        <div className="movie-details__top-row"></div>
        <div className="movie-details__info-line">
          <span className="green">50% Match</span>
          <span className="border">TV-MA</span>
          <span>6 Seasons</span>
          <span className="border">HD</span>
        </div>
        <div className="movie-details__genres">
          {data.genre_ids.map((genreId) => (
            <span key={`movie-${data.id}-genre-${genreId}`}>{genreId}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movie;
