import React, { useState } from 'react'
import Placard from './placard'
import Icon from 'components/baseComponents/icon'

function PlacardArea(props) {
    
    const style = { 
        margin: "3rem 4rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(370px,1fr))",
        gridColumnGap: "2rem",
        gridRowGap: "4rem",
        justifyContent: "center",
        fontSize: "1.4rem",
    };

    return (
        <div style={style}>
            {props.addressBook.map(placard=>{
                return <Placard key={placard.id} placard={placard} />
            })}
        </div>
    );
}

export default function Main(props) {
  
    const style = {
        icon: {
            marginTop: "1rem",
            marginLeft: "4px",
            fontSize: "2.6rem",
            position: "sticky",
            top: "1rem",
            left: "4px",
            display: "inline-block",
        }
    };

    const [icon, setIcon] = useState("faArrowCircleRight");
    
    function handleClick() {
        setIcon(icon==="faArrowCircleRight"?"faArrowCircleLeft":"faArrowCircleRight");
        props.handleClick();
    }

    return (
        <div id="main">
            <div onClick={handleClick} style={style.icon}> 
                <Icon icon={icon} />
            </div>
            <PlacardArea addressBook={props.addressBook} />
        </div>
    )
}

