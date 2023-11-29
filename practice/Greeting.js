import React from "react";

function Greeting(prop) {

    // const [selectInput, setselectInput] = useState('');
    // const handleEvent = (e) => {
    //     alert = ("hello", { input });
    // }
function greetings (prop){
    return(
        <>
        <p> hello, {prop.name}</p>
        </>
    )
}
    return (
        <div>
            <p>Hello, {prop.name}.</p>
            <p>Hello, {prop.age}.</p>
            {/* <p>Hello, {prop.ema}.</p> */}
            {/* <form>
                <label>Please Enter Your Name</label>
                <input type="text" id="input">
                </input>
                <button type="submit" onClick={handleEvent} onChange={selectInput}>Submit</button>
            </form> */}
        </div>
    );

}
export default Greeting;
