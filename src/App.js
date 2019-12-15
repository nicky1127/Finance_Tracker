import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HOCList from './components/HOCList';
import MainHeader from './components/MainHeader';

const App = () => (
  <Router>
    <div>
      <MainHeader />
      <Switch>
        <Route path="/payer/:payer" component={HOCList} />
      </Switch>
    </div>
  </Router>
);

export default App;
