import React, { useState } from 'react'
import Link from 'components/baseComponents/link'
import Icon from 'components/baseComponents/icon';

function GroupItems (props) {
    const groupItems = ["Home", "Work", "Favourites"];
    const className="group-items";
    return (
        <div style={props.style}>
            {groupItems.map(groupItem=><Link key={groupItem} label={groupItem} className={className} />)}
        </div>
    )
}

export default function Groups(props) {         //"faChevronCircleUp"
    
    const [groupItemsDisplay, setGroupItemsDisplay] = useState(false);
    const [icon, setIcon] = useState("faChevronCircleDown");
    
    function handleClick() {
        console.log("Clicked");
        if(groupItemsDisplay === false){
            setGroupItemsDisplay(true);
            setIcon("faChevronCircleUp");
        }
        else{
            setGroupItemsDisplay(false);
            setIcon("faChevronCircleDown");
        }
    }

    return (
        <div>
            <div onClick={handleClick}>
                <Link label="Groups " className={props.className}>
                    <Icon icon={icon} />
                </Link>
            </div>
            {groupItemsDisplay && <GroupItems />}
        </div>
    )
}
