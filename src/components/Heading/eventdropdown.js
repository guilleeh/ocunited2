import React from "react";
import './index.css';


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
            <div className="event-item">Upcoming Events</div>
            <div className="event-item">Past Events</div>
          </div>
        )}
        
      </div>
    );
  }
}

export default EventDropdown;