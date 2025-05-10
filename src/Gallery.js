import React from 'react';
import './Gallery.css'
import Img1 from './img/img1.jpg';
import Img2 from './img/img2.jpg';
import Img3 from './img/img3.jpg';
import Img4 from './img/img4.jpg';
import Img5 from './img/img5.jpg';
import Img6 from './img/img6.jpg';
import Img7 from './img/img7.jpg';

const Gallery = () => {
  const data = [
    { id: 1, imgSrc: Img1 },
    { id: 2, imgSrc: Img2 },
    { id: 3, imgSrc: Img3 },
    { id: 4, imgSrc: Img4 },
    { id: 5, imgSrc: Img5 },
    { id: 6, imgSrc: Img6 },
    { id: 7, imgSrc: Img7 },
  ];

  return (
    <div className="gallery">
      {data.map((item, index) => (
        <div className="pics" key={index}>
          <img src={item.imgSrc} alt={`img-${index}`} style={{ width: '100%' }} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
