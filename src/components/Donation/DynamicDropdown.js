import React from 'react';
import './dynamicdropdown.css';

class DynamicDropdown extends React.Component{
  // dynamic dropdown for the select donation amount tab
    state={
        organizations: [
            {
              id: 0,
              title: 'Donate to General',
              selected: false,
            },
            {
              id: 1,
              title: 'Donate to Neighborhoods',
              selected: false,

            },
            {
              id: 2,
              title: 'Donate to Homelessness',
              selected: false,

            },
            {
              id: 3,
              title: 'Donate to Domestic Abuse',
              selected: false,

            },
            {
              id: 4,
              title: 'Donate to Foster or Adopt',
              selected: false,

            },
            {
              id: 5,
              title: 'Donate to Love Fullerton',
              selected: false,

            },
            {
              id: 6,
              title: 'Donate to Love Placentia',
              selected: false,

            },
            {
              id: 7,
              title: 'Donate to Love Orange',
              selected: false,

            },
            {
              id: 8,
              title: 'Donate to Love Buena Park',
              selected: false,

            },
            {
              id: 9,
              title: 'Donate to Love Anaheim',
              selected: false,

            },
            {
              id: 10,
              title: 'Donate to Love Brea',
              selected: false,

            },
            {
              id: 11,
              title: 'Donate to Love Tustin',
              selected: false,

            },
            {
              id: 12,
              title: 'Donate to Love Yorba Linda',
              selected: false,

            },
          ],
        
    }

    addSelection(){
      // called when "add field" is pressed
      let temp=this.props.selections;
      temp.push([0,'']);
      this.props.handleSelectionChange(temp);
    }

    renderSelect(index){
        // renders every <select> dropdown
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
      // called when a dropdown is changed to store the new value
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
      // renders the add field button. If there are more than 6 fields, it is hidden
        if(this.props.selections.length>=6) return;
        return(
            <button class="btn btn-outline-secondary" id="add-field" onClick={(e)=>this.addSelection(e)}>Add Field</button>
        );
    }

    handleRemove(index){
      // called when user wants to remove a field
      let temp=this.props.selections;
      temp.splice(index,1);
      this.props.handleSelectionChange(temp);
    }

    handlePercentChange(e,index){
      //called when the amount is changed in the donation area
        let temp=this.props.selections;
        temp[index][1]=e.target.value;
        this.props.handleSelectionChange(temp);
    }

    render(){
        return(
            <div className="dyanamic-dropdown">
                {
                    this.props.selections.map((selection,index)=>{
                        return(
                            <div className="field" key={index}>
                                {this.renderSelect(index)}
                                <div class="input-group mb-3 w-25">
                                <div class="input-group-prepend">
                                  <span class="input-group-text" id="basic-addon1">$</span>
                                </div>
                                <input type="number" min="1" max="50000" class="form-control" placeholder="Amount" aria-label="Username" aria-describedby="basic-addon1" onChange={(e)=>this.handlePercentChange(e,index)} value={this.props.selections[index][1]}/>
                                </div>
                                <button className="remove-field" onClick={()=>this.handleRemove(index)}>-</button>
                            </div>
                        )
                    })
                }
                {this.renderButton()}
            </div>
        )
    }
}

export default DynamicDropdown