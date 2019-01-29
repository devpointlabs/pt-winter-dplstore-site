import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Card, Button, Header, Container, Divider, CardContent } from 'semantic-ui-react';

class AdminInvoices extends React.Component {
  state = { invoices: [], }

  componentDidMount() {
    axios.get('/api/invoices')
      .then( res => this.setState({ invoices: res.data, }))
  }

  renderInvoices = () => {
    return this.state.invoices.map ( i => (
      <Card key={i.id}>
        <Card.Content 
          as={Link}
          to={`/admin/invoices/${i.id}`}
        >
          <Card.Header>
            Order: {i.order_id}
          </Card.Header>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <Header> All Customer Invoices</Header>
        <Divider />
        <br />
        <Card.Group>
          { this.renderInvoices() }
        </Card.Group>
      </div>
    )
  }
}

export default AdminInvoices
