import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Head1 from './Head1'
import Head2 from './Head2'
import Head3 from './Head3'
import Button from './Button'



function App(){
  return(
   <Fragment>
     <Head1/>
     <Head2/>
     <Head3/>
     <Button/>
   </Fragment>

  )
}

export default App

// return(React.createElement("div",null,"hello world"))