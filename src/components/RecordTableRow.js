import React, { Component } from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';

class RecordTableRow extends Component {
  buttonsDom = record => {
    const { openRecordEditModal, openRecordDeleteModal } = this.props;
    return (
      <div>
        <Button onClick={()=>openRecordEditModal(record)}>
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

export default RecordTableRow;
