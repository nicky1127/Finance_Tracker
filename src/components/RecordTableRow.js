import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button, Icon } from 'semantic-ui-react';

import { openEditRecordModal } from '../redux/actions/action-creator';

class ConnectedRecordTableRow extends Component {
  buttonsDom = record => {
    const { openEditRecordModal, openRecordDeleteModal } = this.props;
    return (
      <div>
        <Button onClick={() => openEditRecordModal(record)}>
          <Icon name="edit" />
        </Button>
        <Button onClick={() => openRecordDeleteModal(record.id)}>
          <Icon name="trash" />
        </Button>
      </div>
    );
  };
  render() {
    const { record } = this.props;
    return (
      <Table.Row>
        <Table.Cell>{record.title}</Table.Cell>
        <Table.Cell>{record.date}</Table.Cell>
        <Table.Cell>{record.price}</Table.Cell>
        <Table.Cell>{record.isPaid ? 'Yes' : 'No'}</Table.Cell>
        <Table.Cell>{this.buttonsDom(record)}</Table.Cell>
      </Table.Row>
    );
  }
}

const RecordTableRow = connect(null, {
  openEditRecordModal
})(ConnectedRecordTableRow);

export default RecordTableRow;
