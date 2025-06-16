import React, { useState, useEffect, useRef } from 'react';
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

    if (window.kakao !== undefined) {
      const mapContainer = container.current;
      const mapOption = {
        center: new window.kakao.maps.LatLng(userLat, userLng),
        level: 6,
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      const imageSrc = MarkerImg;
      const imageSize = new window.kakao.maps.Size(27, 46);
      const reserveMaker = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

      for (let i = 0; i < StoreList.length; i++) {
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
          position: new window.kakao.maps.LatLng(data.lat, data.lng),
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
      `;
        content.style.cssText = 'background: white; border: 1px solid black';

        const closeBtn = document.createElement('div');
        closeBtn.innerHTML = '<div class="close_btn absolute"><div></div><div></div></div>';
        closeBtn.onclick = function () {
          overlay.setMap(null);
        };
        content.appendChild(closeBtn);
        overlay.setContent(content);

        window.kakao.maps.event.addListener(marker, 'click', function () {
          overlay.setMap(map);
        });
      }

      setMap(map);
    }
  }, [container, userLat, userLng]);

  return (
    <>
      <div
        id="map"
        ref={container}
        style={
          window.kakao === undefined
            ? {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                padding: '0 2rem',
                fontSize: '4rem',
                fontWeight: '700',
                color: 'var(--point-color)',
                textAlign: 'center',
              }
            : { width: '100%' }
        }
      >
        {window.kakao === undefined && '현재 카카오맵 지도를 사용하실 수 없습니다. 잠시 후 다시 시도해주세요.'}
      </div>
    </>
  );
};

export default Map;
