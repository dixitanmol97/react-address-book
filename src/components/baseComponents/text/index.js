import React from 'react'

export default function Text(props) {
    const style = {
        marginBlockStart: "0",
        marginBlockEnd: "0",
    }
    return (
        <p style={ {...style, ...props.style} }>{props.text}</p>
    );
}