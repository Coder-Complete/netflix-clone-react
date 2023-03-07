import BellTooltip from "./BellTooltip";
import { FaRegBell } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import HeaderIcon from "./HeaderIcon";
import { Link } from "react-router-dom";
import ProfileTooltip from "./ProfileTooltip";
import React from "react";
import avatar from "../assets/Netflix-avatar.png";

const Header = (props) => {
  return (
    <header>
      <div className="header__top-row">
        <div className="header__top-row--left">
          <Link to="/">
            <h1 className="red">Netflix</h1>
          </Link>
          <span>Browse</span>
          <Link to="/browse/my-list">My List</Link>
        </div>
        <div className="header__top-row--right">
          <HeaderIcon component={<GoSearch className="icon" />} />
          <HeaderIcon
            component={<FaRegBell className="icon" />}
            tooltipContent={<BellTooltip />}
          />
          <HeaderIcon
            component={<img src={avatar} alt="" className="icon" />}
            tooltipContent={<ProfileTooltip />}
          />
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
