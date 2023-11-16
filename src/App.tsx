import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id='main-container' className='default_bg'>
      <div id='header' className='flex'>
        <div id="for-menu" className='default_bg'>
          <p>Menu</p>
        </div>
        <div id='header_title' className='header'>
          <p>Header</p>
        </div>
      </div>
      <div id='body'>
        <div id='menu-container'>
          { /* menu items will be placed here (for-loop)*/}
          <h1>Menu!</h1>
        </div>
        <div id='content'>
          { /* content will be placed here, but it will be selected by selected menu item */ }
        </div>
      </div>
    </div>
  );
}

export default App;
