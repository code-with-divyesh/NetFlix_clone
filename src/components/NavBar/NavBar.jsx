import React, { useEffect, useRef } from "react";
import "./NavBar.css";
import { assets } from "../../assets";
const NavBar = () => {
  const navRef = useRef();
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
        <div className="navbar-profile">
          <img src={assets.profile_img} className="profile" alt="" />
          <img src={assets.caret_icon} alt="" />
          <div className="dropdown">
            <p>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
