import "./style.css";

import React, { useState } from "react";

import Counter from "./Counter.js";
import Header from "./Header.js";
import Modal from "./Modal.js";
import MovieRow from "./MovieRow.js";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="app">
      <Header setOpenModal={setOpenModal} />
      <main>
        {openModal ? <Modal setOpenModal={setOpenModal} /> : null}
        <Counter />
        <MovieRow title={"Released in the Past Year"} />
        <MovieRow title={"Trending Now"} />
        <MovieRow title={"My List"} />
      </main>
    </div>
  );
};

export default App;
