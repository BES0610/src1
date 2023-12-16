import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const FileUploader = (props) => {
  const onDrop = useCallback((acceptedFiles) => {
    // You can handle the dropped files here
    console.log(acceptedFiles);

    // Assuming you have a server endpoint for file upload
    const uploadEndpoint = 'https://jsonplaceholder.typicode.com/todos';

    // Create a FormData object to append the files
    const formData = new FormData();
    acceptedFiles.forEach((file) => {
      formData.append('files', file);
    });

    // Make a POST request to the server
    axios.post(uploadEndpoint, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        // Handle success
        console.log('Upload success:', response.data);
      })
      .catch((error) => {
        // Handle error
        console.error('Upload error:', error);
      });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
        <input {...getInputProps()} />
        <p>{props.Drag}</p>
      </div>
    </div>
  );
};

export default FileUploader;
