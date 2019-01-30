
import React from 'react'
import BraintreeDrop from './BraintreeDrop';

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
            <BraintreeDrop total = {cartTotal} clearCart={clearCart} history={history} />
          </div>
        </React.Fragment>
    )
}