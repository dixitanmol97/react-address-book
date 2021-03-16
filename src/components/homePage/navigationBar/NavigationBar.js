import React from 'react';
import Profile from './profile/Profile';
import NavigationItems from './navigationItems/NavigationItems';
import './styles.css';

export default function NavigationBar(props) {
  return (
    <div id='NavigationBar' style={props.style}>
      <Profile />
      <NavigationItems />
    </div>
  );
}
