import React from 'react'

export default function FooterLink(props) {
    return (
        <a style={props.style} href={props.target}>{props.link}</a>
    )
}