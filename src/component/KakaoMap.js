import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KakaoMap = ({ lat, lng }) => {
  return (
    <div>
      <Map 
        center={{ lat, lng }} 
        style={{ width: "100%", height: "350px" }}
        level={3}>

        <MapMarker position={{ lat, lng }}>
          {/* <div style={{ padding: "5px", color: "#000" }}>여기에 위치!</div> */}
        </MapMarker>
      </Map>
    </div>
  );
}

export default KakaoMap;