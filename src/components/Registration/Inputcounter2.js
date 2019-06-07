import React from 'react';
import $ from 'jquery';

import './adultbutton.css';

class Inputcounter2 extends React.Component{
  constructor(props) {
    super(props);

    this.state = {amount: this.props.value};

  }

  handleIncrease = () => {
    console.log("Increasing")
    let amount = this.state.amount + 1;
    this.props.onChangeChild(amount);
    this.setState({amount: amount});
  }

  handleDecrease = () => {
    if(this.state.amount  > 1) {
      let amount = this.state.amount - 1;
      this.props.onChangeChild(amount)
      this.setState({amount: amount});
    }
    console.log("Decreasing")
  }



 render(){
     return(
       <div className="number2">
         <div className="title">
         Children
         </div>
         <span className="minus" onClick={this.handleDecrease}>-</span>
         <input className="num2-input" type="text" value={this.state.amount}/>
         <span className="plus" onClick={this.handleIncrease}>+</span>
       </div>
     );
 }
}

export default Inputcounter2;
