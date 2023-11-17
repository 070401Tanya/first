import React, { useState } from 'react';

function ColorPicker(){

  const [selectedColor, setSelectedColor] = useState('');

    const colorOptions = ['Red', 'Green', 'Blue', 'black', 'Purple'];

   const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
           <h2>Color Picker</h2>
        
      <div style={{ marginTop: '10px' }}>
        <p>Selected Color:</p>
        <div
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: selectedColor,
            border: '2px solid white',
          }}
        ></div>
      </div>
   <br/>
      <div>
        <p>Select a color:</p>
    
        {colorOptions.map((color) => (
          <button
            key={color}
            style={{ backgroundColor: color, marginRight: '5px', border: '2px solid white', cursor: 'pointer' }}
            onClick={() => handleColorChange(color)} >
            {color}
          </button>
        ))}
      </div>
     
    </div>
  );
};

export default ColorPicker;
