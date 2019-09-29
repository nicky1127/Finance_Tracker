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
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, date, price } = this.state;
    const id = uuidv1();
    this.props.addRecord({ title, id, date, price });
    this.resetRecord();
    // setTimeout(()=>this.resetRecord(), 500);
  };
  resetRecord = () => {
    this.setState({ title: '', date: '', price: '' });
  };

  render() {
    const { title, date, price } = this.state;
    return (
      // <form onSubmit={this.handleSubmit}>
      //   <div className="form-group">
      //     <label htmlFor="title">Title</label>
      //     <input
      //       type="text"
      //       className="form-control"
      //       id="title"
      //       value={title}
      //       onChange={this.onChangeTitle}
      //     />
      //     <label htmlFor="date">Date</label>
      //     <input
      //       type="text"
      //       className="form-control"
      //       id="date"
      //       value={date}
      //       onChange={this.onChangeDate}
      //     />
      //     <label htmlFor="price">Price</label>
      //     <input
      //       type="text"
      //       className="form-control"
      //       id="price"
      //       value={price}
      //       onChange={this.onChangePrice}
      //     />
      //   </div>
      //   <button type="submit" className="btn btn-success btn-lg">
      //     Add
      //   </button>
      // </form>
      <Form>
        <Form.Input label="Title" id="title" value={title} onChange={this.onChangeTitle} />
        <Form.Field>
          <label>Date</label>
          <input placeholder="Date" />
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <input placeholder="Price" />
        </Form.Field>

        <Form.Field>
          <Checkbox label="Paid?" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

const NewRecordForm = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default NewRecordForm;
