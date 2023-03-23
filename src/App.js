import "./style.css";

import React, { useEffect, useState } from "react";

import Header from "./Header.js";
import Modal from "./Modal.js";
import MovieModal from "./MovieModal";
import MovieRow from "./MovieRow.js";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [rowData, setRowData] = useState([]);
  const [movieModal, setMovieModal] = useState({
    show: false,
    top: 0,
    left: 0,
    // width: 0,
    // height: 0,
    movieData: {},
  });

  useEffect(() => {
    let token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGQ0MmUyMzQwYWViOWQ0YzY5MTE4NWNiZGJjMDBmMiIsInN1YiI6IjYzZWVjZTY0Y2RkYmJjMDA3YzJiZDFhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q73VtBZhZdCb7hHnBBA5z3FOb9FqF9luAv9Kf2-OX9I";
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    let promise1 = fetch("https://api.themoviedb.org/3/list/1", options);
    let promise2 = fetch("https://api.themoviedb.org/3/list/2", options);
    let promise3 = fetch("https://api.themoviedb.org/3/list/3", options);
    Promise.all([promise1, promise2, promise3]).then((responses) => {
      let promises = responses.map((response) => response.json());
      Promise.all(promises).then((allData) => {
        setRowData(allData);
      });
    });
  }, []);

  return (
    <div className="app">
      <Header setOpenModal={setOpenModal} />
      <main>
        {openModal && <Modal setOpenModal={setOpenModal} />}
        {rowData.map((rowDataObject, index) => (
          <MovieRow
            key={rowDataObject.id}
            index={index}
            data={rowDataObject}
            setMovieModal={setMovieModal}
          />
        ))}
        {/* {movieModal.show && ( */}
        <MovieModal data={movieModal} setMovieModal={setMovieModal} />
        {/* )} */}
      </main>
    </div>
  );
};

export default App;
