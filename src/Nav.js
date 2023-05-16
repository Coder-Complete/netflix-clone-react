import React from "react";
import { BsPencil, BsPerson, BsQuestionCircle } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { GiCardExchange } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import avatarPhoto from "./assets/netflix-avatar.png";
import { NavLink, useLocation } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="header__top-row">
      <div className="header__top-row__left">
        <NavLink to={"/"}>
          <h1 className="red">Netflix</h1>
        </NavLink>
        <div className="tooltip-wrapper">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Browse
          </NavLink>
          <NavLink
            to={"/browse/my-list"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            My List
          </NavLink>
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
  );
}

export default Nav;
