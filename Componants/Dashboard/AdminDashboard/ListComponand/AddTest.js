import {  useState } from "react"
import { Link } from "react-router-dom"
import "./ListCom.css"
import Button from "../../../../FemilerCom/Button/Button";
import DNDexcil from "../../../../FemilerCom/DNDexcil/DNDexcil"
function AddTest () {
    const [formData, setFormData] = useState({
        TitleTest: '',
        Discription: '',
        Price: '',
        // Add more fields as needed
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Add any additional headers as needed
        },
        body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => {
            // Handle the response from the server if needed
            console.log('Server response:', data);
        })
        .catch((error) => {
            // Handle errors here
            console.error('Error sending data to server:', error);
        });
    };
        // End Send Input Value To Server
        // Start Add Test Page

        return (
        <>
            <div className="AddTest">
                <form onSubmit={handleSubmit}>
                <h2>Title Test</h2>
                <input 
                    type="text"
                    name="TitleTest"
                    value={formData.TitleTest}
                    onChange={handleChange}
                />
                <h2>Discription Test</h2>
                <input 
                    type="text"
                    name="Discription"
                    value={formData.Discription}
                    onChange={handleChange}
                    />
                <h2>Price</h2>
                <input 
                    type="text"
                    name="Discription"
                    value={formData.Price}
                    onChange={handleChange}
                    />
                    <br/>
                    <div className="Flex">
                    <div className="DragFiles"> 
                        <DNDexcil Drag="Drag Or Choose Qustion File" />
                    </div>
                    <div className="DragFiles"> 
                        <DNDexcil  Drag="Drag Or Choose Algorithms File" />
                    </div>
                    <div className="DragFiles"> 
                        <DNDexcil Drag="Drag Or Choose Compiled Algorithms File" />
                    </div>
                    <div className="DragFiles"> 
                        <DNDexcil Drag="Drag Or Choose Cover Image" />
                    </div>
                    </div>
                <br/>
                    <div className="BtnAddTest" type="submit" >
                        <Button Text="Create Page" />
                    </div>
                </form>
                </div>
        </>
    )
}

export default AddTest 