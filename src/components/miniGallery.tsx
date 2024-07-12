import {motion} from 'framer-motion';
import { useState } from 'react';
import image1 from '../assets/miniGallery/image1.jpg';
import image2 from '../assets/miniGallery/image2.png';
import image3 from '../assets/miniGallery/image3.png';
import image4 from '../assets/miniGallery/image4.jpg';
import image5 from '../assets/miniGallery/image5.jpeg';
import left from '../assets/miniGallery/left-arrow.svg';
import right from '../assets/miniGallery/right-arrow.svg';

const MiniGallery = () => {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4])
    
    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
          const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5);
          return updatedIndexes;
        });
      };

    const handleBack = () => {
        setPositionIndexes((prevIndexes) => {
          const updatedIndexes = prevIndexes.map(
            (prevIndex) => (prevIndex + 4) % 5
          );
    
          return updatedIndexes;
        });
      };
    
    const images = [image1, image2, image3, image4, image5];

    const positions = ["center", "left1", "left", "right", "right1"];

    const imageVariants = {
        center: { x: "0%", scale: 1, zIndex: 5 },
        left1: { x: "-40%", scale: 0.7, zIndex: 3 },
        left: { x: "-70%", scale: 0.5, zIndex: 2 },
        right: { x: "70%", scale: 0.5, zIndex: 1 },
        right1: { x: "40%", scale: 0.7, zIndex: 3 },
      };
      return (
        <>
        <div style={{paddingBottom:'100px', boxShadow: '10px 15px 20px #0951ff'}}>
          <div className="carousel-grid" style={{paddingBottom:'22%'}}>
            <div className="carousel">
              {images.map((image, index) => (
              <motion.img
                  key={index}
                  src={image}
                  alt={image}
                  className="rounded-[12px]"
                  initial="center"
                  animate={positions[positionIndexes[index]]}
                  variants={imageVariants}
                  transition={{ duration: 0.5 }}
                  style={{ width: "47%", position: "absolute", boxShadow: '0 0 40px 15px #0951ff', borderRadius:'20px'}}
              />
              ))}
            </div>
          </div>
          <div className="carousel-buttons">
            <button className="backB" onClick={handleBack} style={{backgroundColor:'white'}}>
                <img className="back" src ={left} style={{width:'20px'}}></img>
            </button>
            <button className="nextB" onClick={handleNext} style={{backgroundColor:'white'}}>
                <img className="next" src ={right} style={{width:'20px'}}></img>
            </button>
          </div>
          <div style={{ display:'flex', justifyContent:'center', marginTop:'100px'}}>
            <p className="SubHeading1" style={{maxWidth:'900px', marginRight:'50px', marginLeft:'50px'}}>
              a personal motto i live by: <br /> <br/>"the past is in the past. focus on what you can do in the present rather than dwelling on what can't be changed." 
            </p>
          </div>
         
        </div>
       
        </>  
    )
}

export default MiniGallery