import "./style.css";

import Header from "./Header.js";
import MovieRow from "./MovieRow.js";
import React from "react";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <MovieRow title={"Released in the Past Year"} />
        <MovieRow title={"Trending Now"} />
        <MovieRow title={"My List"} />
      </main>
    </div>
  );
};

export default App;
