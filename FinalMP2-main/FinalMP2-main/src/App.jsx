import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import LLayout from "./LandingPage/LandingLayout/LLayout";
import Dashboard from "./MainPage/MainComponent/Dashboard";
import MainPage from "./MainPage/MainComponent/Mainpage";
import Pvp from "./MainPage/MainComponent/Pvp";
import MLayOut from "./MainPage/MainLayout/MLayOut";


function App() {


  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<LLayout />} />
          <Route path="/m-layout" element={<MLayOut />} />
          <Route path="/page" element={<MainPage />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/pvp" element={<Pvp/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
