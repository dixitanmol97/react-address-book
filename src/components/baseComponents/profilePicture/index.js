import React, { Suspense } from 'react'
import Image from 'components/baseComponents/image'

function getInitials(name){
    const words = name.split(' ');
    let initials ='';
    words.forEach(word=>{
        initials+=word[0];
    });
    return initials;
}


export default function ProfilePicture(props) {
    const style = { 
        container: {
            width: props.style.width,
            backgroundColor: `${'#'+Math.floor(Math.random()*16777215).toString(16)}`,
            paddingTop: "17%",
            paddingBottom: "17%",
            ...props.style
        
        },
        heading: {
            fontSize: "2.5rem",
            marginTop: 0,
            marginBottom: 0,
            textAlign: "center",
        },
    }
    
    if(props.src==null){
        return (
            <div style={style.container}><h2 style={style.heading}>{getInitials(props.name)}</h2></div>
        )
    }
    else{
     return (           
            <Image src={props.src} style={props.style} />           
        )
    }
}