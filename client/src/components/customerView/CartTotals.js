import React from 'react'
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function CartTotals ({ value, history }){  
    const {cartSubTotal, cartTotal, cartTax, clearCart} = value
      return(
        <React.Fragment>
          <div>
            <h5>
              Subtotal: $ {cartSubTotal}
            </h5>
            <h5>
              Tax: $ {cartTax}
            </h5>
            <h5>
              Total: $ {cartTotal}
            </h5>
            <Link to='/checkout'>
                <Button color="purple">Purchase</Button>
            </Link>
          </div>
        </React.Fragment>
    )
}
