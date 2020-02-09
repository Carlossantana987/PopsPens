import React from 'react'
import penStyles from '../../img/penStyles.jpg'
import styled from 'styled-components';


const PenDetailS = styled.div`
    display: flex;
    justify-content:space-between;
    flex-direction:row;
    align-items:center;
    
    @media (max-width: 750px){
        flex-direction:column;
    }

`;

const LeftS = styled.div`
    margin:5%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    height: -webkit-fill-available;

    @media (max-width: 750px){
        text-align:center;
        width:95%;
        }
    
    
`;

const PenName = styled.div`
    font-size:3.0rem;

    @media (min-width:750px){
    }
`;

const Details = styled.div`
    height:100%;
    font-size:1.3rem;
    display:flex;
    justify-content:center;
    margin:1px;
`;

const Pen = styled.img`
    height:250px;
    border-radius:5%;
    box-shadow:5px 5px 30px black;

    @media (min-width:750px){
        height:200px
    }
`;

const PenDetails = () =>{
    return(
        <PenDetailS>
            <LeftS>

                <PenName>
                <h1>PenName holder</h1>
                </PenName>

                <Details>
                <p>This is placeholder text for details about the pen style and design and etc.</p>
                </Details>

            </LeftS>
            <Pen src={penStyles} alt="pen"/>
        </PenDetailS>
    )
}

export default PenDetails