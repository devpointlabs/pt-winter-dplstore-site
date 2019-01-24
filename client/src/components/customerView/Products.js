import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card, Header, Divider, Container } from 'semantic-ui-react'
import ProductPreview from './ProductPreview'
import SimpleSlider from './SimpleSlider'

class Products extends React.Component {
  state = { products: [], }

  componentDidMount() {
    axios.get('/api/products')
      .then(res => {
        this.setState({ products: res.data })
      })
  }

  renderProducts = () => {
    return this.state.products.map( p => (
      <Link to={`/products/${p.id}`}>
        <ProductPreview key={p.id} {...p} remove={this.removeProduct} />
      </Link>
    ))
  }

  render() {
    return (
      <div>
        <br />
        <Container className='featured'>
          <SimpleSlider />
        </Container>
        <br />
        <br />

        <Header textAlign='center'>FEATURED PRODUCTS</Header>
          <Divider />
            <Card.Group nameClass='cards' itemsPerRow={3}>
              { this.renderProducts()}
            </Card.Group>
      </div>
    )
  }
}

export default Products;
