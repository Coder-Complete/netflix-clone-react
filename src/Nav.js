import React from "react";
import { BsPencil, BsPerson, BsQuestionCircle } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { GiCardExchange } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import avatarPhoto from "./assets/netflix-avatar.png";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="header__top-row__left">
        <NavLink to={"/"}>
          <h1 className="red" style={{ marginRight: "20px" }}>
            Netflix
          </h1>
        </NavLink>
        <div className="tooltip-wrapper">
          <NavLink to={"/"} className="white">
            Browse
          </NavLink>
          <div className="tooltip browse">
            <ul>
              <li className="browse-list-item">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="browse-list-item">
                <NavLink
                  to={"/browse/genre/83"}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  TV Shows
                </NavLink>
              </li>
              <li className="browse-list-item">
                <NavLink
                  to={"/browse/genre/34399"}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Movies
                </NavLink>
              </li>
              <li className="browse-list-item">
                <NavLink
                  to={"/latest"}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  New & Popular
                </NavLink>
              </li>
              <li className="browse-list-item">
                <NavLink
                  to={"/browse/my-list"}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  My List
                </NavLink>
              </li>
              <li className="browse-list-item">
                <NavLink
                  to={"/browse/original-audio"}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
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
