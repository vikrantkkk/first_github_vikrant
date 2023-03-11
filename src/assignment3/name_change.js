import React from "react";
import { useState } from "react";



function Namechange(){
    const[name,setname]=useState("Amit")
    function change(){
        setname(name==="Amit" ? "Ranjan" : "Amit")
    }
    
    return(
        <>
        <p>======================================================================</p>
        <h1 style={{margin:"10px"}}>My name is {name}</h1>
        <button onClick={change} style={{margin:"30px", display:"block"}}>Change Name</button>
        </>
    )
}
export default Namechange