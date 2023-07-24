import React from "react";

const ImageGallery = ({eachCollege_Data}) => {
    const {gallery_image} = eachCollege_Data;
  return (
    <div>
            <img src={gallery_image} alt="graduation perty" />
    </div>
  );
};

export default ImageGallery;
