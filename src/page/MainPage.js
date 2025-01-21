import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import BannerList from '../component/BannerList';
import Mainlogo from '../component/Mainlogo';

const MainPage = () => {
  
  const [bannerLists, setBannerLists] = useState([]);

  const getBannerData = async () => {
      const response = await fetch("https://my-json-server.typicode.com/seonyoungg/happyCall/banners");
      const data = await response.json();
      console.log(data); // 데이터 구조 확인
      setBannerLists(data);  // 'banners' 배열을 가져와 설정
  };

  useEffect(() => {
    getBannerData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <div class="mainpage">
      <div class="banner-wrap"> 
        {bannerLists.length > 0 && (
          <Slider {...settings}>
            {bannerLists.map((item) => (
              <BannerList key={item.id} item={item}/>
            ))}
          </Slider>
        )}
      </div>
      <Mainlogo/>
    </div>
  );
};

export default MainPage;
