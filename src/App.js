import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/HomePage/Home';
import Packages from './Components/Packges/Packages';
import Earning from './Components/Earning/Earning';
import Dashboard from './Components/Dashboard';
import SWTC from './Components/SWTC/SWTC';


function App() {

  let [isToggle, setIsToogel]=useState(true)
  return (
    <div className="">
      <BrowserRouter>
        <ToastContainer />
        <Header isToggle={isToggle} setIsToogel={setIsToogel} />
        <Routes>
          <Route exact path="/" element={<Dashboard isToggle={isToggle} setIsToogel={setIsToogel} />}></Route>
          {/* <Route exact path="/SWTC" element={<SWTC isToggle={isToggle} setIsToogel={setIsToogel} />}></Route> */}
          {/*<Route exact path="/Leader" component={Leaderboard}></Route>
  <Route exact path="/Reward" component={Reward}></Route>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
