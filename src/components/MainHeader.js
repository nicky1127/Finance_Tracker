import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class MainHeader extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: null
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item>Finance Recoder</Menu.Item>
        <Menu.Item name="nina" active={activeItem === 'nina'} onClick={this.handleItemClick}>
          <Link to="/">Nina</Link>
        </Menu.Item>

        <Menu.Item
          name="bronk_jessi"
          active={activeItem === 'bronk_jesse"'}
          onClick={this.handleItemClick}
        >
          Bronk & Jesse
        </Menu.Item>
      </Menu>
    );
  }
}
