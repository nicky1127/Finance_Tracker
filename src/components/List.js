import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  if (state) {
    return { records: state.records };
  }
  return { records: [] };
};

const ConnectedList = ({ records }) => {
  console.log('records in List: ', records);
  return (
    <ul className="list-group list-group-flush">
      {records.map(el => (
        <li className="list-group-item" key={el.id}>
          <p>{el.title}</p>
          <p>{el.date}</p>
          <p>{el.price}</p>
          <p>{el.sPaid}</p>
        </li>
      ))}
    </ul>
  );
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;
