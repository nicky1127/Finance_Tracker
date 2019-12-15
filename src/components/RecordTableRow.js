import React, { Component } from 'react';
import { Table, Button, Icon} from 'semantic-ui-react';

class RecordTableRow extends Component {
  buttonsDom = recordId => {
    const { openRecordDeleteModal }=this.props;
    return (
      <div>
        <Button>
          <Icon name="edit" />
        </Button>
        <Button onClick={()=>openRecordDeleteModal(recordId)}>
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
        <Table.Cell>{this.buttonsDom(record.id)}</Table.Cell>
      </Table.Row>
    );
  }
}

export default RecordTableRow;
