import React from 'react';
import './App.css';
import './assets/styles/styles.css';
import Guest from './components/Guest';
import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';
import Active from './components/Active';
import MainContent from './layouts/MainContent';
import { BrowserRouter } from 'react-router-dom';

function App() {
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
