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
  // <Grid style={{height: '400px', width: '400px', marginLeft: '30px'}}>
  // <Grid.Row >
  //   <Grid.Column textAlign='right'>
  //     {name} 
  //     <br/>
  //     ${price}
  //   </Grid.Column>
  // </Grid.Row>
  // <Grid.Row columns={1}>
  //   <Image  src={image} centered/>
  // </Grid.Row>
  // </Grid>

  

)

export default ProductPreview;


{/* <div style={{display: 'flex', flexDirection: 'column'}}>
  //content
</div> */}