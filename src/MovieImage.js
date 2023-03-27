import React, { useEffect, useState } from "react";

function MovieImage({ data }) {
  const [showDetails, setShowDetails] = useState(false);
  const [hovering, setHovering] = useState(false);
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    let timeout;
    if (hovering) {
      timeout = setTimeout(() => setShowDetails(true), 500);
    } else {
      setTimeout(() => setShowDetails(false), 200);
    }
    return () => clearTimeout(timeout);
  }, [hovering]);

  return (
    <div
      onMouseOver={() => {
        setHovering(true);
      }}
      onMouseLeave={() => setHovering(false)}
      className="movie-image"
    >
      <img
        src={imgUrl + data.poster_path}
        alt={data.name}
        key={`${Math.random()}-${data.id}`}
      />
      {showDetails && (
        <div className="movie-bottom">
          <div className="movie-bottom__top-section">
            <div></div>
            <div></div>
          </div>
          <div>
            <p className="green">96% Match</p>
            <div className="movie-bottom__line">
              <span className="border">TV-MA</span>
              <span>4 Seasons</span>
              <span className="border">HD</span>
            </div>
            <div className="movie-bottom__line">
              {data.genre_ids.map((id) => (
                <span key={Math.random()}>{id}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieImage;