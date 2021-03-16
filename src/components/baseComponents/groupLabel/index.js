import React from 'react'
import Text from 'components/baseComponents/text'

function getInitials(name){
    const words = name.split(' ');
    let initials ='';
    words.forEach(word=>{
        initials+=word[0];
    });
    return initials;
}

export default function  GroupLabel(props) {
    const style = {
        container: {
            width: "3rem",
            height: "3rem",
            float: "right",
            borderRadius: "50%",
            backgroundColor: "#bfaca0",
        },
        text: {
            textAlign: "center",
            lineHeight: "3rem",
            fontSize: "1.5rem",
            fontWeight: "500",
        }
    };
    return (
        <div style={style.container}>
            <Text style={style.text} text={getInitials(props.group)} />
        </div>
    )
}