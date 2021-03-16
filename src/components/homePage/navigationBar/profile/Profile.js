import React from 'react';
import Image from 'components/baseComponents/image';
import Text from 'components/baseComponents/text';
import displayPhoto from 'images/display.jpeg';
import Icon from 'components/baseComponents/icon';

function Settings() {
  const style = {
    display: 'block',
    float: 'right',
    marginLeft: '100%',
    marginRight: '0.2rem',
    fontSize: '1.2rem',
  };
  return <Icon icon='faCog' style={style} />;
}

function WelcomeMessage() {
  const text = 'Hello Anmol!';
  const style = {
    textAlign: 'center',
    fontSize: '1.5rem',
    padding: '1rem 1rem',
    fontWeight: 'bold',
  };
  return <Text style={style} text={text} />;
}

export default function Profile() {
  const style = {
    profile: {
      display: 'block',
      paddingTop: '0.5rem',
      borderBottom: '1px solid black',
      backgroundColor: 'yellow',
    },
    pictureContainer: {
      width: '90%',
      margin: 'auto',
    },
    photo: {
      width: '100%',
      borderRadius: '50%',
    },
  };

  return (
    <div style={style.profile}>
      <Settings />
      <div style={style.pictureContainer}>
        <img src={displayPhoto} style={style.photo} />
      </div>
      <WelcomeMessage />
    </div>
  );
}
