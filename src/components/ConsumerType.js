import React, { useState, useEffect } from "react";
import Individual from "./Individual";
import Firm from "./Firm";
import { Card, Form } from "react-bootstrap";

function ConsumerType() {
  // State variables to store options and the selected option
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  // Fetch options from the backend when the component mounts
  useEffect(() => {
    // Call the function to fetch options from the backend
    fetchOptionsFromBackend().then((data) => {
      // Set the fetched options in the state
      setOptions(data);
    });
  }, []);

  // Function to fetch options from the backend
  const fetchOptionsFromBackend = async () => {
    // Replace with your API endpoint
    const response = await fetch('http://localhost:5041/Type');
    const data = await response.json();
    return data;
  };

  // Handle the change of the selected option
  const handleOptionChange = (e) => {
    // Update the selected option based on user input
    setSelectedOption(e.target.value);
  };

  return (
    <div className="centered-box">
      <Card className="cardstyle" style={{ width: '60rem' }}>
        <Card.Header style={{ textAlign: 'left' }}><p>Apply Online / New Connection / Request No: R171020230199</p></Card.Header>
        <Card.Body>
          <div className='cust'>
            <Form>
              <Form.Label className='consumer'>
                <img src={'information.png'} width="30" height="25" /> Consumer Information
              </Form.Label>

              <Form.Group controlId="options" className='type'>
                <br />
                <Form.Label>Consumer Type:</Form.Label>
                
                <Form.Control as="select" onChange={handleOptionChange} value={selectedOption}>
                  <option value="">Select an option</option>
                  {options.map((option) => (
                    <option key={option.c_Id} value={option.c_type}>
                      {option.c_type}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              {/* Conditionally render the Individual or Firm component based on the selected option */}
              {selectedOption === 'Individual' && <Individual />}
              {selectedOption === 'Firm' && <Firm />}
            </Form>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ConsumerType;
