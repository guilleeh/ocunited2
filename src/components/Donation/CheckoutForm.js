import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
    this.setState({complete: true});
  }

  render() {
    if (this.state.complete) return <p>purchase successful!</p>;
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Submit purchase</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);