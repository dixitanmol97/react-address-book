import React, { useState } from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Icon from "app/baseComponents/icon";
import {
  faArrowCircleRight,
  faArrowCircleLeft,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
import { address } from "app/pages/home/tsxAssets/interface";
import { rootState } from "app/redux/store";
import {
  openNavigationBar,
  collapseNavigationBar,
} from "app/redux/actionCreators/navigationBarActions";
const PlacardArea = React.lazy(() => import("./placardArea"));

export default function Main(props) {
  const [icon, setIcon] = useState(faArrowCircleRight);
  const dispatch = useDispatch();
  const { test } = useParams();
  console.log("test =", test);
  const collapsed = useSelector(
    (state: rootState) => state.navigationBar.collapsed
  );
  let { path, url } = useRouteMatch();
  function handleClick() {
    setIcon(
      icon === faArrowCircleRight ? faArrowCircleLeft : faArrowCircleRight
    );
    if (collapsed === true) {
      dispatch(openNavigationBar());
    } else {
      dispatch(collapseNavigationBar());
    }
  }

  const style = {
    marginLeft: collapsed === true ? "0%" : "15%",
  };

  const fallbackPlacardArea = (
    <div className="placard-area">
      <div className="placard-fallback"></div>
      <div className="placard-fallback"></div>
      <div className="placard-fallback"></div>
      <div className="placard-fallback"></div>
      <div className="placard-fallback"></div>
      <div className="placard-fallback"></div>
    </div>
  );

  return (
    <div className="main" style={style}>
      <div onClick={handleClick} className="navigation-collapse-icon">
        <Icon icon={icon} />
      </div>
      <React.Suspense fallback={fallbackPlacardArea}>
        <Switch>
          <Route exact path={path}>
            <PlacardArea className="placard-area" />
          </Route>
          <Route path={`${path}/:group`}>
            <PlacardArea className="placard-area" />
          </Route>
        </Switch>
      </React.Suspense>
    </div>
  );
}
