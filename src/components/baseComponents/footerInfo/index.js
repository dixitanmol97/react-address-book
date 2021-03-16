import React from 'react';

export default function FooterInfo(props) {
  const style = {
    color: '#8f9296',
    fontWeight: 'normal',
    margin: '0',
  };
  return <p style={style}>{props.info}</p>;
}
