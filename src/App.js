import React from 'react';
import './App.css';
import Home from './components/Home';
import MainContent from './components/MainContent';
import Misc from './components/Misc';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="app">
         <SideBar/>
         <MainContent headerName={"Home"} CustomComponent={Home}/>
         <Misc />
    </div>
  );
}

export default App;
