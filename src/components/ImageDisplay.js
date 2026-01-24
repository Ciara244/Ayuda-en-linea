import React from 'react';

const ImageDisplay = ({ src, alt }) => {
  if (!src) return null;

  return (
    <div className="image-container">
      <img 
        src={src} 
        alt={alt} 
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginTop: '20px' }} 
      />
    </div>
  );
};

export default ImageDisplay;