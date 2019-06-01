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
    return (
      <div
        onBlur={() => this.toggleDropdown()}
        onFocus={() => this.toggleDropdown()}
        tabIndex="0"
        id="dropdown-button"
      >
        events
        {this.state.open && (
          <div className="dropdown-items arrow-top">
            <div className="event-item"><Link className='event-item' to='/upcoming'> Upcoming Events </Link></div>
            <div className="event-item">Past Events</div>
          </div>
        )}
        
      </div>
    );
  }
}

export default EventDropdown;