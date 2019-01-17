import React from 'react';
// import { Link, } from 'react-router-dom'
import {Card, Image} from 'semantic-ui-react'

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