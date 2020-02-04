import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Header =styled.div`
position: absolute;
color:Black;
top: 20%;
left: 50%;
height:150px;
display:flex;
flex-direction:column;
justify-content: space-between;
transform: translate(-50%, -50%);
padding-bottom:50px;
border-bottom:3px solid black;
width:100%;

	@media (max-width:375px){
		padding-bottom:60px;
	}
`;


const Title = styled.h1`
font-family: 'Lexend Giga', sans-serif;
text-transform: uppercase;
text-shadow:2px 2px white;
font-size: 70px;
display:flex;
justify-content: center;

	@media (max-width:375px){
		font-size:50px;
		margin-bottom:10px;
	}
`;

const Tab = styled.ul`
display:flex;
justify-content:space-around;
text-decoration:none;

	@media (max-width:375px){
		flex-direction:column;
	}
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
	color: black;
	text-transform: uppercase;
	letter-spacing: 0.5em;
	outline: none;
    cursor: pointer;
    font-family: 'Archivo Black', sans-serif;
	font-weight: bold;
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

	@media (max-width:375px){
		width:100%;
		margin:1px 0px;

		.horizontal{
			display:none;
		}
		.vertical{
			display:none;
		}

	}
	
`;

class Navbar extends React.Component{
    render(){
        return (
            <Header>
                <Title>PopsPens</Title>
                <Tab>
					<Link to="/" style={{textDecoration:'none'}}>
                    	<Button>
                        	Home
                        	<div className='horizontal'></div>
	                    	<div className='vertical'></div>
                    	</Button>
					</Link>

					<Link to="/prices" style={{textDecoration:'none'}}>
                    	<Button>
                         	Pen Styles
                         	<div className='horizontal'></div>
	                     	<div className='vertical'></div>
                     	</Button>
					 </Link>


					 <Link to="/catalog" style={{textDecoration:'none'}}>
                     	<Button>
                        	 About
                         	<div className='horizontal'></div>
	                     	<div className='vertical'></div>
                     	</Button>
					</Link>        
                </Tab> 
            </Header>
        )
    }
}

export default Navbar