import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SideBar = ({sidebarOpen,toggleSide}) => {

  const navigate=useNavigate();
  const location=useLocation();

  const goToHC=()=>{
    navigate("/introduce/#location1")
  };
  const goToHC2=()=>{
    navigate("/introduce/#location2")
  };
  const goToHC3=()=>{
    navigate("/introduce/#location3")
  };
  const goToHC4=()=>{
    navigate("/introduce/#location4")
  };
  const goToHC5=()=>{
    navigate("/introduce/#location5")
  };
  const goToHC6=()=>{
    navigate("/introduce/#location6")
  };

  const goToLists = (Id) => {
    navigate("/lists", { state: { product: Id } });
  };

  const titles = [
    { id: "pan", title: "프라이팬" },
    { id: "pan2", title: "양면팬" },
    { id: "pot", title: "냄비" },
    { id: "blender", title: "블렌더" },
    { id: "oven", title: "소형가전" },
    { id: "kitchen", title: "주방소품" }
  ];
  
  useEffect(()=>{
    if(location.hash){
        const element = document.querySelector(location.hash);
        if(element){
            element.scrollIntoView({behavior:'smooth'});
        }
    }
  },
  [location]);

  const [activeMenus, setActiveMenus] = useState({
    hcIntro: false,
    productIntro: false,
    management: false,
    hcNews: false,
    service: false,
  });

  const toggleMenu = (menu) => {
    setActiveMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu], // 해당 메뉴만 토글
    }));
  };

  return (
    <div>
        <div className={`sidebg ${sidebarOpen ? "active" : ""}`} onClick={toggleSide}></div>
        <div className={`sidenav ${sidebarOpen? "active":""}`}>
        <div className="sidenav-wrap">
            <div className="sidenav-header">
            <div className="close-btn"
                onClick={toggleSide}>
                <img src="/img/close.png" alt="Close"/>
            </div>
            </div>
            <div className="sidenav-content">
            <div className="logo">
                <img src="/img/page31.png" alt="Logo" />
            </div>
            <ul className="sidenav-menu">
                <li
                className={`main-menu ${activeMenus.hcIntro ? "active" : ""}`}
                >
                <p onClick={() => toggleMenu("hcIntro")}>HC* 소개</p>
                <ul>
                    <li onClick={() => {toggleSide(); goToHC();}}>HC* 이야기</li>
                    <li onClick={() => {toggleSide(); goToHC2();}}>HC* 가치</li>
                    <li onClick={() => {toggleSide(); goToHC3();}}>보이는 아이덴티티</li>
                    <li onClick={() => {toggleSide(); goToHC4();}}>안전보건 경영방침</li>
                    <li onClick={() => {toggleSide(); goToHC5();}}>HC* 역사</li>
                    <li onClick={() => {toggleSide(); goToHC6();}}>HC* 찾아오는길</li>
                </ul>
                </li>
                <li
                className={`main-menu ${activeMenus.productIntro ? "active" : ""}`}
                >
                <p onClick={() => toggleMenu("productIntro")}>제품 소개</p>
                <ul>
                    {titles.map((item) => {
                    return <li key={item.id}
                            onClick={()=> {toggleSide(); goToLists(item.id);}}>
                            {item.title}</li>;
                    })}
                </ul>
                </li>
                <li className={`main-menu ${activeMenus.management ? "active" : ""}`}>
                <p onClick={() => toggleMenu("management")}>지속가능경영
                </p>
                <ul>
                    <li><a href="https://www.happycall.kr/default/ESG/esg01.php?topmenu=3&left=1#esg01">텀블러캠페인</a></li>
                    <li><a href="https://www.happycall.kr/default/ESG/esg01.php?topmenu=3&left=2#esg02">ESG소식</a></li>
                </ul>
                </li>
                <li className={`main-menu ${activeMenus.hcNews ? "active" : ""}`}>
                <p onClick={() => toggleMenu("hcNews")}>HC*뉴스</p>
                <ul>
                    <li><a href="https://www.happycall.kr/default/business/business_01.php?topmenu=4&left=1">보도자료</a></li>
                    <li><a href="https://www.happycall.kr/default/business/business_02.php?topmenu=4&left=2">공지사항</a></li>
                </ul>
                </li>
                <li className={`main-menu ${activeMenus.service ? "active" : ""}`}>
                <p onClick={() => toggleMenu("service")}>고객서비스</p>
                <ul>
                    <li><a href="https://www.happycall.kr/default/customer/customer_01.php?topmenu=4&left=1">자주찾는질문</a></li>
                    <li><a href="https://www.happycall.kr/default/customer/customer_02.php?topmenu=5&left=2">고객문의</a></li>
                    <li><a href="https://www.happycall.kr/default/customer/customer_03.php?topmenu=5&left=3">제품설명서</a></li>
                    <li><a href="https://www.happycall.kr/default/customer/customer_04.php?topmenu=5&left=4">A/S</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
        </div>
    </div>
  );
};

export default SideBar;
