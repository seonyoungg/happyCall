import React from 'react'
import Slider from 'react-slick'; 

const BannerList = () => {
  const settings = {
    dots: true,    
    infinite: true,    
    speed: 500,       
    slidesToShow: 3,    
    slidesToScroll: 1, 
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
            <img src="/img/main01.jpg" alt=""/>
            <div class="text-wrap">
              <div class="text-tit"></div>
              <div class="text-subtit"></div>
            </div>
        </div>
      </Slider>
    </div>
  )
}

export default BannerList
