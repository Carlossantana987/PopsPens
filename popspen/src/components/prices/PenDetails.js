import React from 'react'
import penStyles from '../../img/penStyles.jpg'
import styled from 'styled-components';


const PenDetailS = styled.div`
    border:1px solid white;
    display: flex;
    flex-direction:row;
    align-items:center;
`;

const Details = styled.div`
    height:100%;
    border:1px solid purple;
    display:flex;
    flow-direction:column;
`;

const Pen = styled.img`
    width:500px;
    height:300px;
`;

const PenDetails = () =>{
    return(
        <PenDetailS>
            <Details>
            <h1>Helow World</h1><br/>
            <p>This is the pen your gonna by <br/>
                yeah your gonna buy this pen homo</p>
            </Details>
            <Pen src={penStyles} alt="pen"/>
        </PenDetailS>
    )
}

export default PenDetails