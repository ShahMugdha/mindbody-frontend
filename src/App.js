import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/screens/sales/Home';
import Login from './components/screens/Login';
import Location from './components/screens/locations/Locations'

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component = {Login}></Route>
        <Route path="/sales" component = {Home}></Route>
        <Route path="/locations" component = {Location}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App

