import React from 'react';
import List from './components/List';
import NewRecordForm from './components/NewRecordForm';

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Records</h2>
      <List/>
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Add a new record</h2>
      <NewRecordForm/>
    </div>
  </div>
);

export default App;
