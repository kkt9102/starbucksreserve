/* global kakao */
import React, { useEffect } from "react";
import { CustomMarker, MapMark } from "../components/map_mark";
import ReserveMarker from '../resources/img/map_mark.png';
const Map=()=>{

  useEffect(()=>{
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 7,
      
    };
    const map = new kakao.maps.Map(container, options);

    MapMark.forEach((reserve) => {
        // 커스텀 마커
      const imageSrc = ReserveMarker,
            imageSize = new kakao.maps.Size(31,54);
      const reserveMaker = new kakao.maps.MarkerImage(imageSrc,imageSize);
        
        // 인포윈도우
      const storeContent = MapMark.content;
      
      new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(reserve.lat, reserve.lng),
        image: reserveMaker,
        content: MapMark.content
      });   
  });
}, 
[])


    return (
        <div>
        	<div id="map" style={{width:"100%", height:"720px"}}></div> 
        </div>
    )
}

    export default Map;