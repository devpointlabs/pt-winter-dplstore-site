import React, { Component } from 'react';
import Logo from '../Images/DPL_Mark.png';
import { NavLink, withRouter, Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import { AuthConsumer, } from '../providers/AuthProvider';

class NavBar extends Component {

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
        <Menu.Menu position='right' style={{filter: 'grayscale(100%)'}} >
          <NavLink exact to='/cart'>
          <Icon link name='heart outline' color='black' />1 Items: $49.99
          </NavLink>
        </Menu.Menu>
        <br />
        <br />
      </Menu>
    )
  }
}

export class ConnectedNavbar extends Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <NavBar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);
