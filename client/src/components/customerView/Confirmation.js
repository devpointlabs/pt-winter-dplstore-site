import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

class Confirmation extends Component{
    
    SaveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values: { firstName, middleName, lastName, address, city, zipcode, 
          country, phone, state, email}} = this.props;

        return(
            <div>
                <h1 className="ui centered">Confirm your Details</h1>
                <p>Click Confirm if the following details have been correctly entered</p>
                <List>
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
                        <List.Content>{city}</List.Content>
                        <List.Content>{city},{zipcode},{state},{country}</List.Content>
                    </List.Item>
                </List>

                <Button color='purple' onClick={this.back}>Back</Button>
                <Button color='purple' onClick={this.SaveAndContinue}>Confirm</Button>
            </div>
        )
    }
}

export default Confirmation;