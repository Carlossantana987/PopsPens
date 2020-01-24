import React from 'react';
import styled from 'styled-components'
import backgroundImg from './img/backgroundImg.jpg'

//Component files
import Navbar from './components/Navbar'

//Styling files

const BackgroundImg = styled.div`
  width: 100%;
  height:690px;
  background-image: url(${backgroundImg});
  background-size: cover; /* or contain depending on what you want */
  background-position: center;
  background-repeat: no-repeat;
  text-align:center;
  margin:auto;
  padding:0;
  z-index:-2;
  filter:blur(2px)
  `;


class App extends React.Component{
  render(){
    return (
      <>
        <BackgroundImg/>
        <Navbar />
      </>
    )
  }
}

export default App;
