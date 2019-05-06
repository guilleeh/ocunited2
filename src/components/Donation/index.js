import React from 'react';
import Stepper from 'react-stepper-horizontal';
import ButtonGroup from 'mineral-ui/ButtonGroup';
import Button from 'mineral-ui/Button';
import TextInput from 'mineral-ui/TextInput';

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
                    <div className="pageOne">
                        {this.renderStepper()}
                        <ButtonGroup  className ="buttongroup" aria-label="Edit text" mode="radio">
                            <Button>$50</Button>
                            <Button>$100</Button>
                            <Button>$250</Button>
                            <Button>$500</Button>
                        </ButtonGroup>
                        <div>
                            <TextInput type="number" prefix="$"/>
                        </div>
                        <div>
                            <select>
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
                        <div>
                            <select>
                                <option>One Time</option>
                                <option>Monthly</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                        <div className="ModalNav">
                            <Button className="cancel" onClick={this.closeModal}>Cancel</Button>
                            <Button className="next" onClick={this.next}>Next</Button>
                        </div>
                    </div>
                );
            case 1:
                return(
                    <div>
                        {this.renderStepper()}
                        <div className="ModalNav">
                            <Button onClick={this.closeModal}>Cancel</Button>
                            <Button onClick={this.previous}>Previous</Button>
                            <Button onClick={this.next}>Next</Button>
                        </div>
                    </div>
                );
            case 2:
                return(
                   <div>
                       {this.renderStepper()}
                        <Button onClick={this.closeModal}>Cancel</Button>
                        <Button onClick={this.previous}>Previous</Button>
                        <Button onClick={this.next}>Next</Button>
                    </div>
                );
            case 3:
                return(
                    <div>
                        {this.renderStepper()}
                        <Button onClick={this.closeModal}>Cancel</Button>
                        <Button onClick={this.previous}>Previous</Button>
                        <Button onClick={this.next}>Next</Button>
                    </div>
                );
            case 4:
                return(
                    <div>
                        <Button onClick={this.closeModal}>Back to Home</Button>
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