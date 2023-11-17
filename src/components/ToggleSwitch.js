import React, { useState } from 'react';

const ToggleSwitch = () => {

  const [isOn, setIsOn] = useState(false);


  const handleToggle = () => {

    setIsOn(!isOn);
  };

  return (
    <div>
      <h2>Toggle Switch</h2>
      <button  onClick={handleToggle}>
    
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default ToggleSwitch;