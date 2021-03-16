import React from 'react';
import ProfilePicture from 'components/baseComponents/profilePicture';
import Text from 'components/baseComponents/text';
import GroupLabel from 'components/baseComponents/groupLabel';
import Icon from 'components/baseComponents/icon';

function PlacardDetails({ placard, ...props }) {
  const style = {
    heading: {
      marginBlockStart: '0rem',
      marginBlockEnd: '0.6rem',
      color: 'white',
    },
    content: {
      fontSize: '1.3rem',
      marginBlockStart: '1rem',
      marginBlockEnd: '0rem',
      color: 'white',
    },
    strong: {
      color: '#0d0d0d',
    },
  };
  return (
    <div style={props.style}>
      <h2 style={style.heading}>{placard.name}</h2>
      <p style={style.content}>
        <strong style={style.strong}>Phone:</strong> {placard.phone}
      </p>
      <p style={style.content}>
        <strong style={style.strong}>Email:</strong> {placard.email}
      </p>
    </div>
  );
}

function Date({ dateCreated }) {
  const style = {
    fontSize: '1rem',
    color: 'black',
    display: 'inline',
    margin: '0',
  };
  return <p style={style}>Created on: {dateCreated}</p>;
}

function HoverOptions() {
  const style = {
    container: {
      display: 'inline',
    },
    icon: {
      marginLeft: '1rem',
      fontSize: '1.5rem',
    },
  };
  return (
    <div style={style.container}>
      <Icon icon='faUserEdit' style={style.icon} />
      <Icon icon='faTrashAlt' style={style.icon} />
    </div>
  );
}

export default function Placard({ placard, ...props }) {
  const style = {
    placard: {
      borderRadius: '12px',
      backgroundColor: '#795548',
      padding: '0.4rem',
    },
    profile: {
      display: 'flex',
      clear: 'right',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '220px',
    },
    content: {
      'alignSelf': 'center',
      'overflow-wrap': 'break-word',
      'width': 'calc(100% - 200px)',
    },
    profilePicture: {
      width: '180px',
      height: '180px',
      borderRadius: '50%',
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '0.5rem',
    },
  };

  return (
    <div style={style.placard}>
      <GroupLabel group={placard.group} />
      <div style={style.profile}>
        <ProfilePicture
          src={placard.photo}
          name={placard.name}
          style={style.profilePicture}
        />
        <PlacardDetails style={style.content} placard={placard} />
      </div>
      <div style={style.footer}>
        <Date dateCreated={placard.dateCreated} />
        <HoverOptions />
      </div>
    </div>
  );
}
