import "./MovieModal.css";

import React, { useRef } from "react";

import { CSSTransition } from "react-transition-group";

function MovieModal({ data, position, setMovieModalData, genres }) {
  const ref = useRef(null);
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  function getGenreWord(genreId) {
    let genreObj = genres.find((genre) => genre.id === genreId);
    return genreObj.name;
  }

  return (
    <CSSTransition
      nodeRef={ref}
      timeout={300}
      in={data.id !== undefined}
      classNames="movie-modal-transition"
    >
      <div
        ref={ref}
        className="movie-modal"
        style={{
          top: `${position.top + window.scrollY}px`,
          left: `${position.left}px`,
        }}
        onMouseLeave={() => {
          setMovieModalData((prevMovieModalData) => {
            let newMovieModalData = Object.assign({}, prevMovieModalData, {
              id: undefined,
            });
            return newMovieModalData;
          });
        }}
      >
        {
          <img
            src={data.backdrop_path && imgUrl + data.backdrop_path}
            alt={data.backdrop_path && data.original_title}
          />
        }
        {data.id && (
          <div className="movie-details">
            <div className="movie-details__top-row"></div>
            <div className="movie-details__info-line">
              <span className="green">50% Match</span>
              <span className="border">TV-MA</span>
              <span>6 Seasons</span>
              <span className="border">HD</span>
            </div>
            <div className="movie-details__genres">
              {data.genre_ids &&
                data.genre_ids.map((genreId) => (
                  <span key={genreId}>{getGenreWord(genreId)}</span>
                ))}
            </div>
          </div>
        )}
      </div>
    </CSSTransition>
  );
}

export default MovieModal;
