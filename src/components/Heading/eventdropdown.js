import React from "react";
import './index.css';

import { Link } from 'react-router-dom';


class EventDropdown extends React.Component {
  state = {
    open: false
  };

  toggleDropdown() {
    this.setState({ open: !this.state.open });
  }


  render() {
    console.log(this.state.open);
    return (
      <div>
      <div
        
        onClick={() => this.toggleDropdown()}
        tabIndex="0"
        id="dropdown-button"
      >
        
        events
        </div>
        {this.state.open && (
          <div className="dropdown-items arrow-top">
            <Link className='event-item' to='/upcoming' onClick={() => this.toggleDropdown()}>Upcoming Events</Link>
            <div className="event-item">Past Events</div>
          </div>
        )}
        
      </div>
    );
  }
}

export default EventDropdown;