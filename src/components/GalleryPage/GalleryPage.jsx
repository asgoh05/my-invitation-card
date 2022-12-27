import React from "react";
import style from "./GalleryPage.module.css";

export default function GalleryPage() {
  return (
    <div className={style.gallery_page}>
      <h1 className={style.title}>원우 사진전</h1>
      <div className={style.image_frame}></div>
    </div>
  );
}