import React from 'react';
import './App.css';
import './assets/styles/styles.css';
import Guest from './components/Guest';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import { useAppSelector } from './app/hooks';
import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';
import Active from './components/Active';
import MainContent from './layouts/MainContent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const token = useAppSelector(state => state.token)
  return (
    <BrowserRouter>
    <div className="app-container">
    <Header />
    <div className="main-content">
      <Sidebar />
      <MainContent />
    </div>
  </div>
  </BrowserRouter>
  );
}

export default App;
