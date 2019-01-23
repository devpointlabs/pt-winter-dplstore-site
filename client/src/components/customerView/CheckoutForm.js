import React from 'react';
import { Form, Container, Segment, Step, Icon, Button} from 'semantic-ui-react';

class CheckoutForm extends React.Component {

  saveAndContinue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    const { values } = this.props;

    return (

      <Container>
        <Segment>
          <Form onSubmit={this.handleSubmit}>

            <Form.Group>

              <Form.Input 
                fluid
                width={4}
                name="firstName"
                placeholder="First Name"
                label="First Name"
                defaultValue={values.firstName}
                required
                onChange={this.props.handleChange('firstName')}
              />

              <Form.Input 
                fluid
                name="middleName"
                width={3}
                placeholder="Middle Name (optional)"
                label="Middle Name"
                defaultValue={values.middleName}
                onChange={this.props.handleChange('middleName')}
              />

              <Form.Input 
                fluid
                name="lastName"
                width={4}
                placeholder="Last Name"
                label="Last Name"
                defaultValue={values.lastName}
                required
                onChange={this.props.handleChange('lastName')}
              />

            </Form.Group>

            <Form.Group>
              <Form.Input 
                fluid
                name="address"
                width={6}
                placeholder="Address"
                label="Address"
                defaultValue={values.address}
                required
                onChange={this.props.handleChange('address')}
              />
              <Form.Input 
                fluid
                name="city"
                width={3}
                placeholder="City"
                label="City"
                defaultValue={values.city}
                required
                onChange={this.props.handleChange('city')}

              />
              <Form.Input 
                fluid
                name="zipcode"
                width={2}
                placeholder="Zipcode"
                label="Zipcode"
                defaultValue={values.zipcode}
                required
                onChange={this.props.handleChange('zipcode')}
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
                defaultValue={values.state}
                required
                onChange={this.props.handleChange('state')}   
              />  
            <Form.Input 
                fluid
                width={3}
                name="Country"
                width={2}
                placeholder="Country"
                label="Country"
                defaultValue={values.country}
                required
                onChange={this.props.handleChange('country')} 
              /> 
             <Form.Input 
                fluid
                name="phone"
                width={3}
                placeholder="(xxx)-xxx-xxxx"
                label="Phone"
                defaultValue={values.phone}
                required
                onChange={this.handleChange} 
                onChange={this.props.handleChange('phone')}    
              /> 

            <Form.Input 
                fluid
                name="email"
                width={4}
                placeholder="your@email.com"
                label="Email"
                defaultValue={values.email}
                required
                onChange={this.handleChange} 
                onChange={this.props.handleChange('email')}    
              />    
            </Form.Group>

            <Button color='purple' onClick={this.saveAndContinue}>Save And Continue </Button>

          </Form>
        </Segment>
      </Container>
    )
  }
}

export default CheckoutForm;
