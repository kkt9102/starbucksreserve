/* global kakao */
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
        content: MapMark.content,
        clickable: true // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
      });

      // new kakao.maps.InfoWindow({
      //   map: map,
      //   content :  MapMark.content,
      // })
  });

  var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
  iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

  // 인포윈도우를 생성합니다
  var infowindow = new kakao.maps.InfoWindow({
      content : iwContent,
      removable : iwRemoveable
  });

  // 마커에 클릭이벤트를 등록합니다
  // kakao.maps.event.addListener(ReserveMarker, 'click', function() {
        // 마커 위에 인포윈도우를 표시합니다
        // infowindow.open(map, ReserveMarker);  
  // });

  // MapMark.forEach((reserve) => {
  //   const Content = MapMark.content;

  //   new kakao.maps.InfoWindow(
  //   )
  // })
}, 
[])


    return (
        <div>
        	<div id="map" style={{width:"100%", height:"720px"}}></div> 
        </div>
    )
}

    export default KaKaoMap;