import React from 'react'
import { useState } from 'react'

function Second(){
    const [count,setCount] = useState(0);
    function Add(){
        setCount(count+1)
    }
    function Sub(){
        setCount(count-1)
    }
    return(
        <>
        <p>==========================================================================</p>
        <h3 style={{color:"red", fontSize:"30px",marginLeft:'110px'}}>{count}</h3>
        <button onClick={Add} style={{margin:"10px"}}>increase count</button>
        <button onClick={Sub}>decrease count</button>
        </>
        
    )
    
}
export default Second