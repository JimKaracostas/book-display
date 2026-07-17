import React from 'react';

export const Book3D = ({ title, fullCoverImage, frontCoverImage }) => {
  // Use fullCoverImage if available, fallback to frontCoverImage
  const bgImage = fullCoverImage || frontCoverImage;
  
  return (
    <div className="book-3d-container">
      <div className="book-3d">
        <div 
          className="book-face book-front" 
          style={{ 
            backgroundImage: `url(${bgImage})`
          }}
        ></div>
        <div 
          className="book-face book-back" 
          style={{ 
            backgroundImage: `url(${bgImage})`,
            backgroundColor: '#1a1a1a' // fallback if no full cover
          }}
        ></div>
        <div 
          className="book-spine" 
          style={{ 
            backgroundImage: fullCoverImage ? `url(${fullCoverImage})` : 'none',
            backgroundColor: '#1a1a1a'
          }}
        >
          {!fullCoverImage && <div className="book-spine-text">{title}</div>}
        </div>
        <div className="book-top"></div>
        <div className="book-bottom"></div>
        <div className="book-pages"></div>
      </div>
    </div>
  );
};
