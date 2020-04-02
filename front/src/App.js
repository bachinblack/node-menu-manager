import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Menu from './Menu';
import DishList from './DishList';
import './App.css';


function App() {
  return (
    <div className="App">
      <Menu />
      <Router>
        <Switch>
          <Route path="/manage/:table">
            <DishList />
          </Route>
          <Route path="/browse">
            browser
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
