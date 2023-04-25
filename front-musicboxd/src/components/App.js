import React,{useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from './homeView.js'
import UserView from './userView.js'
import connexionView from './connexionView.js'


import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='*' element={<h1>404: page not found </h1>}></Route>
          <Route path='/' exact element={<HomeView/>}></Route>
          <Route path='/user' exact element={<UserView/>}></Route>
          <Route path='/connect' exact element={<connexionView/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
