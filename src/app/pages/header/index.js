import React, { useCallback } from "react";
import Input from "app/baseComponents/input";
import Text from "app/baseComponents/text";
import Image from "app/baseComponents/image";
import photo from "app/images/plus-icon.png";
import "./styles.scss";
import Logo from "app/baseComponents/logo";
import PageLinks from "app/baseComponents/pageLinks";
import { addressBook } from "app/pages/home/constant";
import { useSelector, useDispatch } from "react-redux";
import { onChange } from "app/redux/actionCreators/searchActions";

function SearchAndCreateNewContact(props) {
  const dispatch = useDispatch();
  const value = useSelector(state => state.search.value);

  const handleChange = useCallback(
    event => {
      dispatch(onChange(event.target.value));
    },
    [dispatch]
  );

  return (
    <div className="search-and-create-new-contact">
      <Input
        type="text"
        className="search-input"
        placeholder="Search"
        value={value}
        handleChange={handleChange}
      />
      <img src={photo} className="create-new-contact-photo" />
    </div>
  );
}

function DisplayMessage(props) {
  return (
    <div>
      <Text text={props.text} className={props.className} />
    </div>
  );
}

export default function Header(props) {
  const collapsed = useSelector(state => state.navigationBar.collapsed);
  const style = {
    marginLeft: collapsed === true ? "0%" : "15%",
  };

  return (
    <div className="header" style={style}>
      <div className="header-top">
        <Logo logo="AddressBook" />
        <PageLinks className="header-page-links" />
      </div>
      <SearchAndCreateNewContact
        value={props.value}
        handleChange={props.handleChange}
      />
      <DisplayMessage text="" className="header-display-message" />
    </div>
  );
}
