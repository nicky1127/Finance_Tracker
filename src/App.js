import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import List from './components/List';
import MainHeader from './components/MainHeader';

const App = () => (
  <Router>
    <div>
      <MainHeader />
      <Route path="/" component={List} />
    </div>
  </Router>
);

export default App;
