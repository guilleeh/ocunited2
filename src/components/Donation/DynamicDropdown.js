import React from 'react';
import './dynamicdropdown.css';

class DynamicDropdown extends React.Component{
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
              title: 'Donate to Foster/Adopt',
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
        selections:['']
    }

    addSelection(){
        this.setState({selections:[...this.state.selections,'']})
    }

    renderSelect(){
        let output=[];
        for (let i=0;i<this.state.organizations.length;i++){
            output.push(<option value={this.state.organizations[i].title}>{this.state.organizations[i].title}</option>)   
        }
        return(
            <div className="dynamic-select">
                <select class="custom-select">
                    {output}
                </select>
            </div>
        );
    }

    renderButton(){
        if(this.state.selections.length>=6) return;
        return(
            <button id="add-field" onClick={(e)=>this.addSelection(e)}>Add Field</button>
        );
    }

    handleRemove(index){
        this.state.selections.splice(index,1);
        this.setState({selections:this.state.selections});
    }

    handlePercentChange(e,index){
        let temp=this.state.selections;
        temp[index]=e.target.value;
        this.setState({selections:temp});
    }

    render(){
        return(
            <div className="dyanamic-dropdown">
                {
                    this.state.selections.map((selection,index)=>{
                        return(
                            <div className="field" key={index}>
                                {this.renderSelect()}
                                <div class="input-group mb-3 w-25">
                                <div class="input-group-prepend">
                                  <span class="input-group-text" id="basic-addon1">$</span>
                                </div>
                                <input type="number" class="form-control" placeholder="Amount" aria-label="Username" aria-describedby="basic-addon1" onChange={(e)=>this.handlePercentChange(e,index)} value={this.state.selections[index]}/>
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