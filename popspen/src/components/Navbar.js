import React from 'react'
import styled from 'styled-components'


const Title = styled.h1`
font-family: 'Indie Flower', cursive;
font-size: 50px;
display:flex;
justify-content: center;
`;

const Tab = styled.ul`
display:flex;
justify-content:space-around;
list-style-type: none
`;

const List = styled.li`
border:1px solid black;
border-radius:18%;
font-family: 'Indie Flower', cursive;
color:white;
padding:1% 1%;
`;

class Navbar extends React.Component{
    render(){
        return (
            <>
            <Title>PopsPens</Title>
            <Tab>
                <List>Home</List>
                <List>Prices</List>
                <List>Catolog</List>
            </Tab>
            </>
        )
    }
}

export default Navbar