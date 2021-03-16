import React, { useState } from 'react'
import './styles.css'

export default function CollapseButton(props) {
    const button = useState("&#10095;")
    function handleClick() {
        
        props.handleNavCollapse();
    }

    return (
        <button className="collapseButton" onClick={handleClick}>{button}</button>
    )
}
