import React, { Component } from "react";
import Slider from "react-slick";
// import blue from '../../images/blue.png';
// import pink from '../../images/pink.png';
// import green from '../../images/green.png';
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
      fade: true,
      infinite: true,
      // speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      pauseOnHover: true,
    };
    return (
      <div>
        {/* <h2> Single Item</h2> */}
        <Slider className='sliderImages' {...settings}>
          <div>
            <img src="https://robohash.org/providentsimiliquevelit.png" alt="Italian Trulli" /> 
          </div>
          <div>
            <img src="https://robohash.org/facereeosid.png" alt="Girl in a jacket" />
          </div>
          <div>
            <img src='https://robohash.org/architectoomnisdeleniti.png' alt="Flowers in Chania" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
