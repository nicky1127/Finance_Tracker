import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { toast } from 'react-toastify';

const mapStateToProps = state => {
  const { loadRecordsError } = state;
  return { error: loadRecordsError };
};

class ConnectedMainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.error) {
      toast.warn(this.props.error);
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item>Finance Recoder</Menu.Item>
        <Menu.Item active={activeItem === 'nina'}>
          <Link to="/payer/nina" name="nina">
            Nina
          </Link>
        </Menu.Item>
        <Menu.Item active={activeItem === 'jessi'}>
          <Link to="/payer/jessi" name="jessi">
            Jessi
          </Link>
        </Menu.Item>
        <Menu.Item active={activeItem === 'bronk'}>
          <Link to="/payer/bronk" name="bronk">
            Bronk
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

const MainHeader = connect(mapStateToProps)(ConnectedMainHeader);

export default MainHeader;
