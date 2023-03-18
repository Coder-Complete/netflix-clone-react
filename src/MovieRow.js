import "./MovieRow.css";

import React, { useEffect, useState } from "react";

import Carousel from "react-material-ui-carousel";
import Movie from "./Movie";

const MovieRow = ({ data }) => {
  const [page, setPage] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  let movieWidth = 150;
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

  function getArrayOfMovies() {
    let allMovies = data.items;
    let numOfMoviesPerPage = getNumberOfMoviesPerPage();
    let beginning = page * numOfMoviesPerPage;
    let end = page * numOfMoviesPerPage + numOfMoviesPerPage;
    return allMovies.slice(beginning, end);
  }

  let arrayOfMoviesForCurrentPage = getArrayOfMovies();
  let numOfMoviesPerPage = getNumberOfMoviesPerPage();
  let lastPageNumber = getLastPageNumber();

  return (
    <div className="row">
      <h4>{data.name}</h4>
      <div className="images-container">
        {/* <div
          className="left-arrow"
          onClick={() => {
            if (page !== 0) setPage(page - 1);
          }}
        >
          {"<"}
        </div> */}
        <Carousel
          className="carousel"
          animation="slide"
          autoPlay={false}
          indicators={false}
          navButtonsAlwaysVisible={true}
        >
          <div className="page" style={{ display: "flex", width: "100%" }}>
            {<Movie data={data.items[0]} key={data.items[0].id}></Movie>}
            {<Movie data={data.items[1]} key={data.items[1].id}></Movie>}
          </div>
          <div className="page" style={{ display: "flex", width: "100%" }}>
            {<Movie data={data.items[2]} key={data.items[2].id}></Movie>}
            {<Movie data={data.items[3]} key={data.items[3].id}></Movie>}
          </div>
          <div className="page" style={{ display: "flex", width: "100%" }}>
            {<Movie data={data.items[4]} key={data.items[4].id}></Movie>}
            {<Movie data={data.items[5]} key={data.items[5].id}></Movie>}
          </div>
          {/* {arrayOfMoviesForCurrentPage.map((movie) => (
            <Movie data={movie} key={`${movie.id}`} />
          ))} */}
        </Carousel>
        {/* <div
          className="right-arrow"
          onClick={() => {
            if (page !== lastPageNumber) setPage(page + 1);
          }}
        >
          {">"}
        </div> */}
      </div>
    </div>
  );
};

export default MovieRow;
