import React from 'react';
import './index.css';
import Stepper from 'react-stepper-horizontal';
import logo from './logo.png'

//dependencies for Stripe
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import { Script } from 'vm';


class Donation extends React.Component{
    constructor() {
        super();

        this.state = {
            values: [],
            currentStep: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        let options = e.target.options;
        let selectedOptions = [];
        // console.log(options)

        for(let i = 0; i < options.length; i++) {
            if( options[i].selected ) {
                selectedOptions.push(options[i].value);
            }
        }

        this.setState({values: selectedOptions, currentStep: this.state.currentStep});
        console.log(this.state.values)
    }


    closeModal = () =>{
        this.props.hide_modal();
    }

    next=()=>{
        this.setState({values: this.state.values, currentStep: this.state.currentStep + 1})
    }

    previous=()=>{
        this.setState({values: this.state.values, currentStep: this.state.currentStep - 1});
    }

    generateDays(){
        let output=[]
        for (let i=1; i<=31; i++){
            output.push(<option> {i} </option>);
        }
        return output;
    }

    renderStepper(){
        return(
            <div>
            <Stepper
                    steps={ [{title: 'Select Donation Amount'}, {title: 'Add Personal Information'}, {title: 'Add Payment Information'}, {title: 'Submit Donation'}] }
                    activeStep={this.state.currentStep}
                    activeColor="#ffb547"
                    completeColor="#ffb547"
                    circleFontColor="transparent"
                    defaultColor="#dddddd"
                    defaultBarColor = "#c1c1c1"
                    titleFontSize = "10px"
                    completeBarColor = "#ffb547"
                     />
            </div>
        );
    }
    renderField(){
        switch (this.state.currentStep){
            case 0:
                return(
                    <div>
                        {this.renderStepper()}
                        <div className="buttongroup">
                            <button>$50</button>
                            <button>$100</button>
                            <button>$250</button>
                            <button>$500</button>
                        </div>
                        <form className="lineup">
                            <label for="donationAmt">$</label>
                            <input id="donationAmt" type="number" placeholder="0.00" name="donationAmt" min="1" step="0.01" />
                        </form>
                        <div className="lineup">
                            <select multiple={true} value={this.state.values} onChange={this.handleChange}>
                                <option value="general">Donate to General</option>
                                <option value="neighborhood">Donate to Neighborhoods</option>
                                <option value="homelessness">Donate to Homelessness</option>
                                <option value="domestic-abuse">Donate to Domestic Abuse</option>
                                <option value="foster">Donate to Foster/Adopt</option>
                                <option value="fullerton">Donate to Love Fullerton</option>
                                <option value="Placentia">Donate to Love Placentia</option>
                                <option value="Orange">Donate to Love Orange</option>
                                <option value="buena-park">Donate to Love Buena Park</option>
                                <option value="aneheim">Donate to Love Anaheim</option>
                                <option value="brea">Donate to Love Brea</option>
                                <option value="tustin">Donate to Love Tustin</option>
                                <option value="yorda-linda">Donate to Love Yorba Linda</option>
                            </select>
                        </div>
                        <div className="lineup">
                            <select>
                                <option>One Time</option>
                                <option>Monthly</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                        <div className="ModalNav">
                            <button className="cancel" onClick={this.closeModal}>Cancel</button>
                            <button className="next" onClick={this.next}>Next</button>
                        </div>
                    </div>
                );
            case 1:
                return(
                    <div className="personal_info">
                        {this.renderStepper()}
                        <div className="personalinfo">
                            <input placeholder="First Name" />
                            <input placeholder="Last Name" />
                            <input type="email" placeholder="Email" />
                            <input placeholder="Phone Number (Optional)" />
                            <input placeholder="Street Address" />
                            <input placeholder="City" />
                            <input placeholder="State" />
                            <input type="number" placeholder="Postal Code" min="00501"/>
                            <input placeholder="Country" />
                            <br></br>
                            <input type="checkbox" name="anonymity"/>Donate Anonymously
                            <div className="ModalNav">
                                <button onClick={this.closeModal}>Cancel</button>
                                <button onClick={this.previous}>Previous</button>
                                <button onClick={this.next}>Next</button>
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return(
                   <div>
                        {this.renderStepper()}

                        <div className="card-details">
                        <StripeProvider apiKey="pk_test_mVIHxjDBueW9FOhHUrp3uD7d0042aj7bq6">
                        <div className="oc-united-stripe-element">
                         <Elements>
                        <CheckoutForm />
                        </Elements>
                        </div>
                        </StripeProvider>
                        </div>


                        <div className="ModalNav">
                            <button onClick={this.closeModal}>Cancel</button>
                            <button onClick={this.previous}>Previous</button>
                            <button onClick={this.next}>Next</button>
                        </div>
                    </div>
                );
            case 3:
                return(
                    <div>
                        {this.renderStepper()}
                        <h3>Donation Amount: __________</h3>
                        <h3>Donate To: __________</h3>
                        <h3>Frequency: __________</h3>
                        <h3>Anonymous?: __________</h3>
                        <div className="ModalNav">
                            <button onClick={this.closeModal}>Cancel</button>
                            <button onClick={this.previous}>Previous</button>
                            <button onClick={this.next}>Next</button>
                        </div>
                    </div>
                );
            case 4:
                return(
                    <div className="lineup">
                        <img className="logo" src={logo} alt="Thank you for Donating"/>
                        <div>
                        <h1>Thank you for donating!</h1>
                        <button onClick={this.closeModal}>Back to Home</button>
                        </div>
                    </div>
                );
        }
    }

    render(){
        return(
            <div>

                {this.renderField()}
            </div>

        );
    }
}

export default Donation;
