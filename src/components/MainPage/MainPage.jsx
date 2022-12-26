import React from "react";
import style from "./MainPage.module.css";
import mainImage from "../../images/oww_main_image.png";
import { BiMap } from "react-icons/bi";

export default function MainPage() {
  return (
    <div className={style.main_page}>
      <h1 className={style.header}>
        <span className={style.name_highlight}>원우</span>의 <br />
        돌잔치에 초대합니다
      </h1>
      <div className={style.image_frame}>
        <img
          className={style.main_image}
          src={mainImage}
          alt="file not found"
        />
      </div>
      <div className={style.info}>
        <h2 className={style.datetime}>2023.02.26 일요일 오후 12:00</h2>
        <h1 className={style.location}>하누소더힐</h1>
        <button className={style.mapbutton} onClick={openMap}>
          지도 열기
          <BiMap className={style.icon} />
        </button>
      </div>
    </div>
  );
}

function openMap() {
  window.open("https://naver.me/5HSEtAfp", "_blank");
}
