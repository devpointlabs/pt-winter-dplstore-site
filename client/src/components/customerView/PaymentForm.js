import React, { Component } from 'react';
import { throws } from 'assert';
import { Header, Segment, Input, Label, Divider, Form, Button } from 'semantic-ui-react';
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
        <Form color='blue' >
            <Segment textAlign='center'>
                <Label color='green'>Total Order Amount</Label>
                    <Input
                    value={amount}
                    style={{ fontSize: '18px' }}
                    onChange={(e) => this.setState({ amount: e.target.value })}
                    />
                    <Divider />
                    <BraintreeDrop amount={amount} />
            </Segment>
            <Button color='purple' onClick={this.back}>Back</Button>
            {/* <Button color='purple' onClick={this.saveAndContinue}>Save And Continue </Button> */}
        </Form>
        )
    }
}

export default PaymentForm;
