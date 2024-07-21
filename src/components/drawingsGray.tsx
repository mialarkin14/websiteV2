import { useState } from "react";
import "../pages/drawings.css"

const image1 = "src/assets/drawings-images/beth.jpg";
const image2 = "src/assets/drawings-images/evergarden.jpg";
const image3 = "src/assets/drawings-images/hooky.jpg";
const image4 = "src/assets/drawings-images/house-of-dragon.jpg";
const image5 = "src/assets/drawings-images/me.jpg";
const image6 = "src/assets/drawings-images/meliodas.jpg";
const image7 = "src/assets/drawings-images/mountain-lion.jpg";
const image8 = "src/assets/drawings-images/music-box.jpg";
const image9 = "src/assets/drawings-images/piano.jpg";
const image10 = "src/assets/drawings-images/piglet.jpg"
const image11 = "src/assets/drawings-images/portrait.jpg";
const image12 = "src/assets/drawings-images/shoe.jpg";


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