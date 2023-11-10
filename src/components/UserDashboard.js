import React, { useState } from 'react';
import FirmDash from './FirmdashBoard';
import InDash from './IndashBoard';
import { Pagination } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function UserDashboard() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
       
           <div className="centered-box" style={{ textAlign: 'left', padding: '30px'}}>
      <Card className="cardstyle"  style={{ width: '60rem' }}>
      <Card.Header style={{ textAlign: 'center' }}> Dashboard  </Card.Header>
      <Card.Body>
   
            <nav>
               
                <label htmlFor="userType" >Select User Type:  </label>
                <select
                    id="userType"
                    value={selectedOption || ''}
                    onChange={handleSelectChange}
                >
                    <option value="">Select an option</option>
                    <option value="Dashboard">Individual</option>
                    <option value="New Connection">Firm</option>
                </select> 
            </nav>

            <main>
                {selectedOption === 'Dashboard' && <Dashboard />}
                {selectedOption === 'New Connection' && <NewConnection />}
            </main>
            <Pagination className="text-muted">
            <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
           <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item >{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
        </Card.Body>
        </Card>
         </div>
     
    );
}

function Dashboard() {
    return (
        <div>
         <InDash />
        </div>
    );
}

function NewConnection() {
    return (
        <div>
        
            <FirmDash />
        </div>
    );
}

export default UserDashboard;
