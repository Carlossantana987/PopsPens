import React from 'react';
import styled from 'styled-components'
//Component files

//Styling files
const HomeUI = styled.h1`
    position:absolute;
    tranform:translate (-50%,-50%);
    left:32%;
    bottom:30%;
    font-size:3.0rem;

    @media (max-width:750px){
      left:-1%;
      text-align:center;
      width:100%;
    }
`;



class App extends React.Component{
  render(){
    return (
      <>
      <HomeUI>Welcome to Quality
      </HomeUI>
      </>
    )
  }
}

export default App;
