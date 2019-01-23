import React from 'react'
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import { Dimmer, Loader, Segment, } from 'semantic-ui-react'
import BraintreeDropin from 'braintree-dropin-react'
import braintree from 'braintree-web-drop-in'
import BraintreeSubmitButton from './BraintreeSubmitButton'

class BraintreeDrop extends React.Component {
  state = { 
            loaded: false, 
            token: '', 
            redirect: false, 
            transactionId:'' ,
          }

  componentDidMount(){
    axios.get('/api/braintree_token')
      .then(res => {
        this.setState({ token: res.data, loaded: true })
      })
    .catch(err => {
      console.log('Error. Try again later!')
    })
  }

  handlePaymentMethod = (payload) => {
    const { amount } = this.props

    axios.post('/api/payment', {amount, ...payload})
      .then(res => {
        this.setState({ transactionId: res.data, redirect: true })
      })
      .catch(err => {
        console.log('Error Posting Payment')
        window.location.reload()
      })
  }

  render(){
    const { loaded, token, redirect, transactionId } = this.state;
    if(redirect)
      return(
        <Redirect to={{
          pathname: '/payment_success', 
          state: { amount: this.props.amount, transactionId }
        }} />
      )

    if(loaded)
    return (
      <Segment basic textAlign='center'>
        <BraintreeDropin 
          braintree={braintree}
          authorizationToken={token}
          handlePaymentMethod={this.handlePaymentMethod}
          renderSubmitButton={BraintreeSubmitButton}
        />
      </Segment>
    )
    else
      return (
        <Dimmer active>
          <Loader>Loading Payments. Please Wait...</Loader>
        </Dimmer>
      )
  }
}

export default BraintreeDrop;