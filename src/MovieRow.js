import "./MovieRow.css";

import React, { useEffect, useState } from "react";

import Movie from "./Movie";

const MovieRow = (props) => {
  const [slide, setSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  function numOfImagesPerSlide() {
    // 154 is width of movie including margin
    // +1 so that images at ends can be cut off
    return Math.floor(windowWidth / 154) + 1;
  }

  function maxNumOfSlides(numOfMovies) {
    return Math.ceil(numOfMovies / numOfImagesPerSlide());
  }

  function getDataSliceForSlide() {
    let amountPerSlide = numOfImagesPerSlide();
    let start = slide * amountPerSlide;
    let end = slide * amountPerSlide + amountPerSlide;
    return props.data.items.slice(start, end);
  }

  return (
    <div className="row">
      <h4>{props.data.name}</h4>
      <div className="images-container">
        <div
          className="left-arrow"
          onClick={() => {
            if (slide > 0) setSlide(slide - 1);
          }}
        >
          {"<"}
        </div>
        {getDataSliceForSlide().map((movie, i) => (
          <Movie data={movie} key={`movie-${movie.id}`} />
        ))}
        <div
          className="right-arrow"
          onClick={() => {
            if (slide !== maxNumOfSlides() - 1) setSlide(slide + 1);
          }}
        >
          {">"}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
