import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changePayer } from '../redux/actions/action-creator';

class ConnectedMainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null
    };
  }

  handleItemClick = evt => {
    this.props.changePayer(evt.target.name);
    this.setState({ activeItem: evt.target.name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item>Finance Recoder</Menu.Item>
        <Menu.Item active={activeItem === 'nina'}>
          <Link to="/" name="nina" onClick={this.handleItemClick}>
            Nina
          </Link>
        </Menu.Item>
        <Menu.Item active={activeItem === 'jessi'}>
          <Link to="/" name="jessi" onClick={this.handleItemClick}>
            Jessi
          </Link>
        </Menu.Item>
        <Menu.Item active={activeItem === 'bronk'}>
          <Link to="/" name="bronk" onClick={this.handleItemClick}>
            Bronk
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

const MainHeader = connect(
  null,
  { changePayer }
)(ConnectedMainHeader);

export default MainHeader;
