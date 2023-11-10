import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';

const Firm = () => {
  const [formData, setFormData] = useState({
    firmName: '',
    aSignatory: '',
    dSignatory: '',
    typeOrganization: '',
    gstNo: '',
    panNo: '',
  });

  const [showPreview, setShowPreview] = useState(false);

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
          throw  Error('Network response was not ok');
        }
        return response.json(); // You can process the response data here if needed.
      })
      .then(() => {
        alert('Data submitted successfully.');
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
        alert('An error occurred while submitting the data.');
      });
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handleClosePreview = () => {
    setShowPreview(false);
  };

  const handleSaveChanges = () => {
    // You can add code here to save the content to your database.
    // Update the code accordingly based on your API endpoint and method.
    // For demonstration purposes, this function doesn't perform actual saving.

    alert('Content saved successfully.');
  };

  return (
    <div>
      <br/>
      <Row>
      <Form.Group as ={Col} controlId="firmName">
        <Form.Label>Firm/Trust/Company/Others Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Organization Name"
          onChange={handleInputChange}
          value={formData.firmName}
        />
      </Form.Group>

      <Form.Group as={Col} controlId="upload">
  <Form.Label>
    <Image className="upload" src="uploadphoto.png" alt="Upload Photo"  />
    <p>Allow only jpg/png files up to 100kb size</p>
  </Form.Label>
</Form.Group>

      </Row>
     
      <br/>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="aSignatory"  >
        <Form.Label>Name of Authorized Signatory:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Authorized Signatory Name"
          onChange={handleInputChange}
          value={formData.aSignatory}
        />
      </Form.Group>
      <br/>
      <Form.Group as={Col} controlId="dSignatory" >
        <Form.Label>Designation of Signatory:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Signatory Designation"
          onChange={handleInputChange}
          value={formData.dSignatory}
        />
      </Form.Group>
      <br/>
      <Form.Group as={Col} controlId="typeOrganization">
        <Form.Label>Type of Organization:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Organization Type"
          onChange={handleInputChange}
          value={formData.typeOrganization}
        />
      </Form.Group>
      </Row>
      <br/>
      <Row>
      <Form.Group as={Col} controlId="gstNo">
        <Form.Label>GST No:</Form.Label>
        <Form.Control
          type="text"
          placeholder="GST No"
          onChange={handleInputChange}
          value={formData.gstNo}
        />
      </Form.Group>
      <br/>
      <Form.Group as={Col} controlId="panNo">
        <Form.Label>PAN No:</Form.Label>
        <Form.Control
          type="text"
          placeholder="PAN No"
          onChange={handleInputChange}
          value={formData.panNo}
        />
      </Form.Group>
      
      <Form.Group as={Col} controlId="signature">
  <Form.Label>
    <Image className="upload" src="signature.png" alt="Upload Signature"  />
    <p>Allow only jpg/png files up to 100kb size</p>
  </Form.Label>
</Form.Group>


      </Row>
      <br />
      <Button variant="primary" onClick={handleFirmSubmit}>
        Submit</Button>
      <Button variant="secondary" onClick={handlePreview}>
        Preview
      </Button>

      <Modal show={showPreview} onHide={handleClosePreview}>
        <Modal.Header closeButton>
          <Modal.Title>Form Data Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Firm/Trust/Company/Others Name: {formData.firmName}</p>
          <p>Name of Authorized Signatory: {formData.aSignatory}</p>
          <p>Designation of Signatory: {formData.dSignatory}</p>
          <p>Type of Organization: {formData.typeOrganization}</p>
          <p>GST No: {formData.gstNo}</p>
          <p>PAN No: {formData.panNo}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePreview}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges} style={{padding: '50px'}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Firm;
