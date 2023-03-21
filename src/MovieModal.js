import "./MovieModal.css";

import React from "react";

function MovieModal({ data, setMovieModal }) {
  const { top, left, movieData } = data;
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div
      className="movie-modal"
      style={{ left: left - 75, top: window.pageYOffset + top - 75 }}
      // need to add scrolltop to top
      // style={{ left: left - 75, top: top + 300 }}
      onMouseLeave={() =>
        setMovieModal({ show: false, top: 0, left: 0, movieData: {} })
      }
    >
      {/* <img src={imgUrl + movieData.poster_path} alt={data.name} /> */}
      <img src={imgUrl + movieData.backdrop_path} alt={data.name} />
      <div className="movie-details">
        <div className="movie-details__top-row"></div>
        <div className="movie-details__info-line">
          <span className="green">50% Match</span>
          <span className="border">TV-MA</span>
          <span>6 Seasons</span>
          <span className="border">HD</span>
        </div>
        <div className="movie-details__genres">
          {movieData.genre_ids.map((genreId) => (
            <span key={genreId}>{genreId}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
