import React from 'react'
import '../Card/Card.css'

function Profile(props){
    return(
     <div className='outer'>
        <div className='inner'>
            <img src={props.image} alt='pic'/>
            <h3>{props.designation}</h3>
            <h1>{props.name}</h1>
            <p>{props.description}</p>

        </div>

     </div>
    )
}
export default Profile