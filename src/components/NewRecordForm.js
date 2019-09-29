import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Checkbox, Button } from 'semantic-ui-react';
import uuidv1 from 'uuid';
import { addRecord } from '../redux/actions/action-creator';

const mapDispatchToProps = dispatch => ({
  addRecord: record => dispatch(addRecord(record))
});

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

  // changeField = (name, value) => {
  //     const { record } = this.state;
  //     record[name] = value;
  //     this.setState({record});
  // }

  onChangeTitle = evt => {
    // this.changeField(evt.target.id, evt.target.value);
    console.log('evt.value: ', evt.value);
    console.log('evt.target.value: ', evt.target.value);
    this.setState({ [evt.target.id]: evt.target.value });
  };

  onChangeDate = evt => {
    // this.changeField(evt.target.id, evt.target.value);
    this.setState({ [evt.target.id]: evt.target.value });
  };

  onChangePrice = evt => {
    // this.changeField(evt.target.id, evt.target.value);
    this.setState({ [evt.target.id]: evt.target.value });
  };

  onChangePaid = evt => {
    // this.changeField(evt.target.id, evt.target.checked);
    this.setState({ [evt.target.id]: evt.target.checked });
  };

  onSubmit = event => {
    event.preventDefault();
    const { title, date, price, isPaid } = this.state;
    const id = uuidv1();
    this.props.addRecord({ id, title, date, price, isPaid });
    this.resetRecord();
  };
  resetRecord = () => {
    this.setState({ title: '', date: '', price: '', isPaid: false });
  };

  render() {
    const { title, date, price, isPaid } = this.state;
    return (
      <Form>
        <Form.Input label="Title" id="title" value={title} onChange={this.onChangeTitle} />
        <Form.Input label="Date" id="date" value={date} onChange={this.onChangeDate} />
        <Form.Input label="Price" id="price" value={price} onChange={this.onChangePrice} />
        <Form.Field>
          <Checkbox label="Paid?" id="isPaid" toggle checked={isPaid} onClick={this.onChangePaid}/>
        </Form.Field>
        <Button type="submit" onClick={this.onSubmit}>Submit</Button>
      </Form>
    );
  }
}

const NewRecordForm = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default NewRecordForm;
