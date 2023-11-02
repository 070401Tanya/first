import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Firm = () => {
  const [formData, setFormData] = useState({
    firmName: '',
    aSignatory: '',
    dSignatory: '',
    typeOrganization: '',
    gstNo: '',
    panNo: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFirmSubmit = () => {
    // Create a JSON object from the form data
    const dataToSend = {
      firmName: formData.firmName,
      aSignatory: formData.aSignatory,
      dSignatory: formData.dSignatory,
      typeOrganization: formData.typeOrganization,
      gstNo: formData.gstNo,
      panNo: formData.panNo,
    };

    // Make an API call to post the data to your database here.
    // Replace 'your-api-endpoint' with your actual API endpoint.
    fetch('http://localhost:5041/WeatherForecast', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },  
      body: JSON.stringify(dataToSend),
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
          firmName: '',
          aSignatory: '',
          dSignatory: '',
          typeOrganization: '',
          gstNo: '',
          panNo: '',
        });
        alert('Data submitted successfully.');
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
        alert('An error occurred while submitting the data.');
      });
  };

  return (
    
           <div>
     
      <Form.Group controlId="firmName">
        <Form.Label>Firm/Trust/Company/Others Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Organization Name"
          onChange={handleInputChange}
          value={formData.firmName}
        />
      </Form.Group>
      <Form.Group controlId="aSignatory">
        <Form.Label>Name of Authorized Signatory:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Authorized Signatory Name"
          onChange={handleInputChange}
          value={formData.aSignatory}
        />
      </Form.Group>
      <Form.Group controlId="dSignatory">
        <Form.Label>Designation of Signatory:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Signatory Designation"
          onChange={handleInputChange}
          value={formData.dSignatory}
        />
      </Form.Group>
      <Form.Group controlId="typeOrganization">
        <Form.Label>Type of Organization:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Organization Type"
          onChange={handleInputChange}
          value={formData.typeOrganization}
        />
      </Form.Group>
      <Form.Group controlId="gstNo">
        <Form.Label>GST No:</Form.Label>
        <Form.Control
          type="text"
          placeholder="GST No"
          onChange={handleInputChange}
          value={formData.gstNo}
        />
      </Form.Group>
      <Form.Group controlId="panNo">
        <Form.Label>PAN No:</Form.Label>
        <Form.Control
          type="text"
          placeholder="PAN No"
          onChange={handleInputChange}
          value={formData.panNo}
        />
      </Form.Group>
      <br/>
      <Button variant="primary" onClick={handleFirmSubmit}>
        Submit (Firm/Trust/Company/Others)
      </Button>
    </div>
   
  );
};

export default Firm;
