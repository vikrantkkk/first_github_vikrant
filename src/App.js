// import logo from './logo.svg';
import './App.css';
import React from 'react'
import ImageSection from './SlideImage/imageslide';
import TextAreaWithLimit from './Textlimit/textlm';
import SignUpForm from './SigninSignup/signin';
import SignInForm from './SigninSignup/signup';

function App() {


  return (
  <div>
  <div>
    <ImageSection/>
  </div>

    <div>
      <TextAreaWithLimit/>
    </div>

    <div>
      <SignUpForm/>
    </div>
    
    <div>
      <SignInForm/>
    </div>

  </div>
  );
}

export default App;
