import { useEffect, useState } from "react";
import "../styles/ImageSlider.css";
function ImageSlider({ productImages }) {
  const [picture, setPicture] = useState(productImages[0]);
  const handleClick = (url) => {
    setPicture(url);
  };

  return (
    <div className="main">
      <img src={picture} height="300" width="500" />
      <div className="flex_row">
        {productImages.map((url, i) => (
          <div className="thumbnail" key={i}>
            <img
              src={url}
              onClick={() => handleClick(url)}
              height="70"
              width="100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
