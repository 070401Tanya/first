import React, { useState, useEffect } from 'react';
import { Form, FormLabel, FormGroup } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function DocChecklist() {

    return (

        <div className="centered-box">
            <Card className="cardstyle" style={{ width: '60rem' }}>
                <Card.Body>
                    <div className='cust'>
                        <Form>
                            <Form.Label className='consumer'>
                                <img src={'DocChecklist.png'} width="25" height="24" /> Document Checklist
                            </Form.Label>
                            <br />
                            <br />
                            <ul>
                                <Row>
                                    <Col md={6} lg={7}>
                                        <li > Internal Wiring at the premises has been tested by a Licensed Electrical Contractor/designated
                                            officer of the Government and the test Certificate is available with the applicant.</li></Col>
                                    <Col>
                                        <input type="radio" id="option1" name="options" value="option1" />
                                        <label for="option1">yes</label></Col><Col>
                                        <input type="radio" id="option2" name="options" value="option2" />
                                        <label for="option2">No</label>
                                    </Col>
                                </Row>
                                <br />
                                <input type="file" placeholder="Upload File" style={{ color: 'transparent' }} />
                                <br />     <br />
                                <Row>
                                    <Col md={6} lg={7}>
                                        <li>Do you have lift installed?</li></Col>
                                    <Col>
                                        <input type="radio" id="option1" name="options" value="option1" />
                                        <label for="option1">yes</label></Col><Col>
                                        <input type="radio" id="option2" name="options" value="option2" />
                                        <label for="option2">No</label> </Col>
                                </Row>
                                <br />
                                <label>Enter your Email Id</label> <br />
                                <input type='text' />
                                <br />     <br />
                                <Row>
                                    <Col md={6}  lg={7}>
                                        <li>Do you want to avail e-Bill Services(paperless) on email?</li></Col>
                                    <Col>
                                        <input type="radio" id="option1" name="options" value="option1" />
                                        <label for="option1">yes</label> </Col><Col>
                                        <input type="radio" id="option2" name="options" value="option2" />
                                        <label for="option2">No</label> </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={6} lg={7}>
                                        <li>Do you want to purchase your own CEA approved meter having additional features as approved 
                                            by Commission</li>
                                    </Col>
                                    <Col>
                                        <input type="radio" id="option1" name="options" value="option1" />
                                        <label for="option1">yes</label> </Col>  <Col>
                                        <input type="radio" id="option2" name="options" value="option2" />
                                        <label for="option2">No</label> </Col>
                                </Row>

                            </ul>
                        </Form>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default DocChecklist;