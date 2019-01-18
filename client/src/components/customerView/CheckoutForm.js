import React from 'react';
import { Form, Container, Segment, Step, Icon} from 'semantic-ui-react';

class CheckoutForm extends React.Component {
  defaultValues = { firstName: "", middleName:"", lastName:"", address:"", 
  city:"", zipcode:'', phone:"", state:"", country:""};
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
    const customer = { ...this.state }
    this.props.submit(customer)
    this.setState({ ...this.defaultValues})
    
  }


  render() {
    const { firstName, middleName, lastName, address, city, zipcode, 
      phone, state, country } = this.state;
    const options = [
      { key: 's', text: 'Small', value: 'small' },
      { key: 'm', text: 'Medium', value: 'medium' },
      { key: 'l', text: 'Large', value: 'large' },
      { key: 'unisex', text: 'Unisex', value: 'unisex' },
    ]
    return (

      <Container>
      <Segment>
      <Step.Group ordered widths="equal">
      <Step active>
        <Icon name='credit card' />
          <Step.Content>
            <Step.Title>Payment</Step.Title>
            <Step.Description>Enter billing information</Step.Description>
          </Step.Content>
        </Step>

        <Step active>
          <Step.Content>
            <Step.Title>Order</Step.Title>
            <Step.Description>Enter your shipping information</Step.Description>
          </Step.Content>
        </Step>

        <Step completed>
            <Step.Content>
            <Step.Title>Confirm Order</Step.Title>
          </Step.Content>
        </Step>
        </Step.Group>
      </Segment>

      <Segment>
      <Form onSubmit={this.handleSubmit}>
    
        <Form.Group>
     
          <Form.Input 
            fluid
            width={4}
            name="firstName"
            placeholder="First Name"
            label="First Name"
            value={firstName}
            required
            onChange={this.handleChange}
          />

          <Form.Input 
            fluid
            name="middleName"
            width={3}
            placeholder="Middle Name (optional)"
            label="Middle Name"
            value={middleName}
            onChange={this.handleChange}
          />

          <Form.Input 
            fluid
            name="lastName"
            width={4}
            placeholder="Last Name"
            label="Last Name"
            value={lastName}
            required
            onChange={this.handleChange}
          />
       
        </Form.Group>

        <Form.Group>
          <Form.Input 
            fluid
            name="address"
            width={6}
            placeholder="Address"
            label="Address"
            value={address}
            required
            onChange={this.handleChange}
          />
          <Form.Input 
            fluid
            name="city"
            width={3}
            placeholder="City"
            label="City"
            value={city}
            required
            onChange={this.handleChange}
            
          />
          <Form.Input 
            fluid
            name="zipcode"
            width={2}
            placeholder="Zipcode"
            label="Zipcode"
            value={zipcode}
            required
            onChange={this.handleChange}
            type='number'
            min='0'
          />
        </Form.Group>

        <Form.Group>
        <Form.Input 
            fluid
            width={2}
            name="state"
            width={2}
            placeholder="State"
            label="State"
            value={state}
            required
            onChange={this.handleChange}     
          />  
        <Form.Input 
            fluid
            width={3}
            name="Country"
            width={2}
            placeholder="Country"
            label="Country"
            value={country}
            required
            onChange={this.handleChange}     
          /> 
         <Form.Input 
            fluid
            name="phone"
            width={3}
            placeholder="(xxx)-xxx-xxxx"
            label="Phone"
            value={phone}
            required
            onChange={this.handleChange}     
          /> 
        </Form.Group>

        <Form.Group>
          <Form.Select 
            fluid label='Size' 
            options={options} 
            placeholder='Size'
            width={2} 
          />
        </Form.Group>
   

        <Form.Button color='purple' size ='mini'>
          Submit
        </Form.Button>

      </Form>
      </Segment>
      </Container>
    )
  }



}

export default CheckoutForm;