import React from "react";
import "./Header.css";
import Nav from "./Nav";

const Header = (props) => {
  return (
    <div className="header">
      <Nav />
      <div className="header-main__left-section">
        <p>
          <span className="red">N</span>
          <span className="gray">SERIES</span>
        </p>
        <h3>THE GREAT BRITISH BAKING SHOW</h3>
        <h3>
          <i>The Professionals</i>
        </h3>
        <h4>#7 in TV Shows Today</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
          necessitatibus ullam ut illum harum. Odio a architecto modi eius,
          laboriosam repellendus. Velit magni hic fugiat. Ratione quasi
          voluptatem eligendi impedit?
        </p>
        <button>Play</button>
        <button
          onClick={() => props.setOpenModal(true)}
          className="gray-button"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default Header;
