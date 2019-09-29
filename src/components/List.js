import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';

const mapStateToProps = state => {
  if (state) {
    return { records: state.records };
  }
  return { records: [] };
};

const RecordTableRow = ({ record }) => (
  <Table.Row>
    <Table.Cell>{record.title}</Table.Cell>
    <Table.Cell>{record.date}</Table.Cell>
    <Table.Cell>{record.price}</Table.Cell>
    <Table.Cell>{record.isPaid?'Yes':'No'}</Table.Cell>
  </Table.Row>
);
const ConnectedList = ({ records }) => {
  const RecordtableRows = records.map(record => <RecordTableRow key={record.id} record={record} />);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Paid</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{RecordtableRows}</Table.Body>
      </Table>
    </div>
  );
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;
