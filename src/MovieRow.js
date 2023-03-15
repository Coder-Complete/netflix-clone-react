import "./MovieRow.css";

import React, { useState, useSyncExternalStore } from "react";

import Movie from "./Movie";

const MovieRow = ({ data }) => {
  const [page, setPage] = useState(0);

  let movieWidth = 150;
  let movieMarginLeft = 2;
  let movieMarginRight = 2;
  let totalMovieWidth = movieWidth + movieMarginLeft + movieMarginRight;

  // get number of movies we can fit on screen
  function getNumberOfMoviesPerPage() {
    return Math.floor(window.innerWidth / totalMovieWidth);
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

  function getArrayOfMovies() {
    let allMovies = data.items;
    let numOfMoviesPerPage = getNumberOfMoviesPerPage();
    let beginning = page * numOfMoviesPerPage;
    let end = page * numOfMoviesPerPage + numOfMoviesPerPage;
    return allMovies.slice(beginning, end);
  }

  let arrayOfMoviesForCurrentPage = getArrayOfMovies();
  let lastPageNumber = getLastPageNumber();

  return (
    <div className="row">
      <h4>{data.name}</h4>
      <div className="images-container">
        <div
          className="left-arrow"
          onClick={() => {
            if (page !== 0) setPage(page - 1);
          }}
        >
          {"<"}
        </div>
        {arrayOfMoviesForCurrentPage.map((movie) => (
          <Movie data={movie} key={`${movie.id}`} />
        ))}
        <div
          className="right-arrow"
          onClick={() => {
            if (page !== lastPageNumber) setPage(page + 1);
          }}
        >
          {">"}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
