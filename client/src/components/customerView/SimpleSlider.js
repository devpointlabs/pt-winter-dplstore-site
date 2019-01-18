import React, { Component } from "react";
import Slider from "react-slick";
import blue from '../../Images/blue.png'
import pink from '../../Images/pink.png'
import green from '../../Images/green.png'
import axios from 'axios'


class SimpleSlider extends Component {
  state = { products: [], }

  componentDidMount() {
    axios.get('/api/products')
      .then(res => {
        this.setState({ products: res.data })
      })
  }

  renderFeatured = () => {
// if boolen featured = true render item image in slider
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
          <div>
            <img src={blue} alt="Italian Trulli" /> 
          </div>
          <div>
            <img src={pink} alt="Girl in a jacket" />
          </div>
          <div>
            <img src={green} alt="Flowers in Chania" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;