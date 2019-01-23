import React from 'react'
import { Segment, Header } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'

const PaymentSuccess = ({location:  { state }}) => {
  if (state && state.transactionId)
  return(
    <Segment basic textAlign='center'>
      <Header as='h1' color='green'> Thank you for your purchse</Header>
      <p> You have been charged: ${state.amount} </p>
      <p> Your transaction id is: {state.transactionId} </p>
      <Link to ='/'>Go Home</Link>
    </Segment>
  )
  else
  return (<Redirect to='/' />)
}

export default PaymentSuccess