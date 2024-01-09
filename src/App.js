import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Mainframe from './Mainframe.js';

function App() {
  return (
    <div className='dashboard'>
      <Navbar />
      <div className='main'>
        <Header />
        <Mainframe />
      </div>
    </div>
  );
}

export default App;
