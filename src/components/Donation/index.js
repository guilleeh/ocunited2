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

    renderField(){
        switch (this.state.currentStep){
            case 0:
                return(
                    <div>
                        <ButtonGroup>
                            <Button>$50</Button>
                            <Button>$100</Button>
                            <Button>$250</Button>
                            <Button>$500</Button>
                        </ButtonGroup>
                        <TextInput type="number" prefix="$"/>
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
                        <select>
                            <option>One Time</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                        <Button onClick={this.closeModal}>Cancel</Button>
                        <Button onClick={this.next}>Next</Button>
                    </div>
                );
            case 1:
                return(
                    <div>
                        <Button onClick={this.closeModal}>Cancel</Button>
                        <Button onClick={this.previous}>Previous</Button>
                        <Button onClick={this.next}>Next</Button>
                    </div>
                );
            case 2:
                return(
                   <div>
                        <Button onClick={this.closeModal}>Cancel</Button>
                        <Button onClick={this.previous}>Previous</Button>
                        <Button onClick={this.next}>Next</Button>
                    </div>
                );
            case 3:
                return(
                    <div>
                        <Button onClick={this.closeModal}>Cancel</Button>
                        <Button onClick={this.previous}>Previous</Button>
                        <Button onClick={this.next}>Next</Button>
                    </div>
                );
            case 5:
                return(
                    <div>
                        <Button onClick={this.closeModal}>Cancel</Button>
                        <Button onClick={this.previous}>Previous</Button>
                        <Button>Submit</Button>
                    </div>
                );
        }
    }

    render(){
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
                {this.renderField()}
            </div>

        );
    }
}

export default Donation;