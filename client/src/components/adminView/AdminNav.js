import React, { Component } from 'react';
import Logo from '../../images/DPL_Mark.png';
import { NavLink, withRouter, Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import { AuthConsumer } from '../../providers/AuthProvider';

class AdminNav extends Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  
  render() {
    return (
      <Menu text style={{margin: '70px'}}>
        <Menu.Menu>
          <NavLink exact to='/customer/products'>
            <img src={Logo} style={{width: '175px', filter: 'grayscale(100%)'}} alt='logo' />
          </NavLink>
        </Menu.Menu>
          { this.rightNavItems() }
        <br />
        <br />
      </Menu>
    )
  }
}

export class ConnectedAdminNav extends Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <AdminNav { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedAdminNav);
