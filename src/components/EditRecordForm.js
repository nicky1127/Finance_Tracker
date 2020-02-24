import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Checkbox, Button } from 'semantic-ui-react';
import { updateRecord, loadRecordsByPayer } from '../redux/actions/action-creator';

import Loading from './Loading';

const mapStateToProps = state => {
  if (state) {
    return {
      record: state.recordToEdit,
      loading: state.editRecordLoading,
    };
  }
};

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    const { record } = props;
    this.state = {
      title: record.title,
      date: record.date,
      price: record.price,
      isPaid: record.isPaid,
      payer: record.payer
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
    const { updateRecord, loadRecordsByPayer, record } = this.props;
    const { title, date, price, isPaid, payer } = this.state;
    try {
      updateRecord({ id: record.id, title, date, price, isPaid, payer }).then(() =>
        loadRecordsByPayer(payer)
      );
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

  renderSaving = () => <Loading msg='We are saving the record for you.'/>;

  render() {
    const {loading} = this.props;
    const content = loading? this.renderSaving() :this.renderForm();
    return <div className="new-record-container">{content}</div>;
  }
}

const EditRecordForm = connect(mapStateToProps, { loadRecordsByPayer, updateRecord })(
  ConnectedForm
);

export default EditRecordForm;
