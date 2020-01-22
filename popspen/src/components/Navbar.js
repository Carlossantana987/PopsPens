import React from 'react'
import styled from 'styled-components'


const Header =styled.div`
position: absolute;
color:Black;
top: 15%;
left: 50%;
height:150px;
display:flex;
flex-direction:column;
justify-content: space-between;
transform: translate(-50%, -50%);
`;


const Title = styled.h1`
font-family: 'Lexend Giga', sans-serif;
text-transform: uppercase;
text-shadow:2px 2px white;
font-size: 70px;
display:flex;
justify-content: center;
`;

const Tab = styled.ul`
display:flex;
justify-content:space-around;
width: 700px;
`;

const Button = styled.button`
	
	--offset: 10px;
	--border-size: 2px;
	
	display: block;
	position: relative;
	padding: 1.5em 3em;
	appearance: none;
	border: 0;
	background: transparent;
	background-color: rgba(0,0,0, 0.3);
	color: white;
	text-transform: uppercase;
	letter-spacing: 0.5em;
	outline: none;
    cursor: pointer;
    font-family: 'Archivo Black', sans-serif;
	font-weight: bold;
	border-radius: 0;
	box-shadow: inset 0 0 0 var(--border-size) currentcolor;
	transition: background .8s ease;
	
	&:hover {
		background: rgba(100, 0, 0, .03);
	}
	
	.horizontal,
	.vertical {
		position: absolute;
		top: var(--horizontal-offset, 0);
		right: var(--vertical-offset, 0);
		bottom: var(--horizontal-offset, 0);
		left: var(--vertical-offset, 0);
		transition: transform .8s ease;
		will-change: transform;
		
		&::before {
			content: '';
			position: absolute;
			border: inherit;
		}
	}
	
	.horizontal {
		--vertical-offset: calc(var(--offset) * -1);
		border-top: var(--border-size) solid currentcolor;
		border-bottom: var(--border-size) solid currentcolor;
		
		&::before {
			top: calc(var(--vertical-offset) - var(--border-size));
			bottom: calc(var(--vertical-offset) - var(--border-size));
			left: calc(var(--vertical-offset) * -1);
			right: calc(var(--vertical-offset) * -1);
		}
	}
	
	&:hover .horizontal {
		transform: scaleX(0);
	}
	
	.vertical {
		--horizontal-offset: calc(var(--offset) * -1);
		border-left: var(--border-size) solid currentcolor;
		border-right: var(--border-size) solid currentcolor;
		
		&::before {
			top: calc(var(--horizontal-offset) * -1);
			bottom: calc(var(--horizontal-offset) * -1);
			left: calc(var(--horizontal-offset) - var(--border-size));
			right: calc(var(--horizontal-offset) - var(--border-size));
		}
	}
	
	&:hover .vertical {
		transform: scaleY(0);
	}
	
`;

class Navbar extends React.Component{
    render(){
        return (
            <Header>
                <Title>PopsPens</Title>
                <Tab>
                    <Button>
                        Home
                        <div className='horizontal'></div>
	                    <div className='vertical'></div>
                    </Button>
                    <Button>
                         Prices
                         <div className='horizontal'></div>
	                     <div className='vertical'></div>
                     </Button>
                     <Button>
                         Catagory
                         <div className='horizontal'></div>
	                     <div className='vertical'></div>
                     </Button>        
                </Tab> 
            </Header>
        )
    }
}

export default Navbar