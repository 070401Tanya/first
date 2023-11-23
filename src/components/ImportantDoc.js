import React from "react";
import { Card, FormGroup, FormLabel } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

function ImportantDoc() {
    return (
        <div>
            <div className="centered-box">
                <Card className="cardstyle" style={{ width: '60rem' }}>
                    <Card.Body>
                        <div className='cust'>
                            <Form>
                                <Form.Label className='consumer'>
                                    <img src={'impDoc.png'} width="20" height="20" /> Important Documents
                                </Form.Label>
                            </Form>
                            <br />
                            <div style={{
                                fontSize: '13px', color: '#dc3545', marginLeft: '25px', border: '2px solid rgb(230, 230, 230)', borderRadius: '2px',
                                padding: '15px'
                            }}>
                                <b><h6 style={{ fontSize: '15px', fontWeight: 'bold' }}> Important Note:</h6></b>
                                <ul>
                                    <li>For ownership proof - Sale Deed/Conveyance Deed/Allotment Letter/
                                        Valid Lease agreement/Mutation certificate issued by Govt authority/sub division agreement/GPA.</li>
                                    <li>Ensure all pages (front and back side) of the relevant document are uploaded.</li>
                                    <li>All uploaded documents should be self-attested by applicants(s) on photocopy of original documents.</li>
                                    <li>All uploaded documents should be clear & readable.</li>
                                    <li>Uploaded documents should be in Pdf format . Ownership proof document within size limit of 25 MB & other documents within size limit of 5 MB </li>
                                </ul>
                            </div>
                            <br />
                            <ul>

                                <li style={{ fontWeight: 'bold', fontSize: '14px' }}> Identification Proof (Self Attested) <span style={{ color: 'grey' }}>(Anyone in PDF Format)*</span></li>
                               <Form style={{ fontSize: '14px' }}>
                                    <Row>

                                        <Form.Label as={Col}>ID Proof Type.</Form.Label>
                                        <FormLabel as={Col}>ID Proof Doc No. </FormLabel>  </Row>
                                    <Row>
                                        <Form.Group as={Col}> <Form.Control as="select">
                                            <option value="">--Select--</option>
                                            <option value="">--Select--</option>
                                        </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <input as={Col} type="text" /> </Form.Group></Row>
                                    <br />
                                    <input type="file" placeholder="Upload File" style={{ color: 'transparent' }} />
                                </Form>
                                <br />
                                <li style={{ fontWeight: 'bold', fontSize: '14px' }}> Ownership Proof (Self Attested) <span style={{ color: 'grey' }}>(Anyone in PDF Format)*</span></li>
                                
                                <Form style={{ fontSize: '14px' }}>
                                    <Row>
                                        <Form.Group as={Col} controlId="options" className='type'>
                                            <Form.Control as="select">
                                                <option value="">--Select--</option>
                                                <option value="">--Select--</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <input type="file" placeholder="Upload File" style={{ color: 'transparent' }} />
                                        </Form.Group>

                                    </Row>
                                </Form>

                                <br /> <br />
                                <li style={{ fontWeight: 'bold', fontSize: '14px' }}> Firm/Trust/company/Others Documents <span style={{ color: 'grey' }}>(Self Attested)*</span></li>
                             
                                <ul style={{ fontSize: '14px' }}>
                                    <Row>
                                        <Form.Group as={Col}>
                                            <li> <FormLabel>Request on letter head signed by authorized signatory</FormLabel></li></Form.Group>
                                        <Form.Group as={Col}>
                                            <input type="file" placeholder="Upload File" style={{ color: 'transparent' }} /> </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col}>
                                            <li><FormLabel>Certificate of incorporation/ registration issued by Registrar</FormLabel></li></Form.Group>
                                        <Form.Group as={Col}>
                                            <input type="file" placeholder="Upload File" style={{ color: 'transparent' }} /> </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col}>
                                            <li><FormLabel>Proof of authorization/ resolution of boardm for authorizing the person</FormLabel></li>
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <input type="file" placeholder="Upload File" style={{ color: 'transparent' }} /> </Form.Group>

                                    </Row>
                                </ul>

                            </ul>

                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );

}
export default ImportantDoc;