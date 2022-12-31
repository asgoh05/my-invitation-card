import React from "react";
import style from "./MapPage.module.css";

export default function MapPage() {
  return (
    <div className={style.container}>
      <h1 data-aos="fade-up" ata-aos-duration="3000">
        오시는 길
      </h1>
      <embed
        className={style.map}
        data-aos="fade-up"
        ata-aos-duration="3000"
        src={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.29922445904!2d127.08977855068387!3d37.382755342290835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b585c9382c72b%3A0xcb2a2b6905978d03!2z7ZWY64iE7IaM642U7Z6Q!5e0!3m2!1sko!2skr!4v1672471415955!5m2!1sko!2skr"
        }
      ></embed>
      <p className={style.address} data-aos="fade-up" ata-aos-duration="3000">
        경기 성남시 분당구 판교백현로 65 <br />
        (우)13539 지번백현동 500-9
      </p>
    </div>
  );
}