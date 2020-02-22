import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Checkbox, Button } from 'semantic-ui-react';
import {
  recordUpdate,
  recordList,
  updateRecord,
  loadRecordsByPayer
} from '../redux/actions/action-creator';

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.record.title,
      date: props.record.date,
      price: props.record.price,
      isPaid: props.record.isPaid,
      payer: props.record.payer
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
    const {
      closeRecordEditModal,
      recordUpdate,
      recordList,
      updateRecord,
      loadRecordsByPayer,
      record
    } = this.props;
    const { title, date, price, isPaid, payer } = this.state;
    try {
      // await recordUpdate({ id: record.id, title, date, price, isPaid, payer }).then(() =>
      //   recordList(payer)
      // );

      updateRecord({ id: record.id, title, date, price, isPaid, payer }).then(() =>
        loadRecordsByPayer(payer)
      );
      closeRecordEditModal();
    } catch (err) {
      console.log('err', err);
    }
  };
  renderForm = () => {
    const { title, date, price, isPaid } = this.state;
    return (
      <div>
        <h3>Edit the record</h3>
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

const NewRecordForm = connect(null, { recordUpdate, recordList, loadRecordsByPayer, updateRecord })(
  ConnectedForm
);

export default NewRecordForm;
