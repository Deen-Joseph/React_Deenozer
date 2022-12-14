import React from "react";
import Cards from "../common/Cards/Cards";
import'./Home.css'

const Home = () => {
  return (
    <div className="row-home">
      <Cards  imageUrl={'https://c4.wallpaperflare.com/wallpaper/732/554/408/superman-4k-images-for-desktop-background-wallpaper-preview.jpg'} title="Superman" />
      <Cards  imageUrl={'https://c4.wallpaperflare.com/wallpaper/732/554/408/superman-4k-images-for-desktop-background-wallpaper-preview.jpg'} title="Superman" />
      <Cards  imageUrl={'https://c4.wallpaperflare.com/wallpaper/732/554/408/superman-4k-images-for-desktop-background-wallpaper-preview.jpg'} title="Superman" />
      <Cards  imageUrl={'https://c4.wallpaperflare.com/wallpaper/732/554/408/superman-4k-images-for-desktop-background-wallpaper-preview.jpg'} title="Superman" />
      <Cards  imageUrl={'https://c4.wallpaperflare.com/wallpaper/732/554/408/superman-4k-images-for-desktop-background-wallpaper-preview.jpg'} title="Superman" />
    </div>
  );
};

export default Home;
