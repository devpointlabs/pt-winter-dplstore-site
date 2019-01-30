import React from 'react'
import { Button, Grid, Input } from 'semantic-ui-react'

export default function CartList({item, value}) {
  const { id, name, image, price, total, count } = item
  const { increment, decrement, removeItem } = value
    return (
      <div>
      <Grid relaxed columns={4}>
        <Grid.Row style={{margion: '20px'}}>
          <Grid.Column position='right'>
            <img 
              src={image}
              style={{width:"5rem",height:"5rem"}}
              alt="product"
            />  
          </Grid.Column>
        <Grid.Column verticalAlign='middle' style={{color: 'lightgrey', fontSize: '12px'}}>
          {name}
        </Grid.Column>
        <Grid.Column c textAlign='right'>
          $ {price}
        </Grid.Column>
        <Grid.Column>
          <Button onClick={()=>removeItem(id)} basic size='mini'>
            <i className="fas fa-trash">X</i>
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
  )
}