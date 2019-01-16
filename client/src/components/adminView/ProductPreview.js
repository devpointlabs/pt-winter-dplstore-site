import React from 'react';
// import { Link, } from 'react-router-dom'
import {Card, Button, Image} from 'semantic-ui-react'

const ProductPreview = ({ name, price, description, stock, image, id, remove }) => (
  <Card>
    <Image src={image}/>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>${price}</Card.Meta>
      <Card.Meta>Items: {stock}</Card.Meta>
      <Card.Description>Description: {description}</Card.Description> 
    </Card.Content>
    <Card.Content extra>
      <Button
        // as={Link}
        // to={ }
      >
        Edit Product
      </Button>
      <Button
        // as={Link}
        // to={ }
        onClick={() => remove(id)}
      >
        Delete Product
      </Button>
    </Card.Content>
  </Card>
)

export default ProductPreview;