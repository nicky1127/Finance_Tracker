import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import { recordList } from '../redux/actions/action-creator';

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
class ConnectedList extends Component {
  constructor(props){
    super(props);
    this.state={
      stage: 'loading'
    };
  }

  componentDidMount(){
    this.props.recordList();
    this.setState({stage: 'ready'});
  }

 renderRecordtableRows() {
   const { records } = this.props;
   return records.map(record => <RecordTableRow key={record.id} record={record} />);
 } 

 renderTable() {
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

        <Table.Body>{this.renderRecordtableRows()}</Table.Body>
      </Table>
    </div>
  );
 }


  render(){
    const {stage} =this.state;

    const content = stage === 'ready' ? this.renderTable() : 'Loading';
    return (
      <div>
        {content}
      </div>
    );
  }
}



  
  


const List = connect(mapStateToProps, { recordList })(ConnectedList);

export default List;

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
