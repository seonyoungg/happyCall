import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
// import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router";
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import MainPage from './page/MainPage';
import Introduce from './page/Introduce';
import ProductLists from './page/ProductLists';

function App() {
  return (
    <div className="wrap">
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/introduce" element={<Introduce/>}></Route>
        <Route path="/lists" element={<ProductLists/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
