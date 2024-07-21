import React from 'react';
import './App.css';
import './assets/styles/styles.css';
import Guest from './components/Guest';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import { useAppSelector } from './app/hooks';

function App() {
  const token = useAppSelector(state => state.token)
  return (
    <Routes>
      <Route path='/' element={ token ? <Navigate to={'/home'} /> : <Guest /> }/>
      <Route path='/home' element={ token ? <Home /> : <Navigate to={'/'} />} />
    </Routes>
  );
}

export default App;
