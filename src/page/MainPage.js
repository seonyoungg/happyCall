import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

const MainPage = () => {
  const [bannerLists, setBannerLists] = useState([]);

  const getBannerData = async () => {
      const response = await fetch("https://my-json-server.typicode.com/seonyoungg/happyCall/banners");
      const data = await response.json();
      console.log(data);  // Inspect the response structure
      setBannerLists(data);  // Set data directly if it's an array
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
      {bannerLists.length > 0 && (
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
