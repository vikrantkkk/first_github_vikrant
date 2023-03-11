import React from "react";
import { useState } from "react";

function Inputadd(){
    const [name,setName] = useState("");
    const [arr,setArr] = useState([]);

    function change(event){
        setName(event.target.value);
    }

    function handleClick(){
        setArr([...arr,name]);
    }
    return(
        <>
        <>================================================================</>
        <input type="text" value={name} onChange={change} style={{display:"block",margin:'20px'}}/>
        <button onClick={handleClick} style={{margin:'15px',marginLeft:"70px"}}>Add</button>
        <ul>
            {arr.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
        </>
    )
}
export default Inputadd;