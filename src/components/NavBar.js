import React, { useState } from 'react';
import ConsumerType from './ConsumerType';
import UserDashboard from './UserDashboard';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function NavBar() {
  //front dashboard
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  // image to be hovered
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div>
      <Navbar className="my-navbar justify-content-center">
        <Nav className="navbar">
          <div className="icon-container">
            <Navbar.Brand href="#home">
              <img
                src={hovered ? 'redhome.png' : 'house.svg'}
                width="30"
                height="30"
                className="icon"
                alt="Home Icon"
                id="home-icon"
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}/>
            </Navbar.Brand>
          </div>
          <Nav.Link href="/about-us" >About Us</Nav.Link>
          <Nav.Link href="/regulatory-and-compliance">Regulatory and Compliance</Nav.Link>
          <Nav.Link href="/news-and-media">News and Media</Nav.Link>
          <Nav.Link href="/tender">Tender</Nav.Link>
          <Nav.Link href="/contact-us">Contact Us</Nav.Link>
          <Nav.Link
        className={selectedOption === 'Dashboard' ? 'selected' : ''}
        onClick={() => handleOptionClick('Dashboard')}
      >
        Dashboard
      </Nav.Link>
      <Nav.Link
        className={selectedOption === 'New Connection' ? 'selected' : ''}
        onClick={() => handleOptionClick('New Connection')}
      >
        New Connection
      </Nav.Link>
          </Nav>
      </Navbar>
      
      <main>
        {selectedOption === 'Dashboard' && <Dashboard />}
        {selectedOption === 'New Connection' && <NewConnection selectedOption={selectedOption} />}
      </main>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
 
      {<UserDashboard />}
    </div>
  );
}

function NewConnection({ selectedOption }) {
  return (
    <div>
      
      {selectedOption === 'New Connection' && <ConsumerType />}
    </div>
  );
}

export default NavBar;
