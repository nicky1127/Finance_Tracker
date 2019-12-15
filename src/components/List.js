import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Modal, Grid, Button } from 'semantic-ui-react';
import { recordList, recordDelete } from '../redux/actions/action-creator';

import NewRecordForm from './NewRecordForm';
import EditRecordForm from './EditRecordForm';
import RecordTableRow from './RecordTableRow';

const mapStateToProps = state => {
  if (state) {
    return { records: state.records };
  }
  return { records: [] };
};

class ConnectedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 'loading',
      payer: props.match.params.payer,
      openModalRecordCreate: false,
      openModalRecordEdit: false,
      openModalRecordDelete: false,
      recordToDelete: null,
      recordToEdit: null
    };
  }

  componentDidMount() {
    this.loadRecords();
    this.setState({ stage: 'ready' });
  }

  loadRecords() {
    const { payer } = this.state;
    this.props.recordList(payer);
  }

  openRecordCreateModal = () => {
    this.setState({ openModalRecordCreate: true });
  };

  closeRecordCreateModal = () => {
    this.setState({ openModalRecordCreate: false });
  };

  openRecordEditModal = record => {
    this.setState({ openModalRecordEdit: true, recordToEdit: record });
  };

  closeRecordEditModal = () => {
    this.setState({ openModalRecordEdit: false, recordToEdit: null });
  };

  openRecordDeleteModal = recordId => {
    this.setState({ openModalRecordDelete: true, recordToDelete: recordId });
  };

  closeRecordDeleteModal = () => {
    this.setState({ openModalRecordDelete: false, recordToDelete: null });
  };

  deleteRecord = async () => {
    const { recordToDelete, payer } = this.state;
    const { recordDelete, recordList } = this.props;
    if (recordToDelete) {
      try {
        await recordDelete({ recordId: recordToDelete }).then(() =>
          recordList(payer)
        );
      } catch (err) {
        console.log('err', err);
      }
    }
    this.closeRecordDeleteModal();
  };

  renderRecordtableRows() {
    const { records } = this.props;
    return records.map(record => (
      <RecordTableRow
        key={record.id}
        record={record}
        openRecordDeleteModal={this.openRecordDeleteModal}
        closeRecordDeleteModal={this.closeRecordDeleteModal}
        openRecordEditModal={this.openRecordEditModal}
        closeRecordEditModal={this.closeRecordEditModal}
      />
    ));
  }

  renderTable() {
    return (
      <div className="record-list-container">
        <Grid>
          <Grid.Row>
            <Grid.Column width={14}>
              <h2>Records</h2>
            </Grid.Column>
            <Grid.Column>
              <Button primary content="New Record" onClick={this.openRecordCreateModal} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell width="5">Title</Table.HeaderCell>
                  <Table.HeaderCell width="2">Date</Table.HeaderCell>
                  <Table.HeaderCell width="2">Price</Table.HeaderCell>
                  <Table.HeaderCell width="2">Paid</Table.HeaderCell>
                  <Table.HeaderCell width="2">Action</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>{this.renderRecordtableRows()}</Table.Body>
            </Table>
          </Grid.Row>
        </Grid>
      </div>
    );
  }

  render() {
    const {
      payer,
      stage,
      recordToEdit,
      openModalRecordCreate,
      openModalRecordEdit,
      openModalRecordDelete
    } = this.state;
    const content = stage === 'ready' ? this.renderTable() : 'Loading';
    return (
      <div>
        {content}
        <Modal
          className="modal record-create-modal"
          open={openModalRecordCreate}
          size="tiny"
          onClose={this.closeRecordCreateModal}
        >
          <div>
            <NewRecordForm payer={payer} closeRecordCreateModal={this.closeRecordCreateModal} />
          </div>
        </Modal>
        <Modal
          className="modal record-edit-modal"
          open={openModalRecordEdit}
          size="tiny"
          onClose={this.closeRecordEditModal}
        >
          <div>
            <EditRecordForm record={recordToEdit} closeRecordEditModal={this.closeRecordEditModal} />
          </div>
        </Modal>
        <Modal
          className="longer record-delete-modal"
          open={openModalRecordDelete}
          size="tiny"
          onClose={this.closeRecordDeleteModal}
        >
          <Modal.Header>Delete Record</Modal.Header>
          <Modal.Content>
            <div className="col-md-8 offset-md-2">
              <p>Are you sure you want to delete this record</p>
            </div>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.closeRecordDeleteModal}>
              No
            </Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Yes"
              onClick={this.deleteRecord}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

const List = connect(mapStateToProps, { recordList, recordDelete })(ConnectedList);

export default List;

//use api.js to make request to backend

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Table } from 'semantic-ui-react';
// import api from '../Api';

// const mapStateToProps = state => {
//   if (state) {
//     return { records: state.records };
//   }
//   return { records: [] };
// };

// const RecordTableRow = ({ record }) => (
//   <Table.Row>
//     <Table.Cell>{record.title}</Table.Cell>
//     <Table.Cell>{record.date}</Table.Cell>
//     <Table.Cell>{record.price}</Table.Cell>
//     <Table.Cell>{record.isPaid ? 'Yes' : 'No'}</Table.Cell>
//   </Table.Row>
// );

// class ConnectedList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       records: []
//     };
//   }

//   componentDidMount() {
//     setTimeout(async () => {
//       await this.loadRecords();
//     }, 100);
//   }

//   async loadRecords() {
//     const records = await api.recordList();
//     console.log('records in loadRecords: ', records);
//     this.setState({ records });
//   }

//   renderRecordtableRows = records =>
//     records.map(record => <RecordTableRow key={record.id} record={record} />);

//   render() {
//     const { records } = this.state;
//     return (
//       <div>
//         <Table celled>
//           <Table.Header>
//             <Table.Row>
//               <Table.HeaderCell>Title</Table.HeaderCell>
//               <Table.HeaderCell>Date</Table.HeaderCell>
//               <Table.HeaderCell>Price</Table.HeaderCell>
//               <Table.HeaderCell>Paid</Table.HeaderCell>
//             </Table.Row>
//           </Table.Header>

//           <Table.Body>{this.renderRecordtableRows(records)}</Table.Body>
//         </Table>
//       </div>
//     );
//   }
// }

// const List = connect(mapStateToProps)(ConnectedList);

// export default List;
