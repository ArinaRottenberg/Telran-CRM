import React from 'react'
import Search from './Search'
import logo from './logo.svg';

const Home = () => {
  return (
    <div>
      <img src={logo} alt="EduTrek Logo" style={{ width: '164.539px', height: '35px' }} />
      <Search />
      <button>Sing out</button>
    </div>
  )
}

export default Home