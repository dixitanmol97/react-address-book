import React from 'react';
import Input from 'components/baseComponents/input';
import Text from 'components/baseComponents/text';
import HeadingLink from 'components/baseComponents/headingLink';
import Image from 'components/baseComponents/image';
import photo from 'images/plus-icon.png';
import './styles.css';
import Logo from 'components/baseComponents/logo';

function SearchAndCreateNewContact(props) {
  const style = {
    input: {
      width: '50%',
      fontSize: '2rem',
      height: '3rem',
      borderRadius: '1rem',
      paddingLeft: '1rem',
    },
    photo: {
      width: '4rem',
      marginLeft: '2rem',
      height: '4rem',
    },
  };
  return (
    <div>
      <Input
        type='text'
        style={style.input}
        placeholder='Search'
        value={props.value}
        handleChange={props.handleChange}
      />
      <img src={photo} style={style.photo} />
    </div>
  );
}

function DisplayMessage(props) {
  const style = {
    fontSize: '2rem',
    color: 'red',
    textAlign: 'center',
    paddingBottom: '1rem',
  };
  return (
    <div>
      <Text text={props.text} style={style} />
    </div>
  );
}

export default function Header(props) {
  return (
    <div id='header'>
      <Logo logo='AddressBook' />
      <SearchAndCreateNewContact
        value={props.value}
        handleChange={props.handleChange}
      />
      <DisplayMessage text='' />
    </div>
  );
}
