import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Checkbox, Button } from 'semantic-ui-react';
import uuidv1 from 'uuid';
import { recordCreate, loadRecordsByPayer, recordList,addRecord } from '../redux/actions/action-creator';

// const mapDispatchToProps = dispatch => ({
//   recordCreate: record => dispatch(recordCreate(record)),
//   recordList: () => dispatch(recordList())
// });

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      date: '',
      price: '',
      isPaid: false
    };
  }

  onChangeTitle = evt => {
    this.setState({ [evt.target.id]: evt.target.value });
  };

  onChangeDate = evt => {
    this.setState({ [evt.target.id]: evt.target.value });
  };

  onChangePrice = evt => {
    this.setState({ [evt.target.id]: evt.target.value });
  };

  onChangePaid = evt => {
    this.setState({ [evt.target.id]: evt.target.checked });
  };

  onSubmit = async event => {
    event.preventDefault();
    const { closeRecordCreateModal, recordCreate, recordList, addRecord,loadRecordsByPayer } = this.props;
    const { title, date, price, isPaid } = this.state;
    const { payer } = this.props;
    const id = uuidv1();
    try {
      // await recordCreate({ id, title, date, price, isPaid, payer }).then(() => recordList(payer));
      addRecord({ id, title, date, price, isPaid, payer }).then(() => loadRecordsByPayer(payer));
      closeRecordCreateModal();
    } catch (err) {
      console.log('err', err);
    }
  };
  renderForm = () => {
    const { title, date, price, isPaid } = this.state;
    return (
      <div>
        <h3>Add new record</h3>
        <div className="new-record-form">
          <Form>
            <Form.Input label="Title" id="title" value={title} onChange={this.onChangeTitle} />
            <Form.Input label="Date" id="date" value={date} onChange={this.onChangeDate} />
            <Form.Input label="Price" id="price" value={price} onChange={this.onChangePrice} />
            <Form.Field>
              <Checkbox
                label="Paid?"
                id="isPaid"
                toggle
                checked={isPaid}
                onClick={this.onChangePaid}
              />
            </Form.Field>
            <Button type="submit" onClick={this.onSubmit}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  };

  render() {
    const content = this.renderForm();
    return <div className="new-record-container">{content}</div>;
  }
}

const NewRecordForm = connect(null, { recordCreate, loadRecordsByPayer, recordList, addRecord })(ConnectedForm);

export default NewRecordForm;
