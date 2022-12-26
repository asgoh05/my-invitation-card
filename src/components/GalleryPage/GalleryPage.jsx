import React from "react";
import style from "./GalleryPage.module.css";

export default function GalleryPage() {
  return (
    <div className={style.gallery_page}>
      <h1 className={style.title}>갤러리</h1>
      <div className={style.image_frame}></div>
    </div>
  );
}
