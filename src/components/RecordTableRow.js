import React, { Component } from 'react';
import { Table, Button, Icon, Modal } from 'semantic-ui-react';

class RecordTableRow extends Component {
  buttonsDom = () => (
    <div>
      <Button>
        <Icon name="edit" />
      </Button>
      <Button onClick={this.props.openRecordDeleteModal}>
        <Icon name="trash" />
      </Button>
    </div>
  );
  render() {
    const { record } = this.props;
    return (
      <Table.Row>
        <Table.Cell>{record.title}</Table.Cell>
        <Table.Cell>{record.date}</Table.Cell>
        <Table.Cell>{record.price}</Table.Cell>
        <Table.Cell>{record.isPaid ? 'Yes' : 'No'}</Table.Cell>
        <Table.Cell>{this.buttonsDom()}</Table.Cell>
      </Table.Row>
    );
  }
}

export default RecordTableRow;
