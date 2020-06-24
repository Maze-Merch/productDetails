import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MainCarouselStyles.css';

const MainCarousel = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(10);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const res = await axios.get('http://52.26.193.201:3000/products/5/styles/');
      setImages(res.data);
      setLoading(false);
    };

    fetchImages();
  }, []);

    console.log(images);
  return (
    <div className='container'>
      <h1>My App</h1>
    </div>
  );
};

export default MainCarousel;
