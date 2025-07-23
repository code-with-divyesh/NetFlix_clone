import React from "react";
import "./Footer.css";
import { assets } from "../../assets";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.instagram_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.youtube_icon} alt="" />
      </div>
      <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Trending Now</li>
        <li>Top Rated</li>
        <li>Action</li>
        <li>Comedies</li>
        <li>Documentaries</li>
        <li>Privacy</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">
        © 2025 Netflix, Inc. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
