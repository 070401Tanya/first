import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function Practise(){
   const [count, setCount] = useState(0);

   useEffect(()=>{
    setCount(()=>count+1);
   }, [count]);
    return(
<>
<Button type="button" onClick={()=>setCount}>click me!</Button>
</>
    );
}
export default Practise;