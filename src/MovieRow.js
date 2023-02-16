import React from "react";
import imgSrc from "./assets/movie.jpg";

const MovieRow = (props) => {
  return (
    <div className="row">
      <h4>{props.title}</h4>
      <div className="images-container">
        <img src={imgSrc} alt="" />
        <img src={imgSrc} alt="" />
        <img src={imgSrc} alt="" />
        <img src={imgSrc} alt="" />
        <img src={imgSrc} alt="" />
      </div>
    </div>
  );
};

export default MovieRow;
