import React from 'react'
import styled from 'styled-components';

const Wrapper=styled.div`
    background-image: url("https://images.pexels.com/photos/15780899/pexels-photo-15780899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    width:100vw;
    height:100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
   .home{
      display:flex;
      justify-content:center;
      align-items:center
      color:#fff;
      font-size:3rem;
      h3{
        margin:8rem
      }
   }
`

const Home = () => {
  return (
    <Wrapper>
     <div className='home'>
       <h3>Welcome to my home page</h3>
    </div>
    </Wrapper>   
  )
}

export default Home