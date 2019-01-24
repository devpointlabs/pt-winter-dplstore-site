import React from 'react';
import axios from 'axios';
import { Card, Header, Divider, Button, Modal } from 'semantic-ui-react';
import AdminProductPreview from './AdminProductPreview';
import ProductForm from './ProductForm';

class AdminProducts extends React.Component {
  state = { products: [], hidden: false, featured: false };

  componentDidMount() {
    axios.get('/api/products')
      .then( res => this.setState({ products: res.data, }));
  }

  renderProducts = () => {
    return this.state.products.map( p => (
      <AdminProductPreview key={p.id} {...p} remove={this.removeProduct} edit={this.editProduct} hide={this.toggleHide} feature={this.toggleFeatured}/>
    ))
  }

  renderForm = () => {
    return <ProductForm {...this.state.product} submit={this.submitProduct}/>
  }

  submitProduct = (product) => {
    axios.post('/api/products', {product})
      .then(res => {
        this.setState({ product: [res.data, ...this.state.products] })
        window.location.reload();
      })
  }

  editProduct = (id) => {
    const product = this.state.products.find( p => p.id === id )
    return <ProductForm key={product.id} {...product} submit={this.submitEdit}/>
  }
  
  submitEdit = (product) => {
    axios.put(`/api/products/${product.id}`, {product})
      .then(res => {
        this.setState({ product: res.data, })
        window.location.reload();
      })
  }

  removeProduct  = (id) => {
    const remove = window.confirm("Are you sure you want to delete this Product?");
    if (remove)
      axios.delete(`/api/products/${id}`)
        .then( res => {
          const products = this.state.products.filter( p => {
            if (p.id !== id)
              return p;
            return null
          })
          this.setState({ products, });
        })
  }

  toggleHide = (id) => {
    this.setState({hidden: !this.state.hidden})
    this.settingHide(id)
  }

  settingHide = (id) => {
    const { hidden } = this.state
    axios.put(`/api/products/${id}/hidden`, hidden )
    .then( res => {
      this.setState({ product: res.data });
    })
    .catch(err => {
      console.log(err)
    })
  }

  toggleFeatured = (id) => {
    this.setState({featured: !this.state.featured})
    this.settingFeatured(id)
  }

  settingFeatured = (id) => {
    const { featured } = this.state
    axios.put(`/api/products/${id}/featured`, featured )
    .then( res => {
      this.setState({ product: res.data });
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <Header>Products</Header>
        <Modal trigger={<Button>Add Product</Button>}>
          <Modal.Header>Add New Product</Modal.Header>
          <Modal.Content>
            { this.renderForm() }  
          </Modal.Content> 
        </Modal>
        <Divider />
        <Card.Group itemsPerRow={3}>
          { this.renderProducts() }
        </Card.Group>
      </div>
    )
  }
}

export default AdminProducts;
