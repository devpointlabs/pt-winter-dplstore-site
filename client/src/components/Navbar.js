import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import AdminNav from '../components/adminView/AdminNav'
import CustomerNav from '../components/customerView/CustomerNav'
import { AuthConsumer } from '../providers/AuthProvider';

class Navbar extends Component {
   
  navigation = () => {
    const { user } = this.props.auth ;
    if (user) {
      return (
        <AdminNav />
      )
    } else {
      return (
        <CustomerNav />
      )
    }
  }

  render() {
    return(
      <div>
        { this.navigation() }
      </div>
    )
  }
}

export class ConnectedNavbar extends Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);
