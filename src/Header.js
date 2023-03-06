import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// <-- import styles to be used

const Header = (props) => {
  return (
    <header>
      <div className="header__top-row">
        <div>
          <h1 className="red">Netflix</h1>
          <span>Browse</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-regular fa-bell"></i>
          {/* <img src="" alt="" /> */}
        </div>
      </div>
      <div className="header-main">
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
    </header>
  );
};

export default Header;
