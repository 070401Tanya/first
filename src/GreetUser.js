import React, { useState } from "react";
import { Button } from "react-bootstrap";

function GreetUser() {
  const [userName, setUserName] = useState('');

  const handleChange = (event) => {
  
    setUserName(event.target.value);
  };

  const handleClick = () => {
    
    alert(`Hello, ${userName}!`);
  };

  return (
    <div>
      <form>
        <label>Enter your Name:</label><br />
    
        <input type="text" value={userName} onChange={handleChange} /><br /><br />

       
        <Button onClick={handleClick}>Submit</Button>
      </form>
    </div>
  );
}

export default GreetUser;
