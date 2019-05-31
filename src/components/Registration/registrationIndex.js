import React from 'react';
import '../Donation/index.css';
import Stepper from 'react-stepper-horizontal';
import logo from '../Donation/logo.png'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DynamicDropdown from '../Registration/RegDynamicDropdown';
import Inputcounter from './Inputcounter';
import Inputcounter2 from './Inputcounter2';
//dependencies for Stripe
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../Donation/CheckoutForm';
import MapContainer from './map';


//import { Script } from 'vm';


class Registration extends React.Component{
   constructor() {
       super();
       this.DynamicDropdown1 = React.createRef();
       this.state = {
           values: [],
           currentStep: 0,

           selections:[[0,'']],

          
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
               selectedOrganizations: []
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
                   steps={ [{title: 'Ticket Quantity'}, {title: 'Add Personal Information'}, {title: 'Add Payment Information'}, {title: 'Submit Registration'}] }
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
       this.next();
   }

   checkCaseOne=()=>{
      
        
      
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
                      
                       
                       <hr class="hr-text" />
                            <div className="inputcontainer">
                                <Inputcounter />
                                <Inputcounter2 />
                            </div>
                        <hr class="hr-text" />
                            
  
                        
                       
                       <DynamicDropdown ref={this.DynamicDropdown1} selections={this.state.selections}  handleSelectionChange={(e) => this.handleSelectionChange(e)} />
                    
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
                   <div className="summary-container">
                       {this.renderStepper()}
                       <hr class="hr-text" />
                       <div className="inputcontainer">
                            <h3>Event Summary</h3>
                            <div className="map">
                            <MapContainer />
                            </div>
                            <p>
                                <p>BE A PART OF SERVE DAY THIS YEAR!
                                DETAILS AND SCHEDULING</p>
                                <p>
                                SCHEDULE: 
                                </p>
                                <p>
                                07:00 AM -Team Meeting at OC United Booth
                                08:00 AM - DTF Plaza Rally
                                09:15 AM - Volunteers Sent out to Project Sites
                                09:30 AM - Capture Photo/Video at Project Sites
                                12:15 PM - Media Team Arrive at Fullerton College to capture Luncheon
                                01:00 PM - Debrief 
                                </p>
                               </p>
                       </div>
                       <hr class="hr-text" />
                       <div className="ModalNav">
                           <button onClick={this.closeModal}>Cancel</button>
                           <button onClick={this.previous}>Previous</button>
                           <button onClick={this.next}>Submit</button>
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
               default: 
               return;
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

export default Registration;

