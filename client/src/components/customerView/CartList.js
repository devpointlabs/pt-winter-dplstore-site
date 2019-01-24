import React from 'react';
import Product from './Product';


const getOptionsArray = (count) => {
  const array = [];
  for (let i = 0; i < count; i++) {
    array.push(i + 1);
  }

  return array;
};

{Product.map(item=>{
  return <CartItem key={item.id} item={item} value={value} />

})}

const CartList (cart) 
  return this.state.cart.map(p => {
    return (
      <Grid relaxed columns={5}>
          <Grid.Row style={{margin: '20px'}}>
            <Grid.Column>
              <img src={p.image} />
            </Grid.Column>
            <Grid.Column width={5} style={{color: 'lightgrey', fontSize:'12px'}}>
              {/* name of product */}
              {p.name}<br />
              {p.description}
              {/* <Link>{name} - {description}</Link> */}
            </Grid.Column>
            <Grid.Column position='right' width={3}>
              {/* qty of product */}
              <Input style={{width: '35px', height: '35px', fontSize: '12px'}} defaultValue='1'></Input>
            </Grid.Column>
            <Grid.Column style={{color: 'black', fontSize:'12px'}} textAlign='right'>
              {/* price of total item */}
              $ {p.price}
            </Grid.Column>
            <Grid.Column>
              {/* delete button */}
              <Button basic size='mini' content='X' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  })
}

export default CartItem
