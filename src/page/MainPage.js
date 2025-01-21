import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

const MainPage = () => {
  
  const [bannerLists, setBannerLists] = useState([]); // 초기값을 빈 배열로 설정


  const getBannerData = async () => {
    try {
      const response = await fetch("https://my-json-server.typicode.com/seonyoungg/happyCall/banners");
      const data = await response.json();
      console.log(data); // 데이터 구조 확인
      setBannerLists(data.banners || []);  // 'banners' 배열을 가져와 설정
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    getBannerData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
     {Array.isArray(bannerLists) && bannerLists.length > 0 && (
      <Slider {...settings}>
        {bannerLists.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt={item.title} />
            <div className="text-wrap">
              <div className="text-tit">{item.title}</div>
              <div className="text-subtit">{item.subtitle}</div>
            </div>
          </div>
        ))}
      </Slider>
    )}
    </div>
  );
};

export default MainPage;
