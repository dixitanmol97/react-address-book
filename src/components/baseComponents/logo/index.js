import React from 'react';
import HeadingLink from 'components/baseComponents/headingLink';

export default function Logo(props) {
  return (
    <div>
      <HeadingLink heading={props.logo} />
    </div>
  );
}
