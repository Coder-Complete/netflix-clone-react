import "./style.css";

import React, { useEffect, useState } from "react";

import Counter from "./Counter.js";
import Header from "./Header/Header.js";
import Modal from "./Modal.js";
import MovieRow from "./MovieRow.js";
import TestOutUseEffect from "./TestOutUseEffect";
import TryMapInComponent from "./TryMapInComponent";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [rowData, setRowData] = useState([]);

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
        console.log(allData[0].items[0]);
        setRowData(allData);
      });
    });
  }, []);

  return (
    <div className="app">
      <Header setOpenModal={setOpenModal} />
      <main>
        {openModal ? <Modal setOpenModal={setOpenModal} /> : null}
        {/* <TestOutUseEffect /> */}
        <br />
        <br />
        <br />
        <br />
        {/* <Counter /> */}
        {/* <TryMapInComponent listOfNums={[55, 32, 443, 54, 25, 6]} /> */}
        {rowData.map((rowDataObject, index) => (
          <MovieRow key={rowDataObject.id} index={index} data={rowDataObject} />
        ))}
      </main>
    </div>
  );
};

export default App;
