// frontend/src/components/ImageGallery.jsx
import React, { useState, useEffect } from 'react'; // Added useEffect

const ImageGallery = ({ images }) => {
  // console.log('Images in ImageGallery:', images); // <<< DEBUG LINE

  const [mainImage, setMainImage] = useState(
    images && images.length > 0 ? images[0] : 'https://via.placeholder.com/500x500.png?text=No+Product+Image'
  );

  // Update mainImage if the images prop changes (e.g., when navigating between products)
  useEffect(() => {
    if (images && images.length > 0) {
      setMainImage(images[0]);
    } else {
      setMainImage('https://via.placeholder.com/500x500.png?text=No+Product+Image');
    }
  }, [images]);


  if (!images || images.length === 0) {
    return <img src={mainImage} alt="Product" className="main-image" />;
  }

  return (
    <div className="image-gallery">
      <img src={mainImage} alt="Selected product view" className="main-image" />
      {images.length > 1 && (
        <div className="thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setMainImage(image)}
              className={mainImage === image ? 'active' : ''}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;