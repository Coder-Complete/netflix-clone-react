import "./Movie.css";

import React, { useRef, useState } from "react";

function Movie({ data, translate, setMovieModal }) {
  const [hover, setHover] = useState(false);
  const ref = useRef(null);

  const imgUrl = "https://image.tmdb.org/t/p/w500";
  // console.log(data);
  return (
    <div
      className="movie"
      ref={ref}
      style={{
        transform: `translate(${translate}px) ${
          hover ? "scale(1.5)" : "scale(1)"
        }`,
      }}
      // onMouseEnter={() => setHover(true)}
      onMouseEnter={() => {
        let boundingRect = ref.current?.getBoundingClientRect();
        setMovieModal({
          show: true,
          top: boundingRect.top,
          left: boundingRect.left,
          // top: ref.current?.offsetHeight,
          // left: ref.current?.offsetWidth,
          movieData: data,
        });
      }}
      onMouseLeave={() => setHover(false)}
    >
      <img src={imgUrl + data.backdrop_path} alt={data.name} />
      {/* <img src={imgUrl + data.poster_path} alt={data.name} /> */}
      {/* <div className="movie-details">
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
      </div> */}
    </div>
  );
}

export default Movie;
