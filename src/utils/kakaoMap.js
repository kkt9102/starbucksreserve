/* global kakao */
import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect } from "react";
import { CustomMarker, MapMark } from "../components/map_mark";
import ReserveMarker from '../resources/img/map_mark.png';
const KaKaoMap = () => {

useEffect(()=>{
  
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
    level: 7,
    
  };
  const map = new kakao.maps.Map(container, options);
      
  const infos = [];
  MapMark.forEach((reserve) => {
  // 커스텀 마커
    const imageSrc = ReserveMarker,
    imageSize = new kakao.maps.Size(27,46);
    const reserveMaker = new kakao.maps.MarkerImage(imageSrc,imageSize);

    const custom_marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(reserve.lat, reserve.lng),
      image: reserveMaker,
    });

    // infoWindow용
    const iwContent = reserve.content

    const infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : true,
    });

    infos.push(infowindow);

    var openInfo = function() {
      infos.forEach(function(each) { each.close(); }); // close all infos
      infowindow.open(map, custom_marker); // open target info
  };

    kakao.maps.event.addListener(custom_marker, 'click', openInfo);
    
    // customOverlay용
    // const contents = reserve.content

    // const storeInfo = new kakao.maps.CustomOverlay({
    //   content : contents,
    //   mpa: map,
    //   position : custom_marker.getPosition(),
    //   removable : true
    // });
    

    // kakao.maps.event.addListener(custom_marker, 'click', function() {
    //   storeInfo.setMap(map);

    //   document.querySelector('.popclose_btn').addEventListener("click", function(){
    //     storeInfo.setMap(null);
    //   });
    // });

    
    
    // const closeOverlay = () => {
    //   storeInfo.setMap(null);
    // }

  });
  }, 
[])


return (
  <div>
    <div id="map" style={{width:"100%", height:"720px"}}></div> 
  </div>
    )
}

export default KaKaoMap;