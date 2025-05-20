
import React from 'react';
import './App.css';
import SideBar from './components/sideBar/SideBar';
import HomeMenu from './components/homeMenu/HomeMenu';
import SearchBar from './components/search/search';
function App() {
  return (
    <div className='flex justify-center'>
      <div className='mx-15'>
        <SideBar />
      </div>
      <div className='vertical-divider'></div>
      <HomeMenu />
      <div className='vertical-divider'></div>
    </div>
  );
}

export default App;
