import React, { useState } from "react";
import { Button } from "react-bootstrap";


function Counter(){
 const [count, setCount] = useState(0);
const handleClick=()=>setCount(count+1);
const handleOnClick=()=>setCount(count-1);
    return(
<div>
<h1>Question 2</h1>
<p style={Margin}>{count}</p>
<Button onClick={handleClick}>Increment</Button>

<Button onClick={handleOnClick}>Decrement</Button>
</div>
    );
}
export default Counter;


