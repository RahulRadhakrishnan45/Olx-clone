import React from "react";
import "./Navbar.css";

import Logo from "../../assets/Logo.png";
import wishlist_icon from "../../assets/heart_icon.svg";
import avatar_icon from "../../assets/avatar_icon.png";
import sell_icon from "../../assets/sellButton_icon.png";
import bell_icon from "../../assets/bell_icon.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="OLX Logo" />
      </div>

      <form className="search-bar">
        <input
          type="text"
          placeholder="Search cars, mobiles, electronics and more..."
        />

        <button type="submit">
          <svg
            width="23px"
            height="23px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
            </g>
          </svg>
        </button>
      </form>

      <div className="navbar-actions">
        <div className="wishlist">
          <img src={wishlist_icon} alt="Wishlist" />
        </div>

        <div className="avatar">
          <img src={avatar_icon} alt="User profile" />
        </div>

        <div className="sellbtn">
          <img src={sell_icon} alt="Sell" />
        </div>

        <div className="bell-icon">
          <img src={bell_icon} alt="Notifications" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
