import React from 'react';
import { Item, Segment,  } from 'semantic-ui-react';

const ProductInvoice = ({ name, price, image }) => (
  <Segment>
    <Item.Group>
      <Item>
        <Item.Image size='tiny' src={image} />
        <Item.Content>
          <Item.Header>{name}</Item.Header>
          <Item.Meta>{price}</Item.Meta>
        </Item.Content>
      </Item>
    </Item.Group>
  </Segment>
)

export default ProductInvoice;