import React from 'react';
import './App.css';
import './assets/styles/styles.css';
import Guest from './components/Guest';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      {/* <Guest /> */}
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
