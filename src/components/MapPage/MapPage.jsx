import React from "react";
import style from "./MapPage.module.css";
import { useInjectKakaoMapApi, Map, MapMarker } from "react-kakao-maps-sdk";

export default function MapPage() {
  useInjectKakaoMapApi({
    appkey: process.env.REACT_APP_KAKAO_KEY,
  });

  const position = {
    lat: 37.3828803,
    lng: 127.091781,
  };

  return (
    <div className={style.container}>
      <h1 data-aos="fade-up" ata-aos-duration="3000">
        오시는 길
      </h1>
      <Map
        data-aos="fade-up"
        ata-aos-duration="3000"
        center={position}
        style={{
          // 지도의 크기
          width: "90%",
          height: "40vh",
        }}
        level={3} // 지도의 확대 레벨
      >
        <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
          position={position}
        >
          <div className={style.tag}>
            <div className={style.tag_location}>하누소더힐</div>
            <div className={style.tag_link}>
              <a href="http://kko.to/DFGRyB3kyv">열기</a>
            </div>
          </div>
        </MapMarker>
      </Map>
      <p className={style.address} data-aos="fade-up" ata-aos-duration="3000">
        경기 성남시 분당구 판교백현로 65 <br />
        (우)13539 지번백현동 500-9
      </p>
    </div>
  );
}
