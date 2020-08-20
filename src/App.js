import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import EditWorksheet from "./components/EditWorksheet";
import AddNames from "./components/AddNames";

const App = () => {

  return (
  <>
    <Switch>
      <Route path="/edit_worksheet">
        <EditWorksheet />
      </Route>

      <Route path="/add_names">
        <AddNames />
      </Route>

      <Route path="/">
        <Home />
      </Route>
      
    </Switch>
  </>
  )
};

export default App;