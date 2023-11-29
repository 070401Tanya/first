import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';

function Address() {
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [isSupplyAddressSame, setIsSupplyAddressSame] = useState(false);
    const [communicationAddress, setCommunicationAddress] = useState({
        houseNo: '',
        floor: '',
        buildingName: '',
        street: '',
        colonyArea: '',
        landmark: '',
        landmarkDetails: '',
        cityPostalCode: '',
        nearbyLocality: '',
        division: '',
        poleNumber: '',
    });
    const [supplyAddress, setSupplyAddress] = useState({
        houseNo: '',
        floor: '',
        buildingName: '',
        street: '',
        colonyArea: '',
        landmark: '',
        landmarkDetails: '',
        cityPostalCode: '',
    });

    useEffect(() => {
        fetchOptionsFromBackend().then((data) => {
            setOptions(data);
        });
    }, []);

    const fetchOptionsFromBackend = async () => {
        const response = await fetch('http://localhost:5041/api/Landmark');
        const data = await response.json();
        return data;
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleRadioChange = () => {
        setIsSupplyAddressSame(!isSupplyAddressSame);
    };

    const handleCommunicationAddressChange = (field, value) => {
        setCommunicationAddress((prevAddress) => ({
            ...prevAddress,
            [field]: value,
        }));
    };

    const handleSupplyAddressChange = (field, value) => {
        setSupplyAddress((prevAddress) => ({
            ...prevAddress,
            [field]: value,
        }));
    };

    const handleSubmit = () => {
        // Handle form submission logic here
        // You can access communicationAddress and supplyAddress for further processing
    };

    const [formData, setFormData] = useState({
        houseNo: ' ',
        floor: '',
        buildingName:'',
        street: '',
        colonyArea: '' ,
        landmark: '',
        landmarkDetails: ' ',
        cityPin: ' ',
        locality: ' ',
        division: ' ',
        radioButton: 'true',
        supplyHouseNo: ' ',
        supplyFloor:' ',
        supplyBuildingName: ' ',
        supplyStreet: ' ',
        supplyColonyArea: ' ',
        supplyLandmark: ' ',
        supplyLandmarkDetails: ' ',
        supplyCityPin: ' ',
        poleNumber: ' ',
     
          });
    
    const handleFormSubmit = () => {
        // Create an object with the necessary fields for the address table
        const addressData = {
          houseNo: formData.houseNo,
          floor: formData.floor,
          buildingName: formData.buildingName,
          street: formData.street,
          colonyArea: formData.colonyArea,
          landmark: formData.landmark,
          landmarkDetails: formData.landmarkDetails,
          cityPin: formData.cityPin,
          locality: formData.locality,
          division: formData.division,
          radioButton: formData.radioButton,
          supplyHouseNo: formData.supplyHouseNo,
          supplyFloor: formData.supplyFloor,
          supplyBuildingName: formData.supplyBuildingName,
          supplyStreet: formData.supplyStreet,
          supplyColonyArea: formData.supplyColonyArea,
          supplyLandmark: formData.supplyLandmark,
          supplyLandmarkDetails: formData.supplyLandmarkDetails,
          supplyCityPin: formData.supplyCityPin,
          poleNumber: formData.poleNumber,
        };
      
        // Send the formData to your backend API for database insertion.
        fetch('http://localhost:5041/api/Address', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(addressData),
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
      

    return (
        <div className="centered-box">
            <Card className="cardstyle" style={{ width: '60rem' }}>
                <Card.Body>
                    <div className='cust'>
                        <Form>
                            <Form.Label className='consumer'>
                                <img src={'location.png'} width="25" height="24" /> Address
                            </Form.Label>
                            <br />
                            <br />

                            <Form.Label className='consumer'>
                                For Communication
                            </Form.Label>
                            <br />
                            <br />
                            <div id="supply">
                                <Row>
                                    <Form.Group as={Col} controlId="firmName">
                                        <Form.Label>House No./Property No. </Form.Label>
                                        <Form.Control type="text" value={communicationAddress.houseNo} onChange={(e) => handleCommunicationAddressChange('houseNo', e.target.value)} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="upload">
                                        <Form.Label>Floor</Form.Label>
                                        <Form.Control type="text" value={communicationAddress.floor} onChange={(e) => handleCommunicationAddressChange('floor', e.target.value)} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="upload">
                                        <Form.Label>Building Name</Form.Label>
                                        <Form.Control type="text" value={communicationAddress.buildingName} onChange={(e) => handleCommunicationAddressChange('buildingName', e.target.value)} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="upload">
                                        <Form.Label>Street</Form.Label>
                                        <Form.Control type="text" value={communicationAddress.street} onChange={(e) => handleCommunicationAddressChange('street', e.target.value)} />
                                    </Form.Group>
                                </Row>

                                <br />
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="aSignatory">
                                        <Form.Label>Colony/Area </Form.Label>
                                        <Form.Control type="text" value={communicationAddress.colonyArea} onChange={(e) => handleCommunicationAddressChange('colonyArea', e.target.value)} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="options" className='type'>
                                        <Form.Label >Landmark:</Form.Label>
                                        <Form.Control as="select" onChange={handleOptionChange} value={selectedOption}>
                                            <option value="">--Select--</option>
                                            {options.map((option) => (
                                                <option key={option.l_Id} value={option.l_type}>
                                                    {option.l_type}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                    <br />
                                    <Form.Group as={Col} controlId="typeOrganization">
                                        <Form.Label>Landmark Details</Form.Label>
                                        <Form.Control type="text" value={communicationAddress.landmarkDetails} onChange={(e) => handleCommunicationAddressChange('landmarkDetails', e.target.value)}  />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="typeOrganization">
                                        <Form.Label> City Postal Code</Form.Label>
                                        <Form.Control type="text" value={communicationAddress.cityPostalCode} onChange={(e) => handleCommunicationAddressChange('cityPostalCode', e.target.value)} />
                                    </Form.Group>
                                </Row>
                            </div>

                            <br />
                            <br />

                            <Form.Label className='consumer'>
                                Where supply is required
                            </Form.Label>
                            <br />
                            <br />
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="aSignatory">
                                    <Form.Label>Nearby Locality </Form.Label>
                                    <Form.Control type="text" placeholder="Type your locality name here" value={supplyAddress.nearbyLocality} onChange={(e) => handleSupplyAddressChange('nearbyLocality', e.target.value)} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="dSignatory">
                                    <Form.Label>Division</Form.Label>
                                    <Form.Control type="text" value={supplyAddress.division} onChange={(e) => handleSupplyAddressChange('division', e.target.value)} />
                                </Form.Group>
                            </Row>

                            <br /> <br />
                            <Form.Group controlId="relationship">
                                <Form.Check
                                    type="checkbox"
                                    label="Is supply address same as communication address?"
                                    onChange={handleRadioChange}
                                    id="relationship"
                                    value="Son of"
                                    inline
                                />
                            </Form.Group>
                            <br />
                            {isSupplyAddressSame ? (
                                <div id="supply">
                                    {/* Render supply address fields with communication address values */}
                                    <Row>
                                        <Form.Group as={Col} controlId="firmName">
                                            <Form.Label>House No./Property No. </Form.Label>
                                            <Form.Control type="text" value={communicationAddress.houseNo} onChange={(e) => handleSupplyAddressChange('houseNo', e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="upload">
                                            <Form.Label>Floor</Form.Label>
                                            <Form.Control type="text" value={communicationAddress.floor} onChange={(e) => handleSupplyAddressChange('floor', e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="upload">
                                            <Form.Label>Building Name</Form.Label>
                                            <Form.Control type="text" value={communicationAddress.buildingName} onChange={(e) => handleSupplyAddressChange('buildingName', e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="upload">
                                            <Form.Label>Street</Form.Label>
                                            <Form.Control type="text" value={communicationAddress.street} onChange={(e) => handleSupplyAddressChange('street', e.target.value)} />
                                        </Form.Group>
                                    </Row>

                                    <br />
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="aSignatory">
                                            <Form.Label>Colony/Area </Form.Label>
                                            <Form.Control type="text" value={communicationAddress.colonyArea} onChange={(e) => handleSupplyAddressChange('colonyArea', e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="options" className='type'>
                                            <Form.Label >Landmark:</Form.Label>
                                            <Form.Control as="select" type="text" value={communicationAddress.landmark} onChange={(e) => handleSupplyAddressChange('landmark', e.target.value)}>
                                                <option value="">--Select--</option>
                                                {options.map((option) => (
                                                    <option key={option.l_Id} value={option.l_type}>
                                                        {option.l_type}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                        <br />
                                        <Form.Group as={Col} controlId="typeOrganization">
                                            <Form.Label>Landmark Details</Form.Label>
                                            <Form.Control type="text" value={communicationAddress.landmarkDetails} onChange={(e) => handleSupplyAddressChange('landmarkDetails', e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="typeOrganization">
                                            <Form.Label> City Postal Code</Form.Label>
                                            <Form.Control type="text" value={communicationAddress.cityPostalCode} onChange={(e) => handleSupplyAddressChange('cityPostalCode', e.target.value)} />
                                        </Form.Group>
                                    </Row>
                                </div>
                            ) : (
                                <div id="supply">
                                    {/* Render standard supply address fields for user input */}
                                    <Row>
                                        <Form.Group as={Col} controlId="firmName">
                                            <Form.Label>House No./Property No. </Form.Label>
                                            <Form.Control type="text" value={supplyAddress.houseNo} onChange={(e) => handleSupplyAddressChange('houseNo', e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="upload">
                                            <Form.Label>Floor</Form.Label>
                                            <Form.Control type="text" value={supplyAddress.floor} onChange={(e) => handleSupplyAddressChange('floor', e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="upload">
                                            <Form.Label>Building Name</Form.Label>
                                            <Form.Control type="text" value={supplyAddress.buildingName} onChange={(e) => handleSupplyAddressChange('buildingName', e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="upload">
                                            <Form.Label>Street</Form.Label>
                                            <Form.Control type="text" value={supplyAddress.street} onChange={(e) => handleSupplyAddressChange('street', e.target.value)} />
                                        </Form.Group>
                                    </Row>

                                    <br />
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="aSignatory">
                                            <Form.Label>Colony/Area </Form.Label>
                                            <Form.Control type="text" value={supplyAddress.colonyArea} onChange={(e) => handleSupplyAddressChange('colonyArea', e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="options" className='type'>
                                            <Form.Label >Landmark:</Form.Label>
                                            <Form.Control as="select" type="text" value={supplyAddress.landmark} onChange={(e) => handleSupplyAddressChange('landmark', e.target.value)}>
                                                <option value="">--Select--</option>
                                                {options.map((option) => (
                                                    <option key={option.l_Id} value={option.l_type}>
                                                        {option.l_type}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                        <br />
                                        <Form.Group as={Col} controlId="typeOrganization">
                                            <Form.Label>Landmark Details</Form.Label>
                                            <Form.Control type="text" value={supplyAddress.landmarkDetails} onChange={(e) => handleSupplyAddressChange('landmarkDetails', e.target.value)} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="typeOrganization">
                                            <Form.Label> City Postal Code</Form.Label>
                                            <Form.Control type="text" value={supplyAddress.cityPostalCode} onChange={(e) => handleSupplyAddressChange('cityPostalCode', e.target.value)} />
                                        </Form.Group>
                                    </Row>
                                </div>
                            )}

                            <br />
                            
                            <Form.Label className='consumer'>
                                Indicate Landmarks
                            </Form.Label>
                            <br/> <br/>
                            <Form.Group  controlId="typeOrganization">
                                            <Form.Label>  Pole No./Feeder Pillar No./Nearest House No. </Form.Label>
                                            <Form.Control type="text" value={communicationAddress.poleNumber} onChange={(e) => handleCommunicationAddressChange('poleNumber', e.target.value)} />
                                        </Form.Group>                                    
                            <br />
                           
                            <br /> <br />
                            <Button variant="primary" onClick={handleSubmit}>
                                Submit
                            </Button>
                            <Button variant="secondary">
                                Preview
                            </Button>
                        </Form>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Address;
