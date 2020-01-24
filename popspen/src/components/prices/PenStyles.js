import React from "react"
import Navbar from "../Navbar"
// import styled from 'styled-components'
import PenDetails from './PenDetails'


// Image imports

class PenStyles extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                <PenDetails />
            </div>
        )
    }
}

export default PenStyles