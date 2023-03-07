// import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Head from './Register/Head';
import Input from './Register/Input';
import Button from './Register/Button';

function App(){
return(
  <>
  {/* 1st challeneg */}
  <h1>Register here ...</h1>
  <input type="text" placeholder='mobile ...'/>
  <input type="text" placeholder='password ...'/>
  <button>Submit</button>

  {/* 2nd challenge */}
  <Head/>
  <Input mob="mobile ..." pass="password ..."/>
  <Button btnText="Submit"/>

  </>
)
}

export default App
