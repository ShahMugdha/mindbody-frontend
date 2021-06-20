import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/screens/Home';
import Login from './components/screens/Login';

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component = {Login}>
        </Route>
        <Route path="/sales">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App

