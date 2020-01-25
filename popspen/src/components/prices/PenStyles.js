import React from "react"
import styled from 'styled-components';
import PenDetails from './PenDetails';

const PenSection = styled.div`
    position:absolute;
    width:100%;
    height:300px;
    top: 40%;
    display:flex;
    justify-content:center;
`;

class PenStyles extends React.Component{
    render(){
        return (
            <PenSection>
                <PenDetails />
            </PenSection>
        )
    }
}

export default PenStyles