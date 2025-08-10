import { useState } from "react";

export default function Exercise1() {
  const [images, setImages] = useState([
    "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
  ]);
  const [currentImg, setCurrentImg] = useState(0);
  const shiftImageBack = () => {
    setCurrentImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const shiftImageForward = () => {
    setCurrentImg((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="row">
      <button className="back" onClick={shiftImageBack}>
        Back
      </button>

      <img
        src={images[currentImg]}
        alt="Gallery"
        style={{ maxWidth: "300px", display: "block", margin: "20px auto" }}
      />

      <button className="forward" onClick={shiftImageForward}>
        Forward
      </button>
    </div>
  );
}
