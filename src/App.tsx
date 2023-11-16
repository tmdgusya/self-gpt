import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

interface Menu {
  name: string;
  link: string;
}

function App() {

  const menus: Menu[] = [{
    name: 'Home',
    link: '/'
  }, {
    name: "Token",
    link: '/token',
  }, {
    name: "Chatting",
    link: '/chatting',
  }]

  return (
    // default font-family is inter.
    <div id='main-container' className='flex flex-col justify-center inter w-screen h-screen'>
      <div id='wrapper' className='default_bg items-center border-b-2 border-black' style={{'height' : '80%'}}>
        {/* This component width's must be following with menu-container's width */}
        <div id='header' className='flex w-full h-1/12' style={{'height': '5.5%'}}>
          <div id="for-menu" className='flex justify-center items-center w-2/12 h-10 default-bg menu_items_ft  border-t-2 border-l-2 border-r-2  border-black'>
            <Link to={"/"}>Menu</Link>
          </div>
          <div id='header_title' className='w-10/12 text-center header header_ft'>
            {/* This SELF-GPT title will be componented */}
            <p>SELF-GPT</p>
          </div>
        </div>
        <div id='body' className='flex w-full' style={{'height': '94.5%'}}>
          <div id='menu-container' className='flex flex-col w-2/12 border-l-2 border-r-2 border-black menu_items_ft'>
            { /* menu items will be placed here (for-loop)*/}
            {menus.map((menu, _) => { 
              return <Link className='flex h-10 justify-center items-center border-t-2 border-black' to={menu.link}>{menu.name}</Link> })}
              </div>
          <div id='content' className='w-10/12'>
            { /* content will be placed here, but it will be selected by selected menu item */ }
            <p>Content</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
