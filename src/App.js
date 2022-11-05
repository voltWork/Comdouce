import './App.css'

import { BrowserRouter, Route } from 'react-router-dom';

import React from 'react';
//import Choosen_person from './pages/Choosen_person'
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <p className='Head'>Кто вы?</p>
        <div className='ICh'>
        <a  class="lake1" href="http://localhost:3000/Test" title="" alt='Школьники' >
          <img src={logo} className='Img' /></a>
          <a class="lake2" href="" title="" alt='Студенты' >
        <img src={logo} className='Img'  /></a>
       < a class="lake3" href="" title=""alt='люди' >
        <img src={logo} className='Img'  /></a>
        </div>
        </div>
  );
}

export default App;
