import React from 'react'
import FooterLink from 'components/baseComponents/footerLink'
import Icon from 'components/baseComponents/icon'

export default function FooterCenter() {

    const style = {
        center: {
            flex: "1 1 35%",
        },
        paragraph: {
            display: "inline-block",
            color: "#ffffff",
            verticalAlign: "middle",
            margin: "0",
        },
        span: {
            display: "block",
            fontWeight: "normal",
            lineHeight: "2",
        },
        link: {
            color:  "#e0ac1c",
        	textDecoration: "none",
        },
        icon: {
            color: "rgb(255, 255, 255)",
            fontSize: "31px",
            fontSize: "30px",
            margin: "10px 15px",
            verticalAlign: "middle",
        }
    }

    return (
        <div style={style.center}>
            <p style={style.paragraph}><span style={style.span}>Aliganj
                Bldg. No. A - 1, Sector - 1</span>
                Lucknow, Uttar Pradesh - 226023</p>
            
            <div>
                <Icon icon="faPhone" style={style.icon} />
                <p style={style.paragraph}> +91 8874523430</p>
            </div>      
            
            <div>
                <Icon icon="faEnvelope" style={style.icon} />
                <FooterLink target="mailto:anmol.dixit@sprinklr.com" link="anmol.dixit@sprinklr.com" style={style.link} />
            </div>
        </div>
    )
}