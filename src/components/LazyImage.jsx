// src/components/LazyImage.jsx
import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({ src, alt, ...rest }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const imageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '0px 0px 200px 0px' } // Adjust the rootMargin to control when the image starts loading
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [src]);

  return <img ref={imageRef} src={imageSrc} alt={alt} {...rest} />;
};

export default LazyImage;
