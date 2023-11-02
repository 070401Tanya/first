import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function InDash() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the back-end API
    fetch('http://localhost:5041/api/Values')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    
           <Table >
        <thead>
          <tr>
            <th>Title</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Relationship</th>
            <th>Father's/Husband's Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.title + item.firstName}>
              <td>{item.title}</td>
              <td>{item.firstName}</td> {/* Use "FirstName" instead of "FirstName" */}
              <td>{item.middleName}</td> {/* Use "MiddleName" instead of "middleName" */}
              <td>{item.lastName}</td> {/* Use "LastName" instead of "lastName" */}
              <td>{item.relationship}</td>
              <td>{item.gName}</td>
            </tr>
          ))}
        </tbody>
      </Table>
   
  );
}

export default InDash;
