import React from "react";
function Input(props){
    return(
        <>
        <input type="text" placeholder={props.mob}/>
        <input type="text" placeholder={props.pass}/>
        </>
    )

}
export default Input