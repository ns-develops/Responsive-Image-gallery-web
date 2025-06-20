import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './Gallery.css';



import Img3 from './img/img3.jpg';
import Img5 from './img/img5.jpg';
import Img7 from './img/img7.jpg';

const Gallery = () => {
  const data = [
    { id: 3, imgSrc: Img3 },
    { id: 5, imgSrc: Img5 },
    { id: 7, imgSrc: Img7 },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="enlarged-img" />
        <CloseIcon 
          className="close-icon" 
          onClick={() => setModel(false)} 
        />
      </div>

      <div className="gallery">
        {data.map((item, index) => (
          <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
            <img src={item.imgSrc} alt={`img-${index}`} style={{ width: '100%' }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
