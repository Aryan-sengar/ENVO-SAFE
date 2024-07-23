/*import React, { useState, useRef } from "react";
import Camera from "react-camera";

function CameraCapture({ onCapture }) {
  const [image, setImage] = useState(null);
  const cameraRef = useRef(null);

  const capture = () => {
    if (cameraRef.current) {
      const photo = cameraRef.current.takePhoto();
      setImage(photo);
      onCapture(photo);
    }
  };

  return (
    <div className="camera-container">
      <Camera ref={cameraRef} />
      <button onClick={capture}>Capture Photo</button>
      {image && <img src={image} alt="Captured" />}
    </div>
  );
}

export default CameraCapture;
*/