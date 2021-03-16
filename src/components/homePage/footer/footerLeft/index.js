import React, { useState } from 'react'
import Logo from 'components/baseComponents/logo'
import FooterInfo from 'components/baseComponents/footerInfo'
import FooterLink from 'components/baseComponents/footerLink'

export default function FooterLeft() {
    
    const style = {
        footerLeft: {
            flex: "1 1 30%",
        },
        container: {
            color: "#ffffff",
        	margin: "20px 0 12px",
        },
        link: {
            display: "inline-block",
            lineHeight: "1.8",
            textDecoration: "none",
            color:  "inherit",
        },
    }

    return (
        <div style={style.footerLeft}>
            <Logo logo="AddressBook" />
            <div style={style.container}>
                <FooterLink link="Home" target="#" style={style.link} />
                |
                <FooterLink link="About" target="#" style={style.link} />
            </div>
            <FooterInfo info="© 2021 Address Book Solutions Pvt. Ltd." />
        </div>
    )
}