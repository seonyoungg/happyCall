import React from 'react'

const BannerList = ({item}) => {

  return (
    <div className="banner-item">
      <img src={item?.img} alt="" />
      <div className="text-wrap">
        <div className="tit">{item?.title}</div>
        <div className="subtit">{item?.subtitle}</div>
      </div>
    </div>
  )
}

export default BannerList
