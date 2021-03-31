import React, { useState } from "react";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
import Icon from "app/baseComponents/icon";
import {
  faChevronCircleDown,
  faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { groups } from "app/pages/home/constant";

function GroupItems(props) {
  let { path, url } = useRouteMatch();
  return (
    <div className="group-items">
      {props.groupItems.map((groupItem) => (
        <NavLink
          key={groupItem}
          className={props.className}
          to={`${url}/${groupItem}`}
          activeStyle={{
            backgroundColor: "#7a5547",
          }}
        >
          {groupItem}{" "}
        </NavLink>
      ))}
    </div>
  );
}

function AddNewGroup(props) {
  return (
    <div className="add-new-group-button">
      <input
        value={props.value}
        onChange={props.handleChange}
        placeholder="New Group"
      ></input>
      <button onClick={props.handleClick}>Add</button>
    </div>
  );
}

export default function Groups(props) {
  const [groupItemsDisplay, setGroupItemsDisplay] = useState(false);
  const [icon, setIcon] = useState(faChevronCircleDown);
  const [groupItems, setGroupItems] = useState(groups);
  const [addGroup, setAddGroup] = useState(false);
  const [value, setValue] = useState("");

  function handleClick() {
    if (groupItemsDisplay === false) {
      setGroupItemsDisplay(true);
      setIcon(faChevronCircleUp);
    } else {
      setGroupItemsDisplay(false);
      setIcon(faChevronCircleDown);
    }
  }

  function addNewGroup() {
    groups.push(value);
    setGroupItems(groups);
    setAddGroup(false);
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <>
      <div onClick={handleClick}>
        <Link className={props.className}>
          Groups <Icon icon={icon} />
        </Link>
      </div>
      {groupItemsDisplay && (
        <GroupItems groupItems={groupItems} className={props.className} />
      )}
      <button
        className="add-new-group-button"
        onClick={() => {
          setAddGroup(addGroup === true ? false : true);
        }}
      >
        Add New Group
      </button>
      {addGroup && (
        <AddNewGroup handleClick={addNewGroup} handleChange={handleChange} />
      )}
    </>
  );
}
