import React, { Component } from 'react';
import { Button, Divider, Grid, Header, Input } from 'semantic-ui-react'
// import Products from './Products';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class Cart extends Component {
  state = { cartItems: [], };

  componentDidMount() {
    axios.get('/api/products')
      .then(res => {
        this.setState({ products: res.data })
      })
  }

  // addToCart = (id) => {
  //   let cart = this.state.cart
  //   cart.items = cart.items+ + 1 || 1
  //   this.setState( { cart })
  // }

  // removeFromCart = (itemId) => {
  //   const items = this.state.items.filter( item.id => {
  //     if (items.id !== id)
  //     return item
  // });
  //   this.setState({ items });
  // );

  showCart = () => {
    return this.state.products.map(p => {
      return (
        <Grid relaxed columns={5}>
            <Grid.Row style={{margin: '20px'}}>
              <Grid.Column>
                <img src={p.image} />
              </Grid.Column>
              <Grid.Column style={{color: 'lightgrey', fontSize:'12px'}}>
                {/* name of product */}
                {p.name}<br />
                {p.description}
                {/* <Link>{name} - {description}</Link> */}
              </Grid.Column>
              <Grid.Column position='right'>
                {/* qty of product */}
                <Input style={{width: '35px', height: '35px', fontSize: '12px'}} defaultValue='1'></Input>
              </Grid.Column>
              <Grid.Column style={{color: 'black', fontSize:'12px'}} textAlign='right'>
                {/* price of total item */}
                $ {p.price}
              </Grid.Column>
              <Grid.Column>
                {/* delete button */}
                <Button onClick={this.removeFromCart} basic size='mini' content='X' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
      )
    })
  }

  getTotal (products) {
    return this.state.reduce((result, price) => products.qty * products.price + result, 0);
  }

  // const mapStateToProps = state => {
  //   return {
  //     totalCost: getTotalCost(state.products)
  //   }
  // }

  render() {
    // const {price} = this.state
    return (
      <div>
      <br />
        <Header as='h2' textAlign='center' color='grey'>SUB TOTAL</Header>
        <br />
        <Divider />
          {this.showCart()}
        <Divider />
        <p style={{textAlign: 'right'}}>
        <h3>Subtotal : $ 
          {this.getTotal}
          {/* {console.log(elements.joins(price)} */}
        </h3>
        <br />
        <NavLink exact to='/customer/carts'>
        <Button basic content='Checkout' position='right' />
      </NavLink>
      </p>
      <br />
      </div>
    )
  }
}

export default Cart;
