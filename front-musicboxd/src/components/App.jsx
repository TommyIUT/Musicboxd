import React,{useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from './homeView.jsx'
import UserView from './userView.jsx'
import ConnexionView from './connexionView.jsx'
import InscriptionView from'./inscriptionView.jsx'
import SearchView from './searchView.jsx';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='*' element={<h1>404: page not found </h1>}></Route>
          <Route path='/' exact element={<HomeView/>}></Route>
          <Route path='/user' exact element={<UserView/>}></Route>
          <Route path='/login' exact element={<ConnexionView/>}></Route>
          <Route path='/register' exact element={<InscriptionView/>}></Route>
          <Route path='/search' exact element={<SearchView/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
