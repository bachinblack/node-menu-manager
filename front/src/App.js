import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Menu from './components/Menu';
import DishList from './components/DishList';
import E404 from './components/errors/E404';

import './styles/App.css';


function App() {
  return (
    <div className="App">
      <Menu />
      <Router>
        <Switch>
          <Route exact path="/manage/dishes">
            <DishList />
          </Route>
          <Route path="/">
            <E404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
