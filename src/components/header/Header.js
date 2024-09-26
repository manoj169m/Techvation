  import React, { useState } from 'react';
  import { assets } from '../../assests/assest';
  import './Header.css'

  const Header = () => {
    const [searchActive, setSearchActive] = useState(false);
    const [navbarActive, setNavbarActive] = useState(false);



    const toggleSearch = () => {
      setSearchActive(!searchActive);
      setNavbarActive(false);
    };

    const toggleNavbar = () => {
      setNavbarActive(!navbarActive);
      setSearchActive(false);
    };



    return (
      <header className={`header `}>
        <a href="#home" className="logo">
          <img src={assets.logo} alt="Logo" />
        </a>

        <nav className={`navbar ${navbarActive ? 'active' : ''}`}>
          <a href="#home" >Home</a>
          <a href="#about">About</a>
          <a href="#products">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="icons">
          <div id="menu-btn" className="fas fa-bars" onClick={toggleNavbar}></div>
          <div id="search-btn" className="fas fa-search" onClick={toggleSearch}></div>
          <a href="#" className="fas fa-user"></a>
        </div>

        <form className={`search-form ${searchActive ? 'active' : ''}`}>
          <input type="search" placeholder="Search here..." id="input-box" />
          <label htmlFor="input-box" className="fas fa-search"></label>
        </form>
      </header>
    );
  };

  export default Header;
