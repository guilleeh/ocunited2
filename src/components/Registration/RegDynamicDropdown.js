import React from 'react';
import './adultbutton.css';

class DynamicDropdown extends React.Component{
 constructor() {
   super();
   this.state={
         count: 0,
      
   }
   this.getInitialState.bind(this);
   this.incrementCount.bind(this);
   this.DecrementCount.bind(this);
 }

   getInitialState(){
     return {
     count: 0
     }
   }

   incrementCount = () =>{
     this.setState({
     count: this.state.count + 1
     });
   }
    DecrementCount = () =>{
       if(this.state.count) {
       this.setState({
         count: this.state.count - 1,
         message: null
       });
       } else {
       this.setState({
         message: "Can't decrement. Since 0 is the min value"
       });
     }
   }
   addSelection(){
     let temp=this.props.selections;
     temp.push([0,'']);
     this.props.handleSelectionChange(temp);
   }

   renderSelect(index){
       let output=[];
       for (let i=0;i<this.state.organizations.length;i++){
         if(this.props.selections[index][0]===i){
           output.push(<option value={this.state.organizations[i].title} selected>{this.state.organizations[i].title}</option>);
         }
         else{
           output.push(<option value={this.state.organizations[i].title}>{this.state.organizations[i].title}</option>);  
         }
       }
       return(
           <div className="dynamic-select">
               <select class="custom-select" onChange={(e)=>this.changeDropdown(e,index)}>
                   {output}
               </select>
           </div>
       );
   }

   changeDropdown(e,index){
     let temp=this.props.selections;
     for (let i=0;i<this.state.organizations.length;i++){
       if (this.state.organizations[i].title===e.target.value){
         temp[index][0]=i;
         break;
       }
     }
     this.props.handleSelectionChange(temp);
   }

   renderButton(){
       if(this.props.selections.length>=6) return;
       return(
           <button class="btn btn-outline-secondary" id="add-field" onClick={(e)=>this.addSelection(e)}>Add Field</button>
       );
   }

   handleRemove(index){
     let temp=this.props.selections;
     temp.splice(index,1);
     this.props.handleSelectionChange(temp);
   }

   handlePercentChange(e,index){
       let temp=this.props.selections;
       temp[index][1]=e.target.value;
       this.props.handleSelectionChange(temp);
   }

   render(){
     return(
       <div className="regcontainer">
         <div className="counter">
           <h1>Adults: {this.state.count}</h1>
           <button type="button" onClick={this.incrementCount}>+</button>
           <button type="button" onClick={this.DecrementCount}>-</button>   
         </div>

         <div className="counter2">
           <h1>Children: {this.state.count}</h1>
           <button type="button" onClick={this.incrementCount}>+</button>
           <button type="button" onClick={this.DecrementCount}>-</button>   
         </div>
       </div>

     );
 }
  }

export default DynamicDropdown;
