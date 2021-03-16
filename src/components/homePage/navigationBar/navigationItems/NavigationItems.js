import React from 'react';
import Groups from './groups';
import Link from 'components/baseComponents/link';

function Import(props) {
  return <Link className={props.className} label='Import' />;
}

function Export(props) {
  return <Link className={props.className} label='Export' />;
}

export default function NavigationItems() {
  const style = {
    marginTop: '2rem',
    padding: '0.4rem',
  };

  return (
    <div style={style}>
      <Groups className='menu-items' />
      <Import className='menu-items' />
      <Export className='menu-items' />
    </div>
  );
}
