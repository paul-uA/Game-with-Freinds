import staticData from './data'
import { useState, useEffect } from 'react';
import {Route,Routes,useNavigate} from 'react-router-dom'

//components
import Homebar from './components/HomeBar';
import Top20Box from './components/top20';

import './App.css';



function App() {


  return (
    <div className="App">
      <Homebar/>

      <Top20Box/>

     
    </div>
 
  )
}

export default App