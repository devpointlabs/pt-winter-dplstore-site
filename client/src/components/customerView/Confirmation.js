import React, { Component } from 'react';
import { Button, List, Segment, Step, Icon, Container } from 'semantic-ui-react';

class Confirmation extends Component{
    
    SaveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();

        const {values} = this.props
        this.props.submit(values)
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values: { firstName, middleName, lastName, address, city, zipcode, 
           phone, state, email}} = this.props;
     
        return(
            <div>
            <Segment>
            <Step.Group ordered widths="equal">
              <Step completed>
                <Step.Content>
                  <Step.Title>Order details</Step.Title>
                  <Step.Description>Enter your personal details</Step.Description>
                 </Step.Content>
               </Step>
  
               <Step active>
                <Step.Content>
                  <Step.Title>Confirm Personal Details </Step.Title>
                </Step.Content>
               </Step>
  
               <Step disabled>
                <Icon name='credit card' />
                  <Step.Content>
                    <Step.Title>Payment</Step.Title>
                    <Step.Description>Enter credit card information</Step.Description>
                  </Step.Content>
                </Step>
            </Step.Group>
          </Segment>

     <Container>
         <Segment> 
                <h1 className="ui centered">Confirm your Details</h1>
                <p>Click Confirm if the following details have been correctly entered</p>
                <List  onSubmit={this.handleSubmit}>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>First Name: {firstName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Last Name: {lastName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Middle Name: {middleName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='phone square' />
                        <List.Content>Phone: {phone}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content>Email: {email}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='map marker alternate' />
                        <List.Content>{address}</List.Content>
                        <List.Content>{city},{zipcode},{state}</List.Content>
                    </List.Item>
                </List>

                <Button className="dpl-purple" onClick={this.back}>Back</Button>
                <Button className="dpl-purple" onClick={this.SaveAndContinue}>Confirm</Button>
                </Segment>
                </Container>
            </div>
        )
    }
}

export default Confirmation;
