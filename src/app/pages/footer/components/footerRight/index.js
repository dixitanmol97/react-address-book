import React from "react";
import Icon from "app/baseComponents/icon";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import FooterInfo from "app/baseComponents/footerInfo";

export default function FooterRight() {
  return (
    <div className="footer-right">
      <FooterInfo className="footer-main-info">About the company</FooterInfo>

      <FooterInfo className="footer-info">
        We provide you a one place for managing, grouping all your contacts
      </FooterInfo>

      <div className="footer-right-icon-group">
        <Icon icon={faFacebook} className="footer-icon" />
        <Icon icon={faInstagram} className="footer-icon" />
        <Icon icon={faTwitter} className="footer-icon" />
        <Icon icon={faLinkedin} className="footer-icon" />
        <Icon icon={faGithub} className="footer-icon" />
      </div>
    </div>
  );
}
