import React from "react";
import "../Styles/RightMenu.css";
import { FaCrown, FaBell, FaRegHeart, FaSun, FaCog } from "react-icons/fa";
import Profile from "../img/profile.jpg";

function RightMenu() {
  return (
    <div className="rightMenu">
      <div className="goPro">
        <i>
          <FaCrown />
          <p>
            Go <span>Pro</span>
          </p>
        </i>

        <i>
          <FaBell />
        </i>
        <i>
          <FaRegHeart />
        </i>
      </div>
      <div className="profile">
        <i>
          <FaSun />
        </i>

        <i>
          <FaCog />
        </i>

        <div className="profileImg">
          <img src={Profile} alt="" />
        </div>
      </div>
    </div>
  );
}

export { RightMenu };
