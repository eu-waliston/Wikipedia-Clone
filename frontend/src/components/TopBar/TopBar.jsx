import React from "react";
import "./TopBar.scss";

// import {Link} from "react-router-dom"
import { FaUser } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="top__bar">
      <div className="topbar__itens">
        <div className="search__component">
          <input
            type="text"
            placeholder="Enter you search..."
            className="search"
          />
        </div>

        <div className="talk__cont">
          <a href="/">Talk</a>
          <a href="/">Contribuitions</a>
        </div>

        <div>
          <FaUser className="user" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
