import React from 'react';
import List from './components/List';
import MainHeader from './components/MainHeader';

const App = () => (
  <div>
    <MainHeader/>
    <div className="col-md-10 offset-md-1">
      <List />
    </div>
  </div>
);

export default App;
