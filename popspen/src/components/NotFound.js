import React from 'react'
import styled from 'styled-components'

const ErrorMessage = styled.h1`
    position:absolute;
    tranform:translate (-50%,-50%);
    left:37%;
    bottom:30%;
    font-size:3.0rem;
`;

const NotFound = () => <ErrorMessage>Page Not Found</ErrorMessage>;

export default NotFound