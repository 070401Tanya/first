import React, {useState} from "react";

function Counter(){

  const [selectoption, setselectOption] = useState('');
  
  const handleEvent=(e)=> {
    setselectOption(e.target.value);
    const button =  0;
       onclick= button+1;
  const button1 =1;
    onclick = button1-1;
   setselectOption(e.target.value);
button1-1;
    }
    return(
<div>
    <button type="button" id="button1"onClick={selectoption} onChange={handleEvent} >Increment</button>
    <button type="button" id="button2" onClick={selectoption} onChange={handleEvent}>Decrement</button>
</div>

    );
}