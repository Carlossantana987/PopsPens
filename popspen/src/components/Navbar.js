import React from 'react'
import styled from 'styled-components'


const Header =styled.div`
position: absolute;
top: 10%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 2;
`;


const Title = styled.h1`
font-family: 'Indie Flower', cursive;
font-size: 50px;
display:flex;
justify-content: center;
`;

const Tab = styled.ul`
display:flex;
justify-content:space-between;
width: 400px;  
margin:5% 0%;
`;

const Button = styled.button`
font-size:20px;
padding:0%, 5%;
border:1px solid black;
border-radius:18%;
font-family: 'Indie Flower', cursive;
outline:none;
&:hover{
        color:white;
        background:black;
    
}
`;

class Navbar extends React.Component{
    render(){
        return (
            <Header>
                <Title>PopsPens</Title>
                <Tab>
                    <Button className='tabs'>Home</Button>
                    <Button className='tabs'>Prices</Button>
                    <Button className='tabs'>Catolog</Button>
                </Tab>
            </Header>
        )
    }
}

export default Navbar