import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "app/pages/home";
import PageNotFound from "./pages/pageNotFound";
const About = React.lazy(() => import("app/pages/about"));
const Settings = React.lazy(() => import("app/pages/settings"));
const Contact = React.lazy(() => import("app/pages/contact"));

export default function Routes() {
  return (
    <div>
      <React.Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/address-book"></Redirect>
          </Route>
          <Route path="/address-book">
            <HomePage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <PageNotFound />
          </Route>
        </Switch>
      </React.Suspense>
    </div>
  );
}
