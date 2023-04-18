import React,{useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeView from './view/homeView/homeView.js'
//import UserView from './view/userView/userView.js'


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='*' element={<h1>404: page not found </h1>}></Route>
          <Route path='/' exact element={<HomeView/>}></Route>
          {/*<Route path='/user' exact element={<UserView/>}></Route>*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
