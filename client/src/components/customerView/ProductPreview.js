import React from 'react';
import {Card, Image, Container, Header, Grid} from 'semantic-ui-react'

const ProductPreview = ({ name, price, description, image }) => (
  <Card className='cardPreview'>
    <Image src={image}/>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>${price}</Card.Meta>
      <Card.Description>Description: {description}</Card.Description> 
    </Card.Content>
  </Card>
)

export default ProductPreview;
