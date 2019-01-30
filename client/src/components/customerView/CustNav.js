import React from 'react';
import Logo from '../../Images/DPL_Mark.png';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

const CustNav = () => (
    <Menu text style={{margin: '70px'}}>
      <Menu.Menu>
        <NavLink exact to='/customer/products'>
          <img src={Logo} style={{width: '175px', filter: 'grayscale(100%)'}} alt='logo' />
        </NavLink>
      </Menu.Menu>
      <Menu.Menu position='right' style={{filter: 'grayscale(100%)'}} >
        <NavLink exact to='/cart_items'>
        <Icon link name='heart outline' color='black' />qty item:total
        </NavLink>
      </Menu.Menu>
      <br />
      <br />
    </Menu>
)

export default CustNav;