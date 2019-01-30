import React from 'react'
import { Button, Grid, Input } from 'semantic-ui-react'

export default function CartList({item, value}) {
  const { id, name, image, price, total, count } = item
  const { increment, decrement, removeItem } = value
    return (
      <div>
        <br />
      <Grid relaxed columns={3}>
        <Grid.Row style={{margin: '20px'}}>
          <Grid.Column position='right'>
            <img 
              src={image}
              style={{width:"100px"}}
              alt="product"
            />  
          </Grid.Column>
        <Grid.Column verticalAlign='middle' style={{color: 'lightgrey', fontSize: '12px'}}>
          {name}
        </Grid.Column>
        <Grid.Column textAlign='right' verticalAlign='middle'>
          $ {price}&nbsp;&nbsp;&nbsp;&nbsp;
          <Button onClick={()=>removeItem(id)} basic size='mini'>
            <i className="fas fa-trash">X</i>
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
  )
}