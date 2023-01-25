import { contents } from "cheerio/lib/api/traversing";
import Image from "next/image";
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
      center: new window.kakao.maps.LatLng(
        37.49002452705099,
        126.99288760887964
      ),
      level: 2,
    };

    let map = new window.kakao.maps.Map(container, options);

    var markerPosition = new window.kakao.maps.LatLng(37.49011, 126.9928876087);

    var content = `<div class="marker_image">
    </div>`;

    var customOverlay = new window.kakao.maps.CustomOverlay({
      position: markerPosition,
      content: content,
    });

    customOverlay.setMap(map);
  }, []);
  return <div id="map" style={{ width: "500px", height: "500px" }} />;
};
