
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';

function FirmDash() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5041/WeatherForecast')
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
    <div>
            <Table >
        <thead >
          <tr>
            <th>Organization Name</th>
            <th>Authorized Signatory Name</th>
            <th> Designation Signatory</th>
            <th>Organization Type</th>
            <th>GST No</th>
            <th>Pan No</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.firmName}>
              <td>{item.firmName}</td>
              <td>{item.aSignatory}</td>
              <td>{item.dSignatory}</td>
              <td>{item.typeOrganization}</td>
              <td>{item.gstNo}</td>
              <td>{item.panNo}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    

    </div>
  );
}

export default FirmDash;
