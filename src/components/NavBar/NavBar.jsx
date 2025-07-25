import React, { useEffect, useRef, useState } from "react";
import "./NavBar.css";
import { assets } from "../../assets";
import { logout } from "../../firebase";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const navRef = useRef();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <div className="navbar" ref={navRef}>
      <div className="nav-left">
        <img src={assets.logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className="nav-right">
        <img src={assets.search_icon} className="icon" alt="" />
        <p>Children</p>
        <img src={assets.bell_icon} className="icon" alt="" />

        {/* Profile and dropdown hover zone */}
        <div
          className="navbar-profile"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <img src={assets.profile_img} className="profile" alt="" />
          <img src={assets.caret_icon} alt="" />

          {dropdownVisible && (
            <div className="dropdown">
              <p
                onClick={() => {
                  logout();
                  navigate("/login"); // Optional redirect after logout
                }}
              >
                Sign out of Netflix
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
