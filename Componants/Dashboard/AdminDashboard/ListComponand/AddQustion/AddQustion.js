import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./AddQustion.css"
import Button from "../../../../../FemilerCom/Button/Button"

const AddQustion = () => {
  const [inputFields, setInputFields] = useState(() => {
    // Load input fields from local storage on component mount
    const storedInputFields = JSON.parse(localStorage.getItem('inputFields')) || [{ 
      leftQustion: '',
      rightQustion: '',
      leftvalue: '',
      rightvalue: ''
    }];
    return storedInputFields;
  });

  useEffect(() => {
    // Save input fields to local storage whenever they change
    localStorage.setItem('inputFields', JSON.stringify(inputFields));
  }, [inputFields]);

  const handleAddField = () => {
    setInputFields([...inputFields, { leftQustion: '', rightQustion: '',leftvalue: '',rightvalue: '' }]);
  };

  const handleChange = (index, field, event) => {
    const newInputFields = [...inputFields];
    newInputFields[index][field] = event.target.value;
    setInputFields(newInputFields);
  };

  const handleRemoveField = (index) => {
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
  };

  const handleSubmit = async () => {
    try {
      // Assuming you have an endpoint to receive the input values on the server
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { inputFields });
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error sending data to the server:', error);
    }
  };

  return (
    <div>
      <div className='AddQustion'>
        {inputFields.map((inputField, index) => (
          <div className="Qustion-1" key={index}>
          <h1>Qustion-{index + 1}</h1>
          <hr />
          <label>Left Qustion</label>
            <div className='Flex'>
              <input
              type="text"
              value={inputField.leftQustion}
              onChange={(event) => handleChange(index, 'leftQustion', event)} />
            <label id='Value'>value</label>
              <input 
                value={inputField.leftvalue}
                onChange={(event) => handleChange(index, 'leftvalue', event)}
              id='InputValue' />
            </div>
          <label>Right Qustion</label>
          <div className='Flex'>
            <input
              type="text"
              value={inputField.rightQustion}
              onChange={(event) => handleChange(index, 'rightQustion', event)} />
              <label id='Value'>value</label>
            <input 
            value={inputField.rightvalue}
            onChange={(event) => handleChange(index, 'rightvalue', event)}
            id='InputValue' />
          </div>
          <br />
          <div className='DeletBtn' onClick={() => handleRemoveField(index)}>
            <Button Text="Delete" />
          </div>
        </div>
        ))}
        <div className='AddBtn' onClick={handleAddField}>
          <Button Text="Add Qustion" />
        </div>
        <div className='SendBtn' onClick={handleSubmit}>
          <Button Text="Send" />
        </div>
      </div>
    </div>
  );
};

export default AddQustion;
