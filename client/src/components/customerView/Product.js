import React from 'react';
import axios from 'axios';
import {Header, Grid, Button, Icon, Container, Image, Divider } from 'semantic-ui-react';
import ShareButtons from './ShareButtons'; 

class Product extends React.Component {
  state = { product: {}, cartItems: [], edit: false }

  componentDidMount() {
    axios.get(`/api/products/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ product: res.data })
      })
  }

  handleAdd = () => {
    this.props.handleAdd(this.props.product.id)
  }

  showProduct = () => {
    const { product: { name, price, description, stock, image, id, }, inCart } = this.state
    return (
      <div >
        <Grid celled='internally' stackable columns={2}>
          <Grid.Column>
            <Grid.Row>
              <Image centered src={image} />
            </Grid.Row>
            <Grid.Row >
              <Header textAlign='center' as='h4' color="grey">{name} <br /> ${price}</Header>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column style={{padding: '20px'}}>
              <Grid.Row>
                <Header 
                  as='h2' 
                  color="grey" 
                  textAlign='center' 
                >
                  Limited Edition
                </Header>
              </Grid.Row>
              <br/>
              <br/>
              <br/>
              <Grid.Row> 
                <Header color="grey" as='h4' >
                  {name}
                  <br />
                  - {description}
                  <br /><br /><br /><br /><br /><br /><br />
                </Header>
                Stock: {stock}
              </Grid.Row>
              <br />
              <Grid.Row> 
                <Button
                  disable={inCart ? true : false }
                  onClick = {() => this.props.value.addToCart(id)}
                  icon
                  size="small"
                >
                {inCart ? (<p>in cart</p>) : (<i />) } 
                <Icon name="add to cart" /> Add to Cart
              </Button> 
              </Grid.Row>
              <Divider />
              <Grid.Row>
                <Header 
                  as='h2' 
                  color="grey" 
                  textAlign="centered"
                >
                  S H A R E
                </Header>
                  {ShareButtons()}
              </Grid.Row>
              </Grid.Column>      
            </Grid>
            <br /><br /><br /><br /><br />
      </div>
    )
  }

  render() {
    return (
        <div>
        <Container>
            {this.showProduct()}
        </Container>
        </div>
    )
  }
}

export default Product;
