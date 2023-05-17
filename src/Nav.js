import React from "react";
import { NavLink } from "react-router-dom";
import { BsPencil, BsPerson, BsQuestionCircle } from "react-icons/bs";
import { GiCardExchange } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import avatarPhoto from "./assets/netflix-avatar.png";

function Nav() {
  return (
    <div className="header__top-row">
      <div className="header__top-row__left">
        <h1>
          <NavLink to="/" id="netflix-header">
            Netflix
          </NavLink>
        </h1>
        <div className="tooltip-wrapper">
          <span>Browse</span>
          <div className="tooltip browse">
            <ul>
              <li className="browse-list-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li className="browse-list-item">
                <NavLink
                  to="/browse/genre/83"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  TV Shows
                </NavLink>
              </li>
              <li className="browse-list-item">
                <NavLink
                  to="/browse/genre/34338"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Movies
                </NavLink>
              </li>
              <li className="browse-list-item">
                <NavLink
                  to="/latest"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  New & Popular
                </NavLink>
              </li>
              <li className="browse-list-item">
                <NavLink
                  to="/browse/my-list"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  My List
                </NavLink>
              </li>
              <li className="browse-list-item">
                <NavLink
                  to="/browse/original-audio"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Browse by Languages
                </NavLink>
              </li>
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
  );
}

export default Nav;
