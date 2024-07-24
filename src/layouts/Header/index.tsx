import React from 'react'
import Search from './Search'
import logo from '../../assets/icons/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="EduTrek Logo" className="logo" />
      </div>
      <Search/>
      <button className="signout-button">Sign out</button>
    </header>
  );
}

export default Header