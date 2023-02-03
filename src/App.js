import React, { useState } from "react";
import { BrowserRouter as Router,Routes,Route, } from "react-router-dom";
import Header from "./components/Header";
import Player from "./components/Player";
import Footer from "./components/Footer";
import Middle from "./components/Middle";

import './index.css';
import './styles/clock.css';
import './styles/footer.css';
import './styles/middle.css';
import './styles/header.css';

function App() {

  const [address,setaddress]=useState(null);  
  console.log("App",address);

  return (
    <Router>
      <Routes>
        <Route path="" />
      </Routes>
    <Header address={address} setaddress={setaddress}/>
    <Player />
    <Middle address={address}/>
     <Footer address={address}/>
    </Router>
  );
}

export default App;
