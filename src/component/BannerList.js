import React from 'react'
import Slider from 'react-slick'; 

const BannerList = ({item}) => {

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
            <img src={item?.img} alt=""/>
            <div class="text-wrap">
              <div class="text-tit">{item?.title}</div>
              <div class="text-subtit">{item?.subtitle}</div>
            </div>
        </div>
      </Slider>
    </div>
  )
}

export default BannerList
