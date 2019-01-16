import React from 'react';
import axios from 'axios';
import { Card, Header, Divider, Button, Modal } from 'semantic-ui-react';
import ProductPreview from './ProductPreview';
import ProductForm from './ProductForm';

class Products extends React.Component {
  state = { products: [], };

  componentDidMount() {
    axios.get('/api/products')
      .then( res => this.setState({ products: res.data, }));
  }

  renderProducts = () => {
    return this.state.products.map( p => (
      <ProductPreview key={p.id} {...p} remove={this.removeProduct} />
    ))
  }

  renderForm = () => {
    return <ProductForm {...this.state.product} submit={this.submitProduct}/>
  }

  submitProduct = (product) => {
    axios.post('/api/products', {product})
      .then(res => {
        this.setState({ product: [res.data, ...this.state.products] })
      })
  }

  removeProduct  = (id) => {
    const remove = window.confirm("Are you sure you want to delete this Product?");
    // const {id} = this.props.match.params;
    if (remove)
      axios.delete(`/api/products/${id}/`)
        .then( res => {
          const products = this.state.products.filter( p => {
            if (p.id !== id)
              return p;
              return null
          })
          this.setState({ products, });
        })
  }



  render() {
    return (
      <div>
        <Header>Products</Header>
        
        <Modal trigger={<Button>Add Product</Button>}>
          <Modal.Content>
            { this.renderForm()}  
          </Modal.Content> 
        </Modal>
        <Divider />
        <Card.Group itemsPerRow={3}>
          { this.renderProducts()}
        </Card.Group>
      </div>
    )
  }

}

export default Products;