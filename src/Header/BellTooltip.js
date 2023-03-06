import React from "react";
import movie from "../assets/movie.jpg";

function BellTooltip() {
  return (
    <div className="bell-tooltip">
      <img src={movie} alt="" />
      <div>
        <h4>Suggestions for Tonight</h4>
        <h4>Explore personalized picks.</h4>
        <p>2 weeks ago</p>
      </div>
    </div>
  );
}

export default BellTooltip;
