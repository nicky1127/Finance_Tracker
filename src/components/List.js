import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Modal, Grid, Button } from 'semantic-ui-react';
import { recordList } from '../redux/actions/action-creator';

import NewRecordForm from './NewRecordForm';

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
    <Table.Cell>{record.isPaid ? 'Yes' : 'No'}</Table.Cell>
  </Table.Row>
);
class ConnectedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 'loading',
      openModalRecordCreate: false
    };
  }

  componentDidMount() {
    this.loadRecords();
    this.setState({ stage: 'ready' });
  }

  loadRecords() {
    this.props.recordList();
  }

  openRecordCreateModal = () => {
    this.setState({ openModalRecordCreate: true });
  };

  closeRecordCreateModal = () => {
    this.loadRecords();
    this.setState({ openModalRecordCreate: false });
  };

  renderRecordtableRows() {
    const { records } = this.props;
    return records.map(record => <RecordTableRow key={record.id} record={record} />);
  }

  renderTable() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <h2>Records</h2>
            </Grid.Column>
            <Grid.Column floated="right">
              <Button primary content="New Record" onClick={this.openRecordCreateModal} />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Paid</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{this.renderRecordtableRows()}</Table.Body>
        </Table>
      </div>
    );
  }

  render() {
    const { stage, openModalRecordCreate } = this.state;

    const content = stage === 'ready' ? this.renderTable() : 'Loading';
    return (
      <div>
        {content}
        <Modal open={openModalRecordCreate} size='tiny' onClose={this.closeRecordCreateModal}>
          <div className='col-md-8 offset-md-2'>
          <NewRecordForm 
            closeRecordCreateModal={this.closeRecordCreateModal}
          />
          </div>
        </Modal>
      </div>
    );
  }
}

const List = connect(
  mapStateToProps,
  { recordList }
)(ConnectedList);

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
