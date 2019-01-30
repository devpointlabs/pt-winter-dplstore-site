import React, { Component } from 'react';
import Logo from '../../images/DPL_Mark.png';
import { NavLink } from 'react-router-dom';
import { Menu, Icon, Container } from 'semantic-ui-react';

class CustomerNav extends Component {
  state = { products: [], cart: [], cartSubTotal: 0, }

  render() {
    return (
  <Container>
      <Menu text style={{margin: '70px'}}>
        <Menu.Menu>
          <NavLink exact to='/customer/products'>
            <img src={Logo} style={{width: '175px', filter: 'grayscale(100%)'}} alt='logo' />
          </NavLink>
        </Menu.Menu>
        <Menu.Menu position='right' style={{filter: 'grayscale(100%)'}} >
          <NavLink exact to='/cart'>
          <Icon link name='heart outline' color='black'/>To Cart
          </NavLink>
        </Menu.Menu>
        <br />
        <br />
      </Menu>
      </Container>
    )
    }}

export default CustomerNav;
