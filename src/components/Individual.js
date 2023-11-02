import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Button';

const Individual = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    middleName: '',
    lastName: '',
    relationship: 'Son of',
    gName:'',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFormSubmit = () => {
    // Send the formData to your backend API for database insertion.
    fetch('http://localhost:5041/api/Values', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // You can process the response data here if needed.
      })
      .then(() => {
        // Reset the form fields or show a success message.
        setFormData({
          title: 'Mr.',
          firstName: '',
          middleName: '',
          lastName: '',
          relationship: 'Son of', // Reset to default
          gName: '',
        });
        alert('Data submitted successfully.');
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
      });
  };

   return (
 
      <div>
    <div className='mainblock'>
      <div className='div1'>
        <div className='div1_left'>
         
      <Form.Group controlId="title">
        <Form.Label>Title:</Form.Label>
        <Form.Control as="select" onChange={handleInputChange} value={formData.title}>
          <option>Mr.</option>
          <option>Ms.</option>
          <option>Mrs.</option>
          <option>Others</option>
        </Form.Control>
      </Form.Group>
      </div>
      <Row  >
      <div className='div2'>
      <Form.Group as={Col} controlId="firstName">
        <Form.Label>First Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          onChange={handleInputChange}
          value={formData.firstName}
        />
      </Form.Group>
      <Form.Group as={Col} controlId="middleName">
        <Form.Label>Middle Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Middle Name"
          onChange={handleInputChange}
          value={formData.middleName}
        />
      </Form.Group>
      <Form.Group as={Col} controlId="lastName">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          onChange={handleInputChange}
          value={formData.lastName} />
      </Form.Group>
          </div>
          </Row>
            <Form.Group controlId="relationship">
            
        <Form.Label>relationship:</Form.Label>
        <div>
          <Form.Check
            type="radio"
            label="Son of"
            id="relationship"
            value="Son of"
            checked={formData.relationship === "Son of"}
            onChange={handleInputChange}
            inline
          />
          <Form.Check
            type="radio"
            label="Daughter of"
            id="relationship"
            value="Daughter of"
            checked={formData.relationship === "Daughter of"}
            onChange={handleInputChange}
            inline
          />
          <Form.Check
            type="radio"
            label="Wife of"
            id="relationship"
            value="Wife of"
            checked={formData.relationship === "Wife of"}
            onChange={handleInputChange}
            inline
          />
        </div>
        <Form.Group controlId="GName">
        <Form.Label>Father's/Husband's Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Father's/Husband's Name"
          onChange={handleInputChange}
          value={formData.GName}
        />
      </Form.Group>
      </Form.Group>
      <br/>
      <Button variant="primary" onClick={handleFormSubmit}>
        Submit
      </Button>
    <br/>
    </div>
    </div>
      </div>
  );
}

export default Individual;