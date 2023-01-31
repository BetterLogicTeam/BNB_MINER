import React from "react";
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

  return (
    <Router>
      <Routes>
        <Route path="" />
      </Routes>
    <Header />
    <Player />
    <Middle />
     <Footer />
    </Router>
  );
}

export default App;
