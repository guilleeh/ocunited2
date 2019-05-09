import React from 'react';
import './index.css';
import ReactModal from 'react-modal';
import Donation from '../Donation';
import EventDropdown from './eventdropdown';

import {} from 'react-bootstrap';

class Heading extends React.Component{
    state={
        donation_visibility:false,
        event_dropdown_show: false,
    };

    show_modal = () =>{
        this.setState({donation_visibility:true});
    }

    hide_modal = () =>{
        this.setState({donation_visibility:false});
    }

    render(){
        return(
            <div className="heading">
                <ReactModal 
                    isOpen={this.state.donation_visibility}
                    onRequestClose={this.hide_modal}
                    shouldCloseOnOverlayClick={false}
                    shouldCloseOnEsc={false}
                    className="DonationModal"
                    overlayClassName="Overlay"
                >
                    <div id = "makeadonation">Make a Donation</div>
                    <Donation hide_modal={this.hide_modal} />
                </ReactModal>
                <header className="site-header">
                    <div class="site-branding">
                        <img alt="logo" src="https://ocunited.org/wp-content/themes/ocunited/images/ocu-logo.png"/> 
                    </div>
                    <nav className="main-navigation">
                        <ul className="main-menu">
                            <li>
                                <h3>Who We Are</h3>
                            </li>
                            <li>
                                <h3>What We Do</h3>
                            </li>
                            <li>
                                <EventDropdown />
                            </li>
                            <li>
                                <h3>Volunteer</h3>
                            </li>
                            <li>
                                <h3>Blog</h3>
                            </li>
                        </ul>
                    </nav>
                    <div className="buttons">
                        <li><div className="buttontext">Get Involved</div></li>
                        <li onClick={this.show_modal}><div className="buttontext">Donate</div></li>
                    </div>
                </header>
            </div>
        );
    }
}

export default Heading;