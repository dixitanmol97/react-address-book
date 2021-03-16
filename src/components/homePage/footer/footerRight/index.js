import React from 'react';
import Icon from 'components/baseComponents/icon';

export default function FooterRight() {
  const style = {
    footerRight: {
      flex: '1 1 35%',
    },
    paragraph: {
      lineHeight: '20px',
      color: '#92999f',
      fontWeight: 'normal',
      margin: '0',
    },
    span: {
      display: 'block',
      color: '#ffffff',
      fontSize: '1.2em',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    iconGroup: {
      marginTop: '2%',
    },
    icon: {
      display: 'inline-block',
      width: '7%',
      height: '35px',
      cursor: 'pointer',
      backgroundColor: '#33383b',
      borderRadius: '2px',
      color: '#ffffff',
      textAlign: 'center',
      lineHeight: '35px',
      marginRight: '3px',
      marginBottom: '5px',
    },
  };

  return (
    <div style={style.footerRight}>
      <div>
        <p style={style.paragraph}>
          <span style={style.span}>About the company</span>
          We provide you a one place for managing, grouping all your contacts
        </p>
      </div>
      <div></div>
    </div>
  );
}
