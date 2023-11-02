import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Individual from './Individual'; // Import the Individual component
import Firm from './Firm'; // Import the Firm component
import { Card } from 'react-bootstrap';

function ConditionalRendering() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
  
      <div className="centered-box">
      <Card className="cardstyle"  style={{ width: '60rem' }}>
      <Card.Header style={{ textAlign: 'left' }}>Apply Online / New Connection / Request No: R171020230199  </Card.Header>
      <Card.Body>
        <br/>
        <div className='cust'>
        <Form>
            <Form.Label className='consumer'><img
                src={'information.png'}
                width="30" height="25" ></img> Consumer Information</Form.Label>
          <Form.Group controlId="options" className='type'> <br/>
            <Form.Label >Consumer Type:</Form.Label>
            <Form.Control as="select" value={selectedOption} onChange={handleOptionChange}>
              <option value="">Select</option>
              <option value="option1">Individual</option>
              <option value="option2">Firm/Trust/Company/Others</option>
            </Form.Control>
          </Form.Group>

          {selectedOption === 'option1' && (
            <div className="individual-form">
              <Individual /> {/* Render the Individual component */}
            </div>
          )}

          {selectedOption === 'option2' && (
            <div className="firm-form">
              <Firm /> {/* Render the Firm component */}
            </div>
          )}
        </Form>
        </div>
        </Card.Body>
        </Card>
         </div>

  );
}

export default ConditionalRendering;
