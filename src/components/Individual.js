import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';


function Individual() {
  const [formData, setFormData] = useState({
    title: 'Mr.',
    firstName: '',
    middleName: '',
    lastName: '',
    relationship: 'Son of',
    gName: '',
  });

  const [showPreview, setShowPreview] = useState(false);

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
          relationship: 'Son of',
          gName: '',
        });
        alert('Data submitted successfully.');
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
      });
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handleClosePreview = () => {
    setShowPreview(false);
  };

  const handleSaveChanges = () => {


    alert('Content saved successfully.');
  };

  
  return (
    <div>
      <Form >
      <div className="mainblock">
        
        <div className="div1">
          <div className="div1_left">

            <Row className="mb-8">
              <Form.Group as={Col} controlId="title">
                <Form.Label>Title:</Form.Label>
                <Form.Control as="select" onChange={handleInputChange} value={formData.title} required >
                  <option>Mr.</option>
                  <option>Ms.</option>
                  <option>Mrs.</option>
                  <option>Others</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="upload">
                <Form.Label>
                  <Image className="upload" src="uploadphoto.png" alt="Upload Photo" />
                  <p>Allow only jpg/png files up to 100kb size</p>
                </Form.Label>
              </Form.Group>

            </Row>

          </div>
          <br />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="firstName">
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                onChange={handleInputChange}
                value={formData.firstName}
                required 
                defaultValue="Otto"
              />
               <Form.Control.Feedback type="invalid">
              Please enter your First Name
            </Form.Control.Feedback>
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
                value={formData.lastName}
              />
            </Form.Group>
          </Row>
          <Form.Group controlId="relationship">
            <Form.Label>Relationship:</Form.Label>
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
            <Row className="mb-3">
              <Form.Group as={Col} controlId="gName">
                <Form.Label>Father's/Husband's Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Father's/Husband's Name"
                  onChange={handleInputChange}
                  value={formData.gName}
                  required 
                  defaultValue="Otto"
                />
                <Form.Control.Feedback type="invalid">
              Please enter your Father's/Husband's Name
            </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="signature">
                <Form.Label>
                  <Image className="upload" src="signature.png" alt="Upload Signature" />
                  <p>Allow only jpg/png files up to 100kb size</p>
                </Form.Label>
              </Form.Group>

            </Row>
          </Form.Group>

          <br />
          <Button variant="primary" onClick={handleFormSubmit}>
            Submit
          </Button>
          <Button variant="secondary" onClick={handlePreview}>
            Preview
          </Button>
        </div>
      </div>
</Form>
      <Modal show={showPreview} onHide={handleClosePreview}>
        <Modal.Header closeButton>
          <Modal.Title>Form Data Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Title: {formData.title}</p>
          <p>First Name: {formData.firstName}</p>
          <p>Middle Name: {formData.middleName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Relationship: {formData.relationship}</p>
          <p>Father's/Husband's Name: {formData.gName}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePreview}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default Individual;
