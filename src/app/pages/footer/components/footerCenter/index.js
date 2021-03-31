import React from "react";
import FooterLink from "app/baseComponents/footerLink";
import Icon from "app/baseComponents/icon";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import FooterInfo from "app/baseComponents/footerInfo";

export default function FooterCenter() {
  return (
    <div className="footer-center">
      <FooterInfo className="footer-main-info">
        Aliganj Bldg.
        <br /> No. A - 1, Sector - 1<br />
        Lucknow, Uttar Pradesh - 226023
      </FooterInfo>

      <FooterInfo className="footer-main-info">
        <Icon icon={faPhone} className="footer-icon" />
        +91 8874523430
      </FooterInfo>

      <div>
        <Icon icon={faEnvelope} className="footer-icon" />
        <FooterLink
          target="mailto:anmol.dixit@sprinklr.com"
          className="footer-center-link"
        >
          anmol.dixit@sprinklr.com
        </FooterLink>
        .
      </div>
    </div>
  );
}
