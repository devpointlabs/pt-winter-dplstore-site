import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card, Header, Divider, Container, Image } from 'semantic-ui-react'
// import ProductPreview from './ProductPreview'
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
    const { products } = this.state

    return products.map(p => {
      if (p.hidden === false ) {
        return (
          <Link key={p.id} to={`/products/${p.id}`} >
            <div className='cardPreview' style={{ height: '500px', border: '1px solid lightgrey', padding: '30px' }} >
              <Header textAlign='right' style={{color: 'grey'}} >{p.name} <br /> ${p.price}</Header>
              <Image src={p.image} style={{width: '300px'}}/>
            </div>
          </Link>
        )
      }
    })
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
        <div >
          <Card.Group centered>
            {this.renderProducts()}  
          </Card.Group>
        </div>
      </div>
    )
  }
}

export default Products;
