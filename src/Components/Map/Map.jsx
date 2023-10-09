import React, { useState, useEffect, useRef } from "react";
import { StoreList } from './StoreMarker';
import MarkerImg from '../../Assets/Images/map_mark.png';

const Map = () => {
  const container = useRef(null);
  const [map, setMap] = useState(null);
  const [userLat, setUserLat] = useState(Number);
  const [userLng, setUserLng] = useState(Number);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setUserLat(position.coords.latitude);
        setUserLng(position.coords.longitude);
      });
    }

    const mapContainer = container.current;
    const mapOption = {
      center: new window.kakao.maps.LatLng(userLat, userLng),
      level: 6,
    };

    const map = new window.kakao.maps.Map(mapContainer, mapOption);

    const imageSrc = MarkerImg;
    const imageSize = new window.kakao.maps.Size(27, 46);
    const reserveMaker = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

    // for (let i = 0; i < StoreList.length; i++) {
    //   let marker = new window.kakao.maps.Marker({
    //     map: map,
    //     position: new window.kakao.maps.LatLng(StoreList[i].lat, StoreList[i].lng),
    //     image: reserveMaker,
    //   });
    //   const closePop = () => {
    //     // infowindow.setMap(null)
    //     infowindow.close()
    //   }
    //   const infowindow = new window.kakao.maps.CustomOverlay({
    //     content: `<div class="store_popup flex flex_jc_sb flex_wrap_wrap">
    //                 <div class="popclose_btn" onclick="closePop()">닫기</div>
    //                 <div class="left_item">
    //                   <div class="store_name">${StoreList[i].place_name}</div>
    //                   <div class="store_location">${StoreList[i].place_address}</div>
    //                   <div class="store_info">
    //                     <div class="icon_box">
    //                       <div>매장 시설정보안내영역</div>
    //                     </div>
    //                   </div>
    //                   <div class="store_img img_box">
    //                     <div class="img_box">
    //                       <img src="" alt="해당 리저브매장 전경사진">
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div class="right_item">
    //                   <div class="store_time_title">운영시간</div>
    //                   <div class="mon">월 : ${StoreList[i].mon}</div>
    //                   <div class="tou">화 : ${StoreList[i].tou}</div>
    //                   <div class="wen">수 : ${StoreList[i].wen}</div>
    //                   <div class="thu">목 : ${StoreList[i].thu}</div>
    //                   <div class="fei">금 : ${StoreList[i].fei}</div>
    //                   <div class="ser">토 : ${StoreList[i].ser}</div>
    //                   <div class="sun">일 : ${StoreList[i].sun}</div>
    //                 </div>
    //               </div>`,
    //     position: new window.kakao.maps.LatLng(StoreList[i].lat, StoreList[i].lng),
    //     clickable : true,
    //     zIndex: 1,
    //   });        
      
    //   window.kakao.maps.event.addListener(marker, 'click', function () {
    //     infowindow.setMap(map);
    //   });
    // }
    for(let i=0; i < StoreList.length; i++){
      const data = StoreList[i];
      displayMarker(data);
  }
  
  // 지도에 마커를 표시하는 함수입니다    
  function displayMarker(data) { 
      const marker = new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(data.lat, data.lng),
          image: reserveMaker,
      });
      const overlay = new window.kakao.maps.CustomOverlay({
        xAnchor: 0.5,
        yAnchor: 1.3,
          position: new window.kakao.maps.LatLng(data.lat, data.lng)
      });
      
      const content = document.createElement('div');
      // content.innerHTML = `<div class="store_popup flex flex_jc_sb flex_wrap_wrap">${data.place_name}</div>`;
      content.innerHTML = `
      <div class="store_popup flex flex_jc_sb flex_wrap_wrap">
        <div class="left_item">
          <div class="store_name">${data.place_name}</div>
          <div class="store_location">${data.place_address}</div>
          <div class="store_info">
            <div class="icon_box">
              <div>매장 시설정보안내영역</div>
            </div>
          </div>
          <div class="store_img img_box">
            <div class="img_box">
              <img src="" alt="해당 리저브매장 전경사진">
            </div>
          </div>
        </div>
        <div class="right_item">
          <div class="store_time_title">운영시간</div>
          <div class="mon">월 : ${data.mon}</div>
          <div class="tou">화 : ${data.tou}</div>
          <div class="wen">수 : ${data.wen}</div>
          <div class="thu">목 : ${data.thu}</div>
          <div class="fei">금 : ${data.fei}</div>
          <div class="ser">토 : ${data.ser}</div>
          <div class="sun">일 : ${data.sun}</div>
        </div>
      </div>
      `
      content.style.cssText = 'background: white; border: 1px solid black';
      
      const closeBtn = document.createElement('div');
      closeBtn.innerHTML = '<div class="close_btn absolute"><div></div><div></div></div>';
      closeBtn.onclick = function () {
          overlay.setMap(null);
      };
      content.appendChild(closeBtn);
      overlay.setContent(content);
  
      window.kakao.maps.event.addListener(marker, 'click', function() {
          overlay.setMap(map);
      });
  }

    setMap(map);
  }, [container, userLat, userLng]);

  return (
    <div id="map" ref={container} style={{ width: '100%' }}></div>
  );
}

export default Map;
