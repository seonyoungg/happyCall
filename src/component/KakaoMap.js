import React, { useEffect } from 'react';

const KakaoMap = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&autoload=false";
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도 중심 좌표
          level: 3, // 지도 확대 레벨
        };
        new window.kakao.maps.Map(container, options);
      });
    };

    document.body.appendChild(script);
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }} />;
};

export default KakaoMap;
