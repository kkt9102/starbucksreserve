import { useState, useEffect, useRef } from "react";

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
    } else {
      setUserLat(37.2098908);
      setUserLng(127.0921193);
    }

    const mapContainer = document.getElementById('map'),
      mapOption = {
        center: new window.kakao.maps.LatLng(userLat, userLng),
        level: 3,
      };

    const map = new window.kakao.maps.Map(mapContainer, mapOption);

    setMap(map);

  }, [container, userLat, userLng]);

  return(
    <>
      <div id="map" ref={container} style={{ width: '100%', height: '40rem' }}></div>
    </>
  )
}

export default Map;