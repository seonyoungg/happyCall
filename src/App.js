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
import SideBar from './component/SideBar';
import { useEffect, useState } from 'react';

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const  toggleSide = ()=>{
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  return (
    <div className="wrap">
      <SideBar sidebarOpen={sidebarOpen} toggleSide={toggleSide}/>
      <Navbar toggleSide={toggleSide}/>
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
