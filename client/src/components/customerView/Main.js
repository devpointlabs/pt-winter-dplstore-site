import React, {Component} from 'react';
import { Form, Container, Segment, Step, Icon} from 'semantic-ui-react';
import CheckoutForm from './CheckoutForm';
import PaymentForm from './PaymentForm';
import Confirmation from './Confirmation';
import CheckoutBar from './CheckoutBar';
import PaymentSuccess from './PaymentSuccess';

class Main extends Component {
    state = {
        step: 1, step1: false, step2: false, 
        firstName: "", middleName:"", lastName:"", address:"", 
        city:"", zipcode:'', phone:"", state:"", country:"", email: "",
        amount: 10
    }

    nextStep = () => {
        const { step } = this.state
        // switch (step){
        // case 1: 
        // this.setState({
        //     step1: !this.state.step1 })
        //     break;
        // case 2: 
        // this.setState({
        //     step2: !this.state.step2 })
        //     break;
        // default: break;
        // }
        this.setState({
            // step1: true,
            step : step + 1
        })
    }

    // confirmStep = () => {
    //     const { step } = this.state
    //     this.setState({
    //         step2: true,
    //         step : step + 1
    //     })
    // }

    prevStep = () => {
        const { step } = this.state
        // switch (step){
        // case 1: 
        // this.setState({
        //     step1: !this.state.step1 })
        //     break;
        // case 2: 
        // this.setState({
        //     step2: !this.state.step2 })
        //     break;
        // default: break;
        // }

        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render(){
        const {step} = this.state;
        const {amount, step1} = this.state;
        const { firstName, middleName, lastName, address, city, zipcode, 
                phone, state, country, email } = this.state;
        const values = { firstName, middleName, lastName, address, city, zipcode, 
          country, phone, state, country, email, amount};

        switch(step) {
        case 1:
            return <div>
                    <CheckoutBar status={step1}/>
                    <CheckoutForm 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    />
                    </div>
        case 2:
            return  <div>
                    <CheckoutBar status={this.state.step2}/> 
                    <Confirmation 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
                    </div>
        case 3:
            return  <div>
                    <CheckoutBar status={this.state.step1}/>
                    <PaymentForm 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    amount={amount}
                    />
                    </div>
        // case 4:
            // return <PaymentSuccess />
        }
    }
}

export default Main;
