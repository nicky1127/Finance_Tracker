import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Modal, Grid, Button } from 'semantic-ui-react';
import {
  loadRecordsByPayer,
  deleteRecord,
  openAddRecordModal,
  closeAddRecordModal,
  closeEditRecordModal,
  closeDeleteRecordModal
} from '../redux/actions/action-creator';

import NewRecordForm from './NewRecordForm';
import EditRecordForm from './EditRecordForm';
import RecordTableRow from './RecordTableRow';
import Loading from './Loading';

const mapStateToProps = state => {
  if (state) {
    return {
      records: state.records,
      recordToDeleteId: state.recordToDeleteId,
      loading: state.loadRecordsLoading,
      addRecordModalOpen: state.addRecordModalOpen,
      editRecordModalOpen: state.editRecordModalOpen,
      deleteRecordModalOpen: state.deleteRecordModalOpen
    };
  }
  return { records: [] };
};

class ConnectedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // stage: 'loading',
      payer: props.match.params.payer,
      openModalRecordEdit: false,
      openModalRecordDelete: false,
      recordToDelete: null,
      recordToEdit: null
    };
  }

  componentDidMount() {
    this.loadRecords();
    // this.setState({ stage: 'ready' });
  }

  loadRecords() {
    const { payer } = this.state;
    this.props.loadRecordsByPayer(payer);
  }

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
    const { payer } = this.state;
    const { deleteRecord, loadRecordsByPayer, recordToDeleteId } = this.props;
    if (recordToDeleteId) {
      try {
        deleteRecord({ recordId: recordToDeleteId }).then(() => loadRecordsByPayer(payer));
      } catch (err) {
        console.log('err', err);
      }
    }
    this.closeRecordDeleteModal();
  };

  renderRecordtableRows() {
    const { records } = this.props;
    if (records.length > 0) {
      return records.map(record => (
        <RecordTableRow
          key={record.id}
          record={record}
          openRecordDeleteModal={this.openRecordDeleteModal}
          closeRecordDeleteModal={this.closeRecordDeleteModal}
        />
      ));
    }
    return false;
  }

  renderTable() {
    const { openAddRecordModal } = this.props;
    return (
      <div className="record-list-table">
        <Grid>
          <Grid.Row>
            <Grid.Column width={14}>
              <h2>Records</h2>
            </Grid.Column>
            <Grid.Column>
              <Button primary content="New Record" onClick={openAddRecordModal} />
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

  renderLoading = () => <Loading msg="We are fetching that content for you." />;

  render() {
    const {
      loading,
      addRecordModalOpen,
      closeAddRecordModal,
      editRecordModalOpen,
      closeEditRecordModal,
      deleteRecordModalOpen,
      closeDeleteRecordModal
    } = this.props;
    const { payer } = this.state;
    const content = loading ? this.renderLoading() : this.renderTable();
    return (
      <div className="record-list-container">
        {content}

        <Modal
          className="modal record-create-modal"
          open={addRecordModalOpen}
          size="tiny"
          onClose={closeAddRecordModal}
        >
          <div>
            <NewRecordForm payer={payer} />
          </div>
        </Modal>

        <Modal
          className="modal record-edit-modal"
          open={editRecordModalOpen}
          size="tiny"
          onClose={closeEditRecordModal}
        >
          <div>
            <EditRecordForm />
          </div>
        </Modal>

        <Modal
          className="longer record-delete-modal"
          open={deleteRecordModalOpen}
          size="tiny"
          onClose={closeDeleteRecordModal}
        >
          <Modal.Header>Delete Record</Modal.Header>
          <Modal.Content>
            <div className="col-md-8 offset-md-2">
              <p>Are you sure you want to delete this record</p>
            </div>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={closeDeleteRecordModal}>
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

const List = connect(mapStateToProps, {
  loadRecordsByPayer,
  deleteRecord,
  openAddRecordModal,
  closeAddRecordModal,
  closeEditRecordModal,
  closeDeleteRecordModal
})(ConnectedList);

export default List;
