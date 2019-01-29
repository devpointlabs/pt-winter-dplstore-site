import React, { Component } from 'react';
import { throws } from 'assert';
import { Header, Step, Icon, Segment, Input, Label, Divider, Form, Button, Container, Grid } from 'semantic-ui-react';
import BraintreeDrop from './BraintreeDrop';

class PaymentForm extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { amount } = this.props
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

             <Step completed>
              <Step.Content>
                <Step.Title>Confirm Personal Details </Step.Title>
              </Step.Content>
             </Step>

             <Step active>
              <Icon name='credit card' />
                <Step.Content>
                  <Step.Title>Payment</Step.Title>
                  <Step.Description>Enter credit card information</Step.Description>
                </Step.Content>
              </Step>
          </Step.Group>
        </Segment>
        <Container>
        <Grid>
        <Form color='blue' >
            <Segment textAlign='center'>
                <Label color='purple'>Total Order Amount</Label>
                    <Input
                    value={amount}
                    style={{ fontSize: '18px' }}
                    onChange={(e) => this.setState({ amount: e.target.value })}
                    />
                    <Divider />
                    <BraintreeDrop amount={amount} />
            
            </Segment>
            <Button color='purple' onClick={this.back}>Back</Button>
        </Form>
        </Grid>
        </Container>
        </div>
        )
    }
}

export default PaymentForm;
