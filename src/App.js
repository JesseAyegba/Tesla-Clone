import React from "react";
import "./App.css";
import Landing from "./pages/Landing";
import Error from "./pages/Error";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        {/* This route should always be at the bottom */}

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
