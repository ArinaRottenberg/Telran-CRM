import React from 'react'
import Search from './Search'
import logo from '../../../assets/icons/logo.svg';
import { useDispatch } from 'react-redux';
import { deleteToken } from '../../../features/slices/tokenSlice';
import removeUser from '../../../assets/icons/remove-user.svg'

const Header = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(deleteToken());
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="EduTrek Logo" className="logo" />
      </div>
      <Search />
      <button className="signout-button" onClick={handleSignOut}>
        <img src={removeUser} alt="Remove User Icon" className="remove-user-icon" /> Sign out
      </button>    </header>
  );
}

export default Header