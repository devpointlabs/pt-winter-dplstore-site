import React from 'react';
import axios from 'axios';
import { Segment, Header, Item, Grid, Button, Icon } from 'semantic-ui-react';
import Logo from '../../images/DPL_Mark.png';
import ShareButtons from './ShareButtons'; 

class Product extends React.Component {
  state = { product: {}, cartItems: [], edit: false }

  componentDidMount() {
    axios.get('/api/products')
      .then(res => {
        this.setState({ products: res.data })
      })
  }

  handleAdd = () => {
    this.props.handleAdd(this.props.product.id)
  }

  showProduct = () => {
    const { product: { name, price, description, stock, image, id } } = this.state
    return (
      // remove LOGO once NavBar with Logo is created
      <div style={{padding:'5px}'}}>
        <img 
          src={Logo} alt="logo" 
          style={{width:'150px', filter: 'grayscale(100%)'}} 
        />
        <Grid divided stackable columns={2}>
          <Grid.Column>
            <Item>
              <Item.Image src={image} />
              <br/>
              <br/>
              <Header as='h4' color="grey">{name}</Header>
              <Item.Meta>
              <span className='price'>${price}</span>
              </Item.Meta>
              <br/>
              <br/>
              <Button
                icon
                color="purple"
                size="small">
                {/* TODO !!! */}
                onClick = {this.addToCart}
                <Icon name="add to cart" />
              </Button> Instock: {stock}
            </Item>
          </Grid.Column>
          <Grid.Column>
            <Grid celled="internally">
              <Grid.Row>
                <Item.Content>
                  <Item.Extra>
                    <Header 
                      as='h3' 
                      color="grey" 
                      textAlign='center' 
                    >
                      Limited Edition
                    </Header>
                    <br/>
                    <br/>
                    <br/>
                    <Item.Description>
                      {description}
                    </Item.Description>
                    <br/>
                    <br/>
                  </Item.Extra>
                </Item.Content>
              </Grid.Row>   
              <Grid.Row>
                <Item.Content>
                  <Item.Extra>
                    <br/>
                    <br/>
                    <Header 
                      as='h3' 
                      color="grey" 
                      textAlign="left"
                    >
                      SHARE
                    </Header>
                    <br/>
                    {/* TODO !!!! */}
                    {ShareButtons()}
                    {/* {ShareButtons(id)} */}  
                         {/* replace sharebuttons() with sharebuttons(id) */}

                    </Item.Extra>
                    </Item.Content>
                  </Grid.Row>
              
                </Grid>
              </Grid.Column>      
            </Grid>
      </div>
    )
  }

render() {
    // const { edit } = this.state
    return (
        <div>
        <Segment style={{margin: '15px'}}>
            {this.showProduct()}
        </Segment>
        </div>
    )
}
}
export default Product;