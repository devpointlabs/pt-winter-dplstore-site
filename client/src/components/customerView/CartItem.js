import React from 'react';

class CartItem extends React.Component (
  state = { itemsInCart: [], totalPrice: 0 }

  componentWillReceiveProps() {
    if (nextProps.itemsInCart != this.state.itemsInCart) {
        this.setState({itemsInCart : nextProps.itemsInCart});
    }
  }

  deleteItemFromCart = (i) => {
    var itemsLeft = this.state.itemsInCart.filter((x,ind) => ind != i);
    this.props.deleteItemFromCart(i);
    console.log("itemsLeft === ", itemsLeft);
    this.setState({itemsInCart : itemsLeft});
  }

  render() {
    console.log("Cart /");
    console.log("this.props == ",this.props);
    var itemsInTable;

    var itemsInCart = this.state.itemsInCart;
    var totalPrice = 0;

    if (!itemsInCart.length) {
        itemsInTable =  (<tr>
                            <td colSpan="5">??</td>
                        </tr>);
    } 
    else {
        totalPrice = 0;
        itemsInTable = (itemsInCart.map((item, i) => {
                            totalPrice += +item.price;
                            console.log("totalPrice==",totalPrice);
                            return (
                                <tr key={i}>
                                    <td>{item.title}</td>
                                    <td><img src={imgPath + item.image} /></td>
                                    <td>1 шт.</td>
                                    <td>{item.price} руб.</td>
                                    <td><button className="cart__table__delete-button" onClick={this.deleteItemFromCart.bind(this, i)}><i className="fa fa-times"></i></button></td>
                                </tr>);
            }));
    }

    return (
        <section className="cart">
            <div className="container">
                <div className="row">
                    <div className="cart__title-container">
                        <h2 className="cart__title-container__title">
                            Cart
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <table className="cart__table">
                            <tbody>
                                <tr>
                                    <th colSpan="5">Cart</th>
                                </tr>                           
                                {itemsInTable}  
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Price:</td>
                                    <td>{totalPrice} руб.</td>
                                    <td></td>
                                </tr>                                                                   
                            </tbody>
                        </table>
                        <div className="cart__next-button-container">
                            <Link to="/checkout"><button className="cart__next-button">Button</button></Link>
                        </div>
                    </div>              
                </div>
            </div>
        </section>
    );
}
}

)

export default CartItem;
