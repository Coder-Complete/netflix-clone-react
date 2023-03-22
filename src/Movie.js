import "./Movie.css";

import React, { useEffect, useRef, useState } from "react";

function Movie({ data, translate, setMovieModal }) {
  const [hover, setHover] = useState(false);
  const modalTimeout = useRef(null); // we can save timer in useRef and pass it to child
  const ref = useRef(null);

  // it has to be in movie that we delay having the MovieModal come up (b/c if done in movie modal, modal doesn't go away if hover over multiple movies in a row)

  useEffect(() => {
    if (hover) {
      modalTimeout.current = setTimeout(() => {
        let boundingRect = ref.current?.getBoundingClientRect();
        setMovieModal({
          show: true,
          top: boundingRect.top,
          left: boundingRect.left,
          movieData: data,
        });
      }, 500);
    } else {
      clearTimeout(modalTimeout.current);
    }
    return () => {
      clearTimeout(modalTimeout.current);
    };
  }, [hover]);

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
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={imgUrl + data.backdrop_path} alt={data.name} />
    </div>
  );
}

export default Movie;
