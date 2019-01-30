import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Segment, Header, Item, Grid, Button, Icon } from 'semantic-ui-react';
import ShareButtons from './ShareButtons'; 
import { ProductConsumer } from '../../providers/ProductProvider';
import PropTypes from 'prop-types'

class Product extends React.Component {
  state = { product: {}, cart: [], inCart: false, edit: false }

  componentDidMount() {
    axios.get(`/api/products/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ product: res.data })
      })
  }

  showProduct = () => {
    const { product: { name, price, description, stock, image, id }, inCart } = this.state
    return (
      <div style={{padding:'5px}'}}>
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
              {this.handleClick}
                <Button
                  disable={inCart ? true : false }
                  onClick = {() => this.props.value.addToCart(id)}
                  icon
                  color="purple"
                  size="small"
                >
                {inCart ? (<p>in cart</p>) : (<i />) }
                <Icon name="add to cart" />
              </Button>
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
    return (
        <div>
        <Segment style={{margin: '15px'}}>
            {this.showProduct()}
        </Segment>
        </div>
    )
  }
}

Product.propTypes = {
  product:PropTypes.shape({
      id:PropTypes.number,
      img:PropTypes.string,
      title:PropTypes.string,
      price:PropTypes.number,
      inCart:PropTypes.bool
  }).isRequired
}

const ConnectedProduct = (props) => (
  <ProductConsumer>
    { value => 
      <Product { ...props } value={value} />
    }
  </ProductConsumer>
)

export default ConnectedProduct;
