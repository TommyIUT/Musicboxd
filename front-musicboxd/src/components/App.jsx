import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from './homeView.jsx'
import UserView from './userView.jsx'
import ConnexionView from './connexionView.jsx'
import InscriptionView from'./inscriptionView.jsx'
import SearchView from './searchView.jsx';
import EditView from './editView.jsx';
import AlbumView from './albumview';
import {useState} from "react";


function App() {

  const [user, setUser] = useState('')
  const [isConnected, setIsConnected] = useState(false)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='*' element={<h1>404: page not found </h1>}></Route>
          <Route path='/' exact element={<HomeView user={user} setUser={setUser} isConnected={isConnected} setIsConnected={setIsConnected}/>}></Route>
          <Route path='/user' exact element={<UserView user={user} setUser={setUser} isConnected={isConnected} setIsConnected={setIsConnected}/>}></Route>
          <Route path='/login' exact element={<ConnexionView user={user} setUser={setUser} isConnected={isConnected} setIsConnected={setIsConnected}/>}></Route>
          <Route path='/register' exact element={<InscriptionView user={user} setUser={setUser} isConnected={isConnected} setIsConnected={setIsConnected}/>}></Route>
          <Route path='/search' exact element={<SearchView user={user} setUser={setUser} isConnected={isConnected} setIsConnected={setIsConnected}/>}></Route>
          <Route path='/artist/:id' exact element={<EditView user={user} setUser={setUser} isConnected={isConnected} setIsConnected={setIsConnected}/>}></Route>
          <Route path='/album/:id' exact element={<AlbumView user={user} setUser={setUser} isConnected={isConnected} setIsConnected={setIsConnected}/>}></Route>
          <Route path='/edit' exact element={<EditView user={user} setUser={setUser} isConnected={isConnected} setIsConnected={setIsConnected}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
