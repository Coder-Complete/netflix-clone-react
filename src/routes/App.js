import React, { useEffect, useState } from "react";

import { BottomScrollListener } from "react-bottom-scroll-listener";
import Header from "../Header.js";
import Modal from "../Modal.js";
import MovieModal from "../MovieModal.js";
import MovieRow from "../MovieRow.js";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [rowData, setRowData] = useState([]);
  const [movieModalData, setMovieModalData] = useState({});
  const [movieModalPosition, setMovieModalPosition] = useState({});
  const [apiListPage, setApiListPage] = useState(1);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchData();
    fetchGenres();
  }, []);

  function fetchGenres() {
    let token = process.env.API_TOKEN;
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(`https://api.themoviedb.org/3/genre/movie/list`, options)
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.genres);
      });
  }

  function fetchData() {
    let token = process.env.API_TOKEN;
    console.log(token);
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    let promise1 = fetch(
      `https://api.themoviedb.org/3/list/${apiListPage}`,
      options
    );
    let promise2 = fetch(
      `https://api.themoviedb.org/3/list/${apiListPage + 1}`,
      options
    );
    let promise3 = fetch(
      `https://api.themoviedb.org/3/list/${apiListPage + 2}`,
      options
    );

    Promise.all([promise1, promise2, promise3])
      .then((responses) => {
        let promises = responses.map((response) => response.json());
        Promise.all(promises)
          .then((newRowData) => {
            let allRowData = Array.from(rowData).concat(newRowData);
            setRowData(allRowData);
            setApiListPage(apiListPage + 3);
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="app">
      <Header setOpenModal={setOpenModal} />
      <main>
        <MovieModal
          data={movieModalData}
          setMovieModalData={setMovieModalData}
          position={movieModalPosition}
          genres={genres}
        />
        {openModal && <Modal setOpenModal={setOpenModal} />}
        {rowData.map((rowDataObject, index) =>
          rowDataObject.items.length ? (
            <MovieRow
              key={rowDataObject.id}
              index={index}
              data={rowDataObject}
              setMovieModalData={setMovieModalData}
              setMovieModalPosition={setMovieModalPosition}
            />
          ) : null
        )}
      </main>
      <BottomScrollListener onBottom={fetchData} debounce={1000} />
    </div>
  );
};

export default App;
