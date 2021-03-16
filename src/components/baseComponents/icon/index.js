import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as IconLibrary from '@fortawesome/free-solid-svg-icons';

export default function Icon(props) {
  return <FontAwesomeIcon icon={IconLibrary[props.icon]} style={props.style} />;
}
