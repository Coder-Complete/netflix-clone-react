import "./Header.css";

import { BsPencil, BsPerson, BsQuestionCircle } from "react-icons/bs";

import { GiCardExchange } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import React from "react";
import avatarPhoto from "./assets/netflix-avatar.png";

const Header = (props) => {
  return (
    <header>
      <div className="header__top-row">
        <div className="header__top-row__left">
          <h1 className="red">Netflix</h1>
          <div className="tooltip-wrapper">
            <span>Browse</span>
            <div className="tooltip browse">
              <ul>
                <li className="browse-list-item">Home</li>
                <li className="browse-list-item">TV Shows</li>
                <li className="browse-list-item">Movies</li>
                <li className="browse-list-item">New & Popular</li>
                <li className="browse-list-item">My List</li>
                <li className="browse-list-item">Browse by Languages</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={"header__top-row__right"}>
          <IoSearch className="header-icon" />
          <div className="tooltip-wrapper">
            <IoMdNotificationsOutline className="header-icon" />
            <div className="tooltip right">
              <p>No recent notifications</p>
            </div>
          </div>
          <div className="tooltip-wrapper" style={{ marginLeft: "15px" }}>
            <img src={avatarPhoto} alt="" />
            <div className="tooltip right">
              <ul>
                <li>
                  <img src={avatarPhoto} alt="" />
                  <p>Jared</p>
                </li>
                <li>
                  <img src={avatarPhoto} alt="" />
                  <p>Jeffrey</p>
                </li>
                <li>
                  <img src={avatarPhoto} alt="" />
                  <p>Sarah</p>
                </li>
              </ul>
              <hr />
              <ul>
                <li>
                  <BsPencil className="icon" />
                  <p>Manage Profiles</p>
                </li>
                <li>
                  <GiCardExchange className="icon" />
                  <p>Transfer Profile</p>
                </li>
                <li>
                  <BsPerson className="icon" />
                  <p>Account</p>
                </li>
                <li>
                  <BsQuestionCircle className="icon" />
                  <p>Help Center</p>
                </li>
              </ul>
              <hr />
              <p className="tooltip-sign-out">lksjdfs</p>
            </div>
          </div>
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
