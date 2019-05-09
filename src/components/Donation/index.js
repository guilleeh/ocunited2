import React from 'react';
import './index.css';
import Stepper from 'react-stepper-horizontal';
import logo from './logo.png'

//dependencies for Stripe
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';


class Donation extends React.Component{
    state = {
        currentStep: 0,
    };

    closeModal = () =>{
        this.props.hide_modal();
    }

    next=()=>{
        this.setState({currentStep: this.state.currentStep + 1});
    }

    previous=()=>{
        this.setState({currentStep: this.state.currentStep - 1});
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
                        <div className="lineup">
                            <input type="number" min="0.01" step="0.01" />
                        </div>
                        <div className="lineup">
                            <select multiple>
                                <option>Donate to General</option>
                                <option>Donate to Neighborhoods</option>
                                <option>Donate to Homelessness</option>
                                <option>Donate to Domestic Abuse</option>
                                <option>Donate to Foster/Adopt</option>
                                <option>Donate to Love Fullerton</option>
                                <option>Donate to Love Placentia</option>
                                <option>Donate to Love Orange</option>
                                <option>Donate to Love Buena Park</option>
                                <option>Donate to Love Anaheim</option>
                                <option>Donate to Love Brea</option>
                                <option>Donate to Love Tustin</option>
                                <option>Donate to Love Yorba Linda</option>
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
                    <div>
                        {this.renderStepper()}
                        <div className="personalinfo">
                            <input placeholder="First Name" />
                            <input placeholder="Last Name" />
                            <input type="email" placeholder="Email" />
                            <input placeholder="Phone Number (Optional)" />
                            <input placeholder="Street Address" />
                            <input placeholder="City" />
                            <input placeholder="State" />
                            <input type="number" placeholder="Postal Code" />
                            <input placeholder="Country" />
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

                        <StripeProvider apiKey="pk_test_mVIHxjDBueW9FOhHUrp3uD7d0042aj7bq6">
                        <div className="oc-united-stripe-element">
                         <h1>React Stripe Element</h1>
                         <Elements>
                        <CheckoutForm />
                        </Elements>
                        </div>
                        </StripeProvider>

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
                    <div  className="lineup">
                        <img src={logo} alt="Thank you for Donating"/>
                        <h1>Thank you for donating!</h1>
                        <button onClick={this.closeModal}>Back to Home</button>
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
