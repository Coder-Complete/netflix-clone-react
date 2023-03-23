import "./MovieModal.css";

import React, { useRef } from "react";

import { CSSTransition } from "react-transition-group";

function MovieModal({ data, setMovieModal }) {
  const { show, top, left, movieData } = data;
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  const nodeRef = useRef(null);
  console.log(show);
  return (
    <CSSTransition
      in={show}
      nodeRef={nodeRef}
      classNames="example"
      timeout={300}
      onExiting={() => console.log("exiting")}
      onExited={() => console.log("exited")}
    >
      <div
        className="movie-modal"
        ref={nodeRef}
        style={{
          left: left,
          top: window.pageYOffset + top,
        }}
        onMouseLeave={() => {
          setMovieModal({
            show: false,
            top: top,
            left: left,
            movieData: movieData,
          });
        }}
      >
        {<img src={imgUrl + movieData.backdrop_path} alt={data.name} />}
        <div className="movie-details">
          <div className="movie-details__top-row"></div>
          <div className="movie-details__info-line">
            <span className="green">50% Match</span>
            <span className="border">TV-MA</span>
            <span>6 Seasons</span>
            <span className="border">HD</span>
          </div>
          <div className="movie-details__genres">
            {show &&
              movieData.genre_ids.map((genreId) => (
                <span key={genreId}>{genreId}</span>
              ))}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

export default MovieModal;
