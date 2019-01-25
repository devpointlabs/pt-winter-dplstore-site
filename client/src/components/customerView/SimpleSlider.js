import React, { Component } from "react";
import Slider from "react-slick";
import axios from 'axios'
import { Card } from "semantic-ui-react";
import { Link } from 'react-router-dom'


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
          <div>
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
