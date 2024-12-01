import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="title-container">
        <h1 className="main-title">JobPortal</h1>
        <p className="subtitle">Popular Job Portal</p>
      </div>
      <div className="menu">
        <a href="/">Home</a>
        <a href="/jobs">Jobs</a>
        <a href="/contact">Contact</a>
        <a href="/AboutUs">AboutUs</a>
      </div>
    </nav>
  );
};

export default Navbar;