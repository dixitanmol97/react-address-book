import React from 'react'

export default function HeadingLink(props) {
    const style = {
        heading: {
            marginBlockStart: "0",
            marginBlockEnd: "0",
        },
        link: {
            font: "normal 3rem Cookie, cursive",
            color:  "#e0ac1c",
            padding: "0 1rem",
            cursor: "pointer",
            textDecoration: "none",
        },
    }
    return (
        <h2 style={style.heading}><a style={style.link} href="#">{props.heading}</a></h2>
    )
}