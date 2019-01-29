import React from 'react';
import axios from 'axios';
import { Header, Segment, Container,  Divider, Button, Grid, Icon, Card, } from 'semantic-ui-react';
import ProductInvoice from './ProductInvoice';
import OrderInvoice from './OrderInvoice';

class AdminInvoice extends React.Component {
  state = { invoice: {}, orders: [], products:[] }

  componentDidMount() {
    const { id, } = this.props.match.params;
    axios.get(`/api/invoices/${id}`)
      .then( res => {
        this.setState({ invoice: res.data, })
      })
    axios.get('/api/products')
      .then( res => this.setState({ products: res.data, }));
    axios.get('/api/orders')
      .then( res => this.setState({ orders: res.data, }));
  }

  renderProduct = (product_id) => {
    const product = this.state.products.find( p => p.id === product_id);
    return <ProductInvoice key={product.id} {...product} />
  }
  
  renderOrder = (order_id) => {
    const order = this.state.orders.find( o => o.id === order_id);
    debugger
    return <OrderInvoice key={order.id} {...order} />
  }

  render () {
    const { product_id, order_id } = this.state.invoice;
    if (product_id) {
      return(
        <div>
          <Header>Order #{order_id}</Header>
          <Container>
            {this.renderOrder(order_id)}
            {this.renderProduct(product_id)}
          </Container>
        </div>
      )
    } else {
      return(
        <div>Loading</div>
      )
    }
  }
}

export default AdminInvoice;
