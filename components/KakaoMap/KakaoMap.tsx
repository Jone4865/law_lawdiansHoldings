import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export const KakaoMap = () => {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(37.4900245272, 126.99288769),
      level: 2,
    };

    let map = new window.kakao.maps.Map(container, options);

    var markerPosition = new window.kakao.maps.LatLng(37.49007, 126.9928874);

    var content = `<div class="marker_image">
    </div>`;

    var customOverlay = new window.kakao.maps.CustomOverlay({
      position: markerPosition,
      content: content,
    });

    customOverlay.setMap(map);
  }, []);

  return <div id="map" style={{ width: "100%", height: "100%" }} />;
};
