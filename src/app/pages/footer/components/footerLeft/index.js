import React, { useState } from "react";
import Logo from "app/baseComponents/logo";
import FooterInfo from "app/baseComponents/footerInfo";
import FooterLink from "app/baseComponents/footerLink";
import PageLinks from "app/baseComponents/pageLinks";

export default function FooterLeft() {
  return (
    <div className="footer-left">
      <Logo logo="AddressBook" />
      <PageLinks className="footer-page-links" />
      <FooterInfo className="footer-info">
        © 2021 Address Book Solutions Pvt. Ltd.
      </FooterInfo>
    </div>
  );
}
