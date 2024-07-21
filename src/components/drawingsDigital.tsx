import { useState } from "react";
import "../pages/drawings.css"

const image1 = "src/assets/drawings-images/iu.jpg";
const image2 = "src/assets/drawings-images/Yoojung_Drawing.png";
const image3 = "src/assets/drawings-images/Hooyeon.png";


const images = [image1, image2, image3];


const GalleryDig = () => {
  return (
    
    <div style={{display:'flex', justifyContent:'center', alignContent:'center', flexDirection:'column', 
    rowGap:'80px', boxShadow: '10px 15px 20px #0951ff', paddingBottom:'100px'}}>
      <p className="TextTitle">
        drawings:
      </p>
      <p className="SubHeading1"> 
        digital:
      </p>
      <div style={{marginLeft:'5%'}}>
        <ImageGallery />
      </div>
    </div>
  );
}

export default GalleryDig


function ImageGallery() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  
  const imageCards = images.map((image) => (
    <img className="image-card1" onClick={() => showImage(image)} src={image} />
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