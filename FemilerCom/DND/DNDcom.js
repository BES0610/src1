import React, { useState } from 'react';
import "./DNDcom.css"
import Button  from "../Button/Button";
const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImage(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleUpload = () => {
    // Send the image to the server (you can use fetch or any other method)
    if (image) {
      fetch('https://your-server-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: image }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Image uploaded:', data);
        })
        .catch((error) => {
          console.error('Error uploading image:', error);
        });
    }
  };

  return (
    <div>
      <div
      className='DragAndDropCon'
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {image ? (
          <img src={image} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        ) : (
          <p>Drag and drop an </p>
        )}
      </div>
      <div onClick={handleUpload} className='DNDBTN'>
        <Button Text="Upload" />
      </div>
    </div>
  );
};

export default ImageUploader;
