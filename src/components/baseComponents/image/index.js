import React, { Suspense, useState } from 'react'

export default function Image(props) {

    const photo = `profile-image/${props.src}`;
    return (
       <img src={photo} style={props.style}></img>
    );
}
