import React from 'react';
import { Form } from 'semantic-ui-react';

class ProductForm extends React.Component {
  defaultValues = { name: "", price: "", description: "", stock: "", image: "" };
  state = {...this.defaultValues}

  componentDidMount() {
    if (this.props.id) {
      this.setState({...this.props})
    }
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const product = { ...this.state }
    this.props.submit(product)
    this.setState({ ...this.defaultValues})  
  }

  render() {
    const { name, price, description, stock, image, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input 
            fluid
            name="name"
            placeholder="Name of Product"
            label="Name"
            value={name}
            required
            onChange={this.handleChange}
          />
          <Form.Input 
            fluid
            name="price"
            placeholder="Price of Product"
            label="Price"
            value={price}
            required
            onChange={this.handleChange}
          />
          <Form.Input 
            fluid
            name="description"
            placeholder="Description of Product"
            label="Description"
            value={description}
            required
            onChange={this.handleChange}
          />
          <Form.Input 
            fluid
            name="stock"
            placeholder="Stock"
            label="Stock"
            value={stock}
            required
            onChange={this.handleChange}
            type='number'
            min='0'
          />
          <Form.Input 
            fluid
            name="image"
            placeholder="Image"
            label="Image"
            value={image}
            required
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Button color='black' size ='mini'>
          Submit
        </Form.Button>
      </Form>
    )
  }
}

export default ProductForm;
