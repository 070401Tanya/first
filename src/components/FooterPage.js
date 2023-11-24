import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

function Footerpage() {
  return (
    <div>
      <footer>
        <div className="shadow">
          <br/>
          <Container className="py-2" style={{ width: '100%' }}>
            <Row className="flex-wrap justify-content-between">
              <Col>
                <a href="/" className="d-flex align-items-center p-0 text-dark">
                  <img alt="logo" src="logo.png"  />
                 </a>
              </Col>
              
                       
              <Col>
              <Nav.Link href="/" className="p-2">
                <img style={{width: '40px'}} src="call.png"/>
                <p>011 39999707 <br/>Fire & Shock Streetlight No.</p>
                </Nav.Link></Col>
              <Col>
              <Nav.Link href="/" className="mx-3 p-2">
                <img style={{width: '40px'}} src="tollfree.png" />
                <p>19123</p>
              </Nav.Link></Col>
              <Col>
              <Nav.Link href="/" className="p-2">
                <img style={{width: '40px'}} src="whatsapp.png" />
                <p>8800919123</p>
              </Nav.Link></Col>
              <Col>
              <Nav.Link href="/" className="mx-3 p-2">
                <img style={{width: '45px'}} src="email.png" />
                <p>brpl.feedback@relianceada.com</p>
              </Nav.Link></Col>
              <Col>
              <Nav.Link href="/" className="p-2">
                <img style={{width: '45px'}} src="procedure.png" />
                <p>New Connection Procedure</p>
              </Nav.Link></Col>
            </Row>
            <br/>
            <br/>
            <small className="text-center" style={{ width: '50%' }}>
                &copy; BSES, 2002. All rights reserved.
              </small>
          </Container>
        </div>
      </footer>
    </div>
  );
}

export default Footerpage;
