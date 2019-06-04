import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false, 
                  personal_information : this.props.personal_information,
                  anon : this.props.anon,
                  amount : this.props.amount,
                  frequency : this.props.frequency,
                  next: this.props.next,
                  current: this.props.current};
    this.submit = this.submit.bind(this);
    console.log(this.state);
  }


  async submit(ev) {
    console.log(this.state.personal_information);
    console.log(this.state.amount);
    let token =  await this.props.stripe.createToken({name: "Name"})
    let response = await fetch("/charge", {
      method: "post",
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({id: token, data: this.state.personal_information, donations: this.state.amount, anon: this.state.anon}),
    });
  
    if (response.ok) {
      this.setState({complete: true});
    }
  }

  render() {
    if (this.state.complete) {
      this.state.next();
    }
    
    return (
      <div className="checkout">
        <br/>
        <h3 className="donationDescription">Please Enter Card Details</h3>
        <CardElement className="cardElement" />
        <br/>
        <button onClick={this.submit}>Process Donation</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);