import React from "app/pages/home/components/main/placardArea";
import Image from "app/baseComponents/image";
import Text from "app/baseComponents/text";
import displayPhoto from "app/images/display.jpeg";
import Icon from 'app/baseComponents/icon';
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Settings(props) {
  return (
    <Link to="/address-book/settings">
      <Icon icon={faCog} className={props.className} />
    </Link>
  );
}

function WelcomeMessage(props) {
  const text = "Hello Anmol!";
  return <Text className={props.className} text={text} />;
}

export default function Profile() {
  return (
    <div className="profile">
      <Settings className="profile-settings" />
      <div className="profile-photo-container">
        <img src={displayPhoto} />
      </div>
      <WelcomeMessage />
    </div>
  );
}
