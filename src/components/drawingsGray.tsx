import { useState } from "react";
import "../pages/drawings.css"

import image1 from "../assets/drawings-images/beth.jpg";
import image2 from "../assets/drawings-images/evergarden.jpg";
import image3 from "../assets/drawings-images/hooky.jpg";
import image4 from "../assets/drawings-images/house-of-dragon.jpg";
import image5 from "../assets/drawings-images/me.jpg";
import image6 from "../assets/drawings-images/meliodas.jpg";
import image7 from "../assets/drawings-images/mountain-lion.jpg";
import image8 from "../assets/drawings-images/music-box.jpg";
import image9 from "../assets/drawings-images/piano.jpg";
import image10 from "../assets/drawings-images/piglet.jpg"
import image11 from "../assets/drawings-images/portrait.jpg";
import image12 from "../assets/drawings-images/shoe.jpg";


const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];


const GalleryGray = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', alignContent:'center', flexDirection:'column', 
    rowGap:'80px', boxShadow: '10px 15px 20px #09c6ff', paddingBottom:'100px', paddingTop:'100px'}}>
      <p className="SubHeading1">
        pencil:
      </p>
      <div style={{marginLeft:'5%'}}>
        <ImageGallery />
      </div>
      
    </div>
  );
}

export default GalleryGray


function ImageGallery() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  
  const imageCards = images.map((image) => (
    <img className="image-card2" onClick={() => showImage(image)} src={image} />
  ));

  const showImage = (image: any) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  const showNext = (e: any) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e: any) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };
  

  return (
    <>
      <div>{imageCards}</div>
      
      {
        lightboxDisplay ? 
        <div id="lightbox" onClick={hideLightBox}>
          <button  className="prevD" onClick={showPrev}>⭠</button>
            <img id="lightbox-img" src={imageToShow} className="imagelight"></img>
          <button className="nextD" onClick={showNext}>⭢</button>
        </div>
       : ""
      }
    </>
  );
}