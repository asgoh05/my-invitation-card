import React from "react";
import style from "./GalleryPage.module.css";

export default function GalleryPage() {
  return (
    <div className={style.gallery_page}>
      <h1 className={style.title} data-aos="fade-up" ata-aos-duration="3000">
        원우 사진전
      </h1>
      <div
        className={style.image_frame}
        data-aos="fade-up"
        ata-aos-duration="3000"
      ></div>
    </div>
  );
}
