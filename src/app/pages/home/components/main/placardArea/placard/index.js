import React from "react";
import ProfilePicture from "app/baseComponents/profilePicture";
import Text from "app/baseComponents/text";
import GroupLabel from "app/baseComponents/groupLabel";
import Icon from "app/baseComponents/icon";
import { faUserEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function PlacardDetails({ placard, ...props }) {
  return (
    <div className={props.className}>
      <h2>{placard.name}</h2>
      <p>
        <strong>Phone:</strong> {placard.phone}
      </p>
      <p>
        <strong>Email:</strong> {placard.email}
      </p>
    </div>
  );
}

function Date({ dateCreated }) {
  return <p className="placard-date">Created on: {dateCreated}</p>;
}

function HoverOptions() {
  return (
    <div className="placard-hover-options">
      <Icon icon={faUserEdit} className="placard-hover-options-icon" />
      <Icon icon={faTrashAlt} className="placard-hover-options-icon" />
    </div>
  );
}

export default function Placard({ placard, ...props }) {
  return (
    <div className="placard">
      <GroupLabel group={placard.group} />
      <div className="placard-profile">
        <ProfilePicture
          src={placard.photo}
          name={placard.name}
          className="placard-profile-picture"
        />
        <PlacardDetails className="placard-content" placard={placard} />
      </div>
      <div className="placard-footer">
        <Date dateCreated={placard.dateCreated} />
        <HoverOptions />
      </div>
    </div>
  );
}
