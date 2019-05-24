import React from 'react';
import './index.css';
import Stepper from 'react-stepper-horizontal';
import logo from './logo.png'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DynamicDropdown from './DynamicDropdown';

//dependencies for Stripe
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
//import { Script } from 'vm';


class Donation extends React.Component{
    constructor() {
        super();
        this.DynamicDropdown1 = React.createRef();
        this.state = {
            values: [],
            currentStep: 0,

            selections:[[0,'']],

            anon: false,
            personal_information:{
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                street: '',
                city: '',
                state: '',
                postal: '',
                country: ''
            },
            usersOrgsAndAmounts: {
                selectedOrganizations: [],
                amountToOrg: []
            }
        }
    }


    handleSelectionChange(nSelections){
        this.setState({selections:nSelections});
    }

    handleChange = (e) => {
        let options = e.target.options;
        let selectedOptions = [];

        for(let i = 0; i < options.length; i++) {
            if( options[i].selected ) {
                selectedOptions.push(options[i].value);
            }
        }
        this.setState({values: selectedOptions, currentStep: this.state.currentStep});
    }


    closeModal = () =>{
        this.props.hide_modal();
    }

    next=()=>{
        this.setState({values: this.state.values, currentStep: this.state.currentStep + 1})


        for(let i = 0; i < this.state.selections.length; i++){
            let org = this.DynamicDropdown1.current.state.organizations[this.state.selections[i][0]].title;
            let amt = this.state.selections[i][1]; 

            this.state.usersOrgsAndAmounts.selectedOrganizations.push(org);
            this.setState({selectedOrganizations: this.state.usersOrgsAndAmounts.selectedOrganizations});

            this.state.usersOrgsAndAmounts.amountToOrg.push(amt);
            this.setState({amountToOrg: this.state.usersOrgsAndAmounts.amountToOrg});
        }

        console.log(this.state.usersOrgsAndAmounts);

    }

    previous=()=>{
        this.setState({values: this.state.values, currentStep: this.state.currentStep - 1});
    }

    resetThenSet = (id, key) => {
        let temp = JSON.parse(JSON.stringify(this.state[key]))
        temp.forEach(item => item.selected = false);
        temp[id].selected = true;
        this.setState({
          [key]: temp
        })
      }

    renderStepper(){
        return(
            <div id="stepper">
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

    checkCaseZero=()=>{
        if (this.state.selections.length===0){
            toast.error("Please add at least one field.");
            return;
        }
        for(let i=0;i<this.state.selections.length;i++){
            if (this.state.selections[i][1]===""){
                toast.error("Please input valid montary values.");
                return;
            }

        }
        this.next();
    }

    checkCaseOne=()=>{
        if(!this.state.anon){
            for(var key in this.state.personal_information){
                if(key!=="phone" && this.state.personal_information[key]===""){
                    toast.error("Please complete all fields.");
                    return;
                }
            }
        }
        this.next();
    }


    renderField(){
        switch (this.state.currentStep){
            case 0:
                return(
                    <div>
                        <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        />
                        {this.renderStepper()}
                        <DynamicDropdown ref={this.DynamicDropdown1} selections={this.state.selections}  handleSelectionChange={(e) => this.handleSelectionChange(e)} />
                        <select id="how-often" class="custom-select w-25">
                            <option>One Time</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                        <div className="ModalNav">
                            <button className="cancel" onClick={this.closeModal}>Cancel</button>
                            <button className="next" onClick={this.checkCaseZero}>Next</button>
                        </div>
                    </div>
                );
            case 1:
                return(
                    <div>
                        <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        />
                        {this.renderStepper()}
                        <div className="personalinfo">
                            <div className="container">
                                <form>
                                    <div class="row">
                                        <input type="text" class="col-md form-control" placeholder="First Name" aria-label="firstname" aria-describedby="basic-addon1"/>
                                        <input type="text" class="col-md form-control" placeholder="Last Name" aria-label="lastname" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div class="row">
                                        <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div class="row">
                                        <input type="text" class="form-control" placeholder="Phone Number(optional)" aria-label="phone" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div class="row">
                                        <input type="text" class="form-control" placeholder="Street Address" aria-label="street" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div class="row">
                                        <input type="text" class="col-md form-control" placeholder="City" aria-label="city" aria-describedby="basic-addon1"/>
                                        <input type="text" class="col-md form-control" placeholder="State" aria-label="state" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div class="row">
                                        <input type="number" class="col-md form-control" placeholder="Postal Code" min="00501" aria-label="state" aria-describedby="basic-addon1"/>
                                        <input type="text" class="col-md form-control" placeholder="Country" aria-label="country" aria-describedby="basic-addon1"/>
                                    </div>
                                </form>
                                <br></br>
                                <input type="checkbox" checked={this.state.anon} onChange={(e)=>this.setState({anon:!this.state.anon})} name="anonymity"/><div id="donate_anon">Donate Anonymously</div>
                            </div>
                            <div className="ModalNav">
                                <button onClick={this.closeModal}>Cancel</button>
                                <button onClick={this.previous}>Previous</button>
                                <button onClick={this.checkCaseOne}>Next</button>
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
                        <div className="ModalNav">
                            <button onClick={this.closeModal}>Back to Home</button>
                        </div>
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
