import React from 'react'
import styled from 'styled-components'

const ErrorMessage = styled.h1`
    position:absolute;
    tranform:translate (-50%,-50%);
    left:37%;
    bottom:30%;
    font-size:3.0rem;

    @media (max-width:750px){
        left:-1%;
        text-align:center;
        width:100%;
      }
`;

const NotFound = () => <ErrorMessage>Page Not Found</ErrorMessage>;

export default NotFound