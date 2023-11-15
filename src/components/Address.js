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
                                        <Form.Control type="text" onChange={(e) => handleCommunicationAddressChange('houseNo', e.target.value)} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="upload">
                                        <Form.Label>Floor</Form.Label>
                                        <Form.Control type="text" onChange={(e) => handleCommunicationAddressChange('floor', e.target.value)} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="upload">
                                        <Form.Label>Building Name</Form.Label>
                                        <Form.Control type="text" onChange={(e) => handleCommunicationAddressChange('buildingName', e.target.value)} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="upload">
                                        <Form.Label>Street</Form.Label>
                                        <Form.Control type="text" onChange={(e) => handleCommunicationAddressChange('street', e.target.value)} />
                                    </Form.Group>
                                </Row>

                                <br />
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="aSignatory">
                                        <Form.Label>Colony/Area </Form.Label>
                                        <Form.Control type="text" onChange={(e) => handleCommunicationAddressChange('colonyArea', e.target.value)} />
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
                                        <Form.Control type="text" onChange={(e) => handleCommunicationAddressChange('landmarkDetails', e.target.value)} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="typeOrganization">
                                        <Form.Label> City Postal Code</Form.Label>
                                        <Form.Control type="text" onChange={(e) => handleCommunicationAddressChange('cityPostalCode', e.target.value)} />
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
                                    <Form.Control type="text" placeholder="Type your locality name here" onChange={(e) => handleCommunicationAddressChange('nearbyLocality', e.target.value)} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="dSignatory">
                                    <Form.Label>Division</Form.Label>
                                    <Form.Control type="text" onChange={(e) => handleCommunicationAddressChange('division', e.target.value)} />
                                </Form.Group>
                            </Row>

                            <br /> <br />
                            <Form.Group controlId="relationship">
                                <Form.Check
                                    type="radio"
                                    label="Is supply address same as communication address?"
                                    onChange={handleRadioChange}
                                    id="relationship"
                                    value="Son of"
                                    inline
                                />
                            </Form.Group>
                            <br />
                            {isSupplyAddressSame && (
                                <div id="supply">
                                    {/* Render supply address fields with communication address values */}
                                    <Row>
                                        <Form.Group as={Col} controlId="firmName">
                                            <Form.Label>House No./Property No. </Form.Label>
                                            <Form.Control type="text" value={communicationAddress.houseNo} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="upload">
                                            <Form.Label>Floor</Form.Label>
                                            <Form.Control type="text" value={communicationAddress.floor} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="upload">
                                            <Form.Label>Building Name</Form.Label>
                                            <Form.Control type="text" value={communicationAddress.buildingName} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="upload">
                                            <Form.Label>Street</Form.Label>
                                            <Form.Control type="text" value={communicationAddress.street} />
                                        </Form.Group>
                                    </Row>

                                    <br />
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="aSignatory">
                                            <Form.Label>Colony/Area </Form.Label>
                                            <Form.Control type="text" value={communicationAddress.colonyArea} />
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
                                            <Form.Control type="text" value={communicationAddress.landmarkDetails} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="typeOrganization">
                                            <Form.Label> City Postal Code</Form.Label>
                                            <Form.Control type="text" value={communicationAddress.cityPostalCode} />
                                        </Form.Group>
                                    </Row>
                                </div>
                            )}

                            <br />
                            <Form.Label className='consumer'>
                                Indicate Landmarks
                            </Form.Label>

                            <br />
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="aSignatory">
                                    <Form.Label>Nearby Locality </Form.Label>
                                    <Form.Control type="text" placeholder="Type your locality name here" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="dSignatory">
                                    <Form.Label>Division</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Row>
                            <br /> <br />
                            <Button variant="primary">
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
