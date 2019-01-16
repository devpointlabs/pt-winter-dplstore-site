import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card, Header, Divider} from 'semantic-ui-react'
import ProductPreview from './ProductPreview'
import FeaturedProducts from './FeaturedProducts'

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
        <FeaturedProducts />
        <Header textAlign='center'>Featured Products</Header>
          <Divider />
            <Card.Group itemsPerRow={3}>
              { this.renderProducts()}
            </Card.Group>
      </div>
    )
  }
}

export default Products;
