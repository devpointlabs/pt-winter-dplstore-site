import React, { Component } from "react";
import Slider from "react-slick";
import axios from 'axios'

class SimpleSlider extends Component {
  state = { products: [] }

  componentDidMount() {
    axios.get('/api/products')
      .then(res => {
        this.setState({ products: res.data })
      })
  }

  renderFeatured = () => {
    const { products } = this.state

    return products.map(p => {
      if (p.featured === true) {
        return (
          // grab the image and have it link
          <div key={p.id}>
             <img src={p.image} alt={p.name} />
          </div>
       )
      }
    })
  }

  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      pauseOnHover: true,
    };
    return (
      <div>
        <Slider className='sliderImages' {...settings}>
          {this.renderFeatured()}
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
