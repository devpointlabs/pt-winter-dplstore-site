import React, {Component} from 'react';
// import { Form, Container, Segment, Step, Icon} from 'semantic-ui-react';
import CheckoutForm from './CheckoutForm';
import PaymentForm from './PaymentForm';
import Confirmation from './Confirmation';
import CheckoutBar from './CheckoutBar';
import PaymentSuccess from './PaymentSuccess';
import axios from 'axios'

class Main extends Component {
    // state = {
    //     step: 1,
    //     firstName: "", middleName:"", lastName:"", address:"", 
    //     city:"", zipcode:'', phone:"", state:"", country:"", email: "",
    //     amount: 10
    // }

    state = { order: {}, step: 1, amount: 14 }

    submitOrder = (order) => {
        axios.post('/api/orders', {order})
          .then(res => {
            this.setState({ order:  {} })
            // window.location.reload();
          })
      }
   
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
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
          country, phone, state, email, amount};

        switch(step) {
        case 1:
            return <div>
                    {/* <CheckoutBar/> */}
                    <CheckoutForm 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    />
                    </div>
        case 2:
            return  <div>
                    {/* <CheckoutBar/>  */}
                    <Confirmation 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    submit={this.submitOrder}
                    />
                    </div>
        case 3:
            return  <div>
                    {/* <CheckoutBar/> */}
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
