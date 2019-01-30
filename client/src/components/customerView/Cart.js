import React, { Component } from 'react'
// import Title from '../Title'
import EmptyCart from './EmptyCart'
// import CartColumns from './CartColumns'
import { ProductConsumer } from '../../providers/ProductProvider'
import CartList from './CartList'
import CartTotals from './CartTotals'
import { Button, Divider, Grid, Header, Input } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import BrainTreeDrop from '../../components/customerView/BraintreeDrop';


class Cart extends Component {
  state = { products: [], cart: [], inCart: false, cartSubTotal: 0, cartTax: 0, cartTotal: 0 }

  render() {
    return (
      <div style={{margin:'70px'}}>
      <br />
        <Header as='h2' textAlign='center' color='grey'>SUB TOTAL</Header>
        <br />
        <Divider />
        <ProductConsumer>
          {value=>{
            const {cart} = value
            if(cart.length>0){
              return(
                <React.Fragment>
                <CartList value={value}/>
                <CartTotals  value={value} history={this.props.history} />
                </React.Fragment>
                )
              } 
              else {
                return  <EmptyCart />
            } 
          }}
        </ProductConsumer>
        <br />
          <BrainTreeDrop />
        <Divider />
      </div>
    )
  }
}

export default Cart