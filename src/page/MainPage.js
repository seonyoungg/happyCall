import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import BannerList from '../component/BannerList';
import Mainlogo from '../component/Mainlogo';
import MainProduct from '../component/MainProduct';
import MainSns from '../component/MainSns';

const MainPage = () => {
  
  const [bannerLists, setBannerLists] = useState([]);

  const getBannerData = async () => {
      const response = await fetch("https://my-json-server.typicode.com/seonyoungg/happyCall/banners");
      const data = await response.json();
      setBannerLists(data);  
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
    <div className="mainpage">
      <div className="banner-wrap"> 
        {bannerLists.length > 0 && (
          <Slider {...settings}>
            {bannerLists.map((item) => (
              <BannerList key={item.id} item={item}/>
            ))}
          </Slider>
        )}
      </div>
      <Mainlogo/>
      <MainProduct/>
      <MainSns/>
    </div>
  );
};

export default MainPage;
