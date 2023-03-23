import "./MovieRow.css";

import React, { useEffect, useState } from "react";

import Movie from "./Movie";

const MovieRow = ({ data, setMovieModal }) => {
  const [page, setPage] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  let movieWidth = 200;
  let movieMarginLeft = 2;
  let movieMarginRight = 2;
  let totalMovieWidth = movieWidth + movieMarginLeft + movieMarginRight;

  // get number of movies we can fit on screen
  function getNumberOfMoviesPerPage() {
    return Math.floor(screenWidth / totalMovieWidth);
  }

  // get number of pages
  function getLastPageNumber() {
    let numOfMoviesTotal = data.items.length;
    let numOfMoviesPerPage = getNumberOfMoviesPerPage();
    let offsetDueToPageStartingAtZeroIndex = 1;
    return (
      Math.ceil(numOfMoviesTotal / numOfMoviesPerPage) -
      offsetDueToPageStartingAtZeroIndex
    );
  }

  let numOfMoviesPerPage = getNumberOfMoviesPerPage();
  let lastPageNumber = getLastPageNumber();

  return (
    <div className="row">
      <h4>{data.name}</h4>
      <div
        className="images-container"
        style={{ width: `${totalMovieWidth * numOfMoviesPerPage}px` }}
      >
        <div
          className="left-arrow"
          onClick={() => {
            if (page !== 0) {
              let newPageNum = page - 1;
              setPage(newPageNum);
              setTranslate(-totalMovieWidth * newPageNum * numOfMoviesPerPage);
            }
          }}
        >
          {"<"}
        </div>
        {data.items.map((movie) => (
          <Movie
            translate={translate}
            data={movie}
            key={`${movie.id}`}
            setMovieModal={setMovieModal}
          />
        ))}
        <div
          className="right-arrow"
          onClick={() => {
            if (page !== lastPageNumber) {
              let newPageNum = page + 1;
              setPage(newPageNum);
              setTranslate(-totalMovieWidth * newPageNum * numOfMoviesPerPage);
            }
          }}
        >
          {">"}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
