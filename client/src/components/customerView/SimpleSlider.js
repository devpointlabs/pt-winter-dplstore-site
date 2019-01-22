import React, { Component } from "react";
import Slider from "react-slick";
import axios from 'axios'
import { Divider } from "semantic-ui-react";


class SimpleSlider extends Component {
  state = { products: [] }

  componentDidMount() {
    axios.get('/api/products')
      .then(res => {
        this.setState({ products: res.data })
      })
  }

  renderFeatured = () => {
    const products = this.state.products.filter ( p => { 

      if (p.featured === true ) {
        return this.state.products.map( p => {
          return (
            // grab the image and have it link
            <Divider>
              <div>
                <img src={p.img} alt={p.name} /> 
              </div>
              <div>
                <img src={p.img} alt={p.name} />
              </div>
              <div>
                <img src={p.img} alt={p.name} />
              </div>
            </Divider>
          )
        })
      }
    })
  }


  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        {/* <h2> Single Item</h2> */}
        <Slider className='sliderImages' {...settings}>
          {this.renderFeatured()}
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;