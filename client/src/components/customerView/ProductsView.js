import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Products extends React.Component {
  state = { products: [], }

  componentDidMount() {
    axios.get('/api/products')
      .then(res => {
        this.setState({ products: res.data })
      })
  }

  

  listProducts = () => {
    return this.state.products.map(p => {
      return (
        <ul key={p.id}>
          <li>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
          </li>
        </ul>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Products</h2>
        {this.listProducts()}
      </div>
    )
  }

}

export default Products;