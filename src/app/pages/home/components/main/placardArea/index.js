import React from "react";
import { useSelector } from "react-redux";
import { useParams, useRouteMatch } from "react-router-dom";
import Placard from "./placard";
import { filterBySearchInputAndGroup } from "app/redux/reducers/addressBookReducer";

export default function PlacardArea(props) {
  let { group } = useParams();
  const { path, url } = useRouteMatch();
  console.log("Placard Area", path, url);
  if (group === undefined) group = "";

  const searchInput = useSelector(state => state.search.value);
  let filteredAddressBook = useSelector(state =>
    filterBySearchInputAndGroup(state, searchInput, group)
  );

  return (
    <div className={props.className}>
      {filteredAddressBook.map(placard => {
        return <Placard key={placard.id} placard={placard} />;
      })}
    </div>
  );
}
