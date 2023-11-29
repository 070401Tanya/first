import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function ConnectionDetails() {

    
    return (
        <div className="centered-box">
            <Card className="cardstyle" style={{ width: '60rem' }}>
                <Card.Body>
                    <div className='cust'>
                        <Form>
                            <Form.Label className='consumer'>
                                <img src={'connection.png'} width="22" height="22" /> Connection Details
                            </Form.Label>

                            <br />
                            <br />
                            <div>
                             <Form.Check
                            type="radio"
                            id='permanent'
                            label="Permanent"
                            value="permanent"
                            name='connectionType'
                            inline
                            />
                            <Form.Check
                            type="radio"
                            id='temporary'
                            label="Temporary"
                            value="temporary"
                            name='connectionType'
                            inline
                            />

                            </div>
                            <br />
                            <Row>
                                <Form.Group as={Col} controlId="options" className='type'>
                                    <Form.Label >Category of electricity usage </Form.Label>

                                    <Form.Control as="select">
                                        <option value="">--Select--</option>
                                      
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="options" className='type'>
                                    <Form.Label >Purpose/Usage </Form.Label>

                                    <Form.Control as="select" >
                                        <option value="">--Select--</option>
                                      
                                    </Form.Control>
                                </Form.Group>
                            </Row>
                            <br />
                            <Row>
                                <Form.Group as={Col} controlId="upload">
                                    <Form.Label>
                                        Load (KVA) (1 KVA = 0.93 KW)
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="upload">
                                    <Form.Label>
                                        Load (KW)
                                    </Form.Label>
                                    <Form.Control
                                        type="text"


                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="upload">
                                    <Form.Label>
                                        Purpose of Supply
                                    </Form.Label>
                                    <Form.Control
                                        type="text"


                                    />
                                </Form.Group>

                            </Row>

                            <br />
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="aSignatory"  >
                                    <Form.Label>Type of Area </Form.Label>
                                    <Form.Control
                                        type="text"


                                    />
                                </Form.Group>
                                <br />
                                <Form.Group as={Col} controlId="dSignatory" >
                                    <Form.Label>Type of Premises</Form.Label>
                                    <Form.Control
                                        type="text"


                                    />
                                </Form.Group>
                                <br />
                                <Form.Group as={Col} controlId="typeOrganization">
                                    <Form.Label>Type of Use/Building</Form.Label>
                                    <Form.Control
                                        type="text"


                                    />
                                </Form.Group>

                            </Row>
                            <p>Unique Property Identification Code (UPIC) available? (A 15 digit alphanumeric code issued by MCD)</p>

                            <div>
                                <Form.Check
                                    type="radio"
                                    label="Yes"
                                    id="relationship"
                                    value="Son of"
                                    inline
                                />
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    id="relationship"
                                    value="Daughter of"
                                    inline
                                />
                            </div>
                            <br /> <br />
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
}
export default ConnectionDetails;