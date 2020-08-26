import React from "react";
import { Route, Switch } from "react-router-dom";

import Menu from "./components/Menu";
import Home from "./components/Home";
import EditWorksheet from "./components/EditWorksheet";
import AddClass from "./components/AddClass";

const App = () => {

  return (
  <>
    <Menu />
    <Switch>
      <Route path="/edit_worksheet">
        <EditWorksheet />
      </Route>

      <Route path="/add_class">
        <AddClass />
      </Route>

      <Route path="/">
        <Home />
      </Route>
      
    </Switch>
  </>
  )
};

export default App;