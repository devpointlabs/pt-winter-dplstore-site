import React from 'react'
import { Segment, Header } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';

class PaymentSuccess extends React.Component {
  state = { orders: [] }

  componentDidMount() {
    axios.get('/api/orders')
    .then( res => {
      this.setState({ orders: res.data })
      this.postTransId()
    })
  }
  
  postTransId = () => {
    this.setState({ x: this.state.orders.pop() })
    const order_id = this.state.x.id
    axios.post('/api/invoices', {order_id, transactionId: this.props.location.state.transactionId})
  }
  
  render() {
    const { location: { state } } = this.props
    if (state && state.transactionId) {
      return (
        <Segment basic textAlign='center'>
          <Header as='h1' color='green'> Thank you for your purchse</Header>
          <p> You have been charged: ${state.amount} </p>
          <p> Your transaction id is: {state.transactionId} </p>
          <Link to='/'>Go Home</Link>
        </Segment>
      )
    } else {
      return (<Redirect to='/' />)
    }
  }
}

export default PaymentSuccess
