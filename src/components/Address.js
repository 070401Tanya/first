import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function Address() {
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
                            <Row>
                                <Form.Group as={Col} controlId="firmName">
                                    <Form.Label>House No./Property No. </Form.Label>
                                    <Form.Control
                                        type="text"

                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="upload">
                                    <Form.Label>
                                        Floor
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="upload">
                                    <Form.Label>
                                        Building Name
                                    </Form.Label>
                                    <Form.Control
                                        type="text"


                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="upload">
                                    <Form.Label>
                                        Street
                                    </Form.Label>
                                    <Form.Control
                                        type="text"


                                    />
                                </Form.Group>

                            </Row>

                            <br />
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="aSignatory"  >
                                    <Form.Label>Colony/Area </Form.Label>
                                    <Form.Control
                                        type="text"


                                    />
                                </Form.Group>
                                <br />
                                <Form.Group as={Col} controlId="dSignatory" >
                                    <Form.Label>Landmark:</Form.Label>
                                    <Form.Control
                                        type="text"


                                    />
                                </Form.Group>
                                <br />
                                <Form.Group as={Col} controlId="typeOrganization">
                                    <Form.Label>Landmark Details</Form.Label>
                                    <Form.Control
                                        type="text"


                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="typeOrganization">
                                    <Form.Label> City Postal Code</Form.Label>
                                    <Form.Control
                                        type="text"

                                    />
                                </Form.Group>
                            </Row>
                            <br />
                            <br />

                            <Form.Label className='consumer'>
                           Where supply is required
                            </Form.Label>
<br/>
<br/>
<Row className="mb-3">
                                <Form.Group as={Col} controlId="aSignatory"  >
                                    <Form.Label>Nearby Locality </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Type your locality name here"

                                    />
                                </Form.Group>
                                <br />
                                <Form.Group as={Col} controlId="dSignatory" >
                                    <Form.Label>Division</Form.Label>
                                    <Form.Control
                                        type="text"/>
                                </Form.Group>                         
                            </Row>
<br/> <br/>
                            <Form.Group controlId="relationship">
                  <Form.Check
                type="radio"
                label="Is supply address same as communication address?"
                id="relationship"
                value="Son of"
                 inline/>
              </Form.Group>
              <br/>
              <Row>
                                <Form.Group as={Col} controlId="firmName">
                                    <Form.Label>House No./Property No. </Form.Label>
                                    <Form.Control
                                        type="text"

                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="upload">
                                    <Form.Label>
                                        Floor
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="upload">
                                    <Form.Label>
                                        Building Name
                                    </Form.Label>
                                    <Form.Control
                                        type="text"


                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="upload">
                                    <Form.Label>
                                        Street
                                    </Form.Label>
                                    <Form.Control
                                        type="text"


                                    />
                                </Form.Group>

                            </Row>

                            <br />
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="aSignatory"  >
                                    <Form.Label>Colony/Area </Form.Label>
                                    <Form.Control
                                        type="text"


                                    />
                                </Form.Group>
                                <br />
                                <Form.Group as={Col} controlId="dSignatory" >
                                    <Form.Label>Landmark:</Form.Label>
                                    <Form.Control
                                        type="text"


                                    />
                                </Form.Group>
                                <br />
                                <Form.Group as={Col} controlId="typeOrganization">
                                    <Form.Label>Landmark Details</Form.Label>
                                    <Form.Control
                                        type="text"


                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="typeOrganization">
                                    <Form.Label> City Postal Code</Form.Label>
                                    <Form.Control
                                        type="text"

                                    />
                                </Form.Group>
                            </Row>
                         
                            <br />
                            <Form.Label className='consumer'>
                            Indicate Landmarks
                            </Form.Label>

<br/>
<Row className="mb-3">
                                <Form.Group as={Col} controlId="aSignatory"  >
                                    <Form.Label>Nearby Locality </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Type your locality name here"

                                    />
                                </Form.Group>
                                <br />
                                <Form.Group as={Col} controlId="dSignatory" >
                                    <Form.Label>Division</Form.Label>
                                    <Form.Control
                                        type="text"/>
                                </Form.Group>                         
                            </Row>
<br/> <br/>
                            <Button variant="primary" >
                                Submit</Button>
                            <Button variant="secondary" >
                                Preview
                            </Button>
                        </Form>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Address;
