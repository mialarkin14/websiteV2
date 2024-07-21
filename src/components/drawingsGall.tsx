import { useState } from "react";
import "../pages/drawings.css"

const image1 = "src/assets/drawings-images/beth.jpg";
const image3 = "src/assets/drawings-images/bubble.jpg";
const image4 = "src/assets/drawings-images/dragon.jpg";
const image5 = "src/assets/drawings-images/evergarden.jpg";
const image6 = "src/assets/drawings-images/hi.jpg";
const image7 = "src/assets/drawings-images/hooky.jpg";
const image8 = "src/assets/drawings-images/house-of-dragon.jpg";
const image9 = "src/assets/drawings-images/iu.jpg";
const image10 = "src/assets/drawings-images/me.jpg";
const image11 = "src/assets/drawings-images/meliodas.jpg";
const image12 = "src/assets/drawings-images/mountain-lion.jpg";
const image13 = "src/assets/drawings-images/music-box.jpg";
const image14 = "src/assets/drawings-images/piano.jpg";
const image15 = "src/assets/drawings-images/piglet.jpg"
const image16 = "src/assets/drawings-images/pip-kace.jpg";
const image17 = "src/assets/drawings-images/portrait.jpg";
const image18 = "src/assets/drawings-images/shoe.jpg";
const image19 = "src/assets/drawings-images/sky.jpg";
const image20 = "src/assets/drawings-images/tear.jpg";
const image21 = "src/assets/drawings-images/toad.jpg";
const image22 = "src/assets/drawings-images/Yoojung_Drawing.png";
const image23 = "src/assets/drawings-images/Hooyeon.png";


const images = [image1, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14,
    image15, image16, image17, image18, image19, image20, image21, image22, image23];


function GalleryI() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignContent:'center', flexDirection:'column', 
    rowGap:'80px', boxShadow: '10px 15px 20px #0951ff', paddingBottom:'100px'}}>
      <p className="TextTitle">
        drawings:
      </p>
      <div style={{marginLeft:'5%'}}>
        <ImageGallery />
      </div>
      
    </div>
  );
}

export default GalleryI


function ImageGallery() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  
  const imageCards = images.map((image) => (
    <img className="image-card" onClick={() => showImage(image)} src={image} />
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
          <button onClick={showPrev}>⭠</button>
          <img id="lightbox-img" src={imageToShow}></img>
          <button onClick={showNext}>⭢</button>
        </div>
       : ""
      }
    </>
  );
}