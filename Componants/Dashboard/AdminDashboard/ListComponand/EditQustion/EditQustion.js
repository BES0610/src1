import React, { useEffect, useState } from 'react';
import './EditQustion.css';
import Button from '../../../../../FemilerCom/Button/Button';
// import { initialQuestionValues } from './initialValues'; // Import initial values
import QuestionSet from "./QustionRepet"

function EditQustion() {

    const [qustionValues, setqustionValues] = useState(() => {
    const savedValuesInLocal =
        JSON.parse(localStorage.getItem('qustionValues')) ;
    return savedValuesInLocal;
});

    useEffect(() => {
    localStorage.setItem('qustionValues', JSON.stringify(qustionValues));
    }, [qustionValues]);

    const handleOnChange = (setNumber, field, event) => {
    const newValue = {
        ...qustionValues[setNumber],
        [field]: event.target.value,
    };
    setqustionValues((prevValues) => ({ ...prevValues, [setNumber]: newValue }));
    };

const [inputValue, setInputValue] = useState('');

  // Event handler for input change
const handleInputChange = (event) => {
    setInputValue(event.target.value);
};

const handleGenerateSets = () => {
    const numberOfSets = parseInt(inputValue, 10);
    const newQuestionValues = {};
    for (let i = 1; i <= numberOfSets; i++) {
        newQuestionValues[i] = {
        leftQustion: '',
        leftQustionValue: '',
        rightQustion: '',
        rightQustionvalue: '',
    };
    }
    setqustionValues(newQuestionValues);
};

const handleSave = () => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ qustionValues }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
};
const handleClear = () => {
    setqustionValues({});
};

    return (
    <>
    <div className="EditQustion">
        <label>Enter How Many Qustion</label>
        <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        />
        <div className='GenerateBtn' onClick={handleGenerateSets}><Button Text="Generate Qustion" /></div>
        {Object.keys(qustionValues).map((setNumber) => (
        <QuestionSet
            key={setNumber}
            setNumber={setNumber}
            qustionValue={qustionValues[setNumber]}
            handleOnChange={handleOnChange}
        />
        ))}
                <div className='Flex'>
                    <div className='SaveBtn' onClick={handleSave}>
                    <Button Text="Save" />
                </div>
                <div className='ClearBtn' onClick={handleClear}>
                    <Button Text="Clear" />
                </div>
            </div>
    </div>
    </>
    );
}

export default EditQustion;
