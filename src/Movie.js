import "./Movie.css";

import React, { useState } from "react";

function Movie({ data, translate }) {
  const [hover, setHover] = useState(false);

  const imgUrl = "https://image.tmdb.org/t/p/w500";
  // console.log(data);
  return (
    <div
      className="movie"
      style={{
        transform: `translate(${translate}px) ${
          hover ? "scale(1.5)" : "scale(1)"
        }`,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={imgUrl + data.poster_path} alt={data.name} />
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
            <span key={genreId}>{genreId}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movie;
