import React from "react";
import MainPage from "../MainPage/MainPage";
import GalleryPage from "../GalleryPage/GalleryPage";
import MessagePage from "../MessagePage/MessagePage";
import MapPage from "../MapPage/MapPage";

export default function InvitationCard({ images }) {
  return (
    <>
      <MainPage />
      <GalleryPage images={images} />
      <MessagePage />
      <MapPage />
    </>
  );
}
