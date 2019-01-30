import React, {Component} from 'react';
import { Segment, Step, Icon,} from 'semantic-ui-react';

class CheckoutBar extends Component{

  render(){
      const { values } = this.props
      return(
        <Segment>
          <Step.Group ordered widths="equal">
            <Step completed={this.props.status}>
              <Step.Content>
                <Step.Title>Order details</Step.Title>
                <Step.Description>Enter your personal details</Step.Description>
              </Step.Content>
            </Step>

            <Step completed={this.props.status}>
              <Step.Content>
                <Step.Title>Confirm Personal Details </Step.Title>
              </Step.Content>
            </Step>

            <Step >
              <Icon name='credit card' />
              <Step.Content>
                <Step.Title>Payment</Step.Title>
                <Step.Description>Enter credit card information</Step.Description>
              </Step.Content>
            </Step>
          </Step.Group>
        </Segment>
      )
  }
}

export default CheckoutBar;
