import React from 'react';
import './index.css';
import ReactModal from 'react-modal';
import Donation from '../Donation';

class Heading extends React.Component{
    state={
        donation_visibility:false,
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
                                <a>Who We Are</a>
                            </li>
                            <li>
                                <a>What We Do</a>
                            </li>
                            <li>
                                <a>Events</a>
                            </li>
                            <li>
                                <a>Volunteer</a>
                            </li>
                            <li>
                                <a>Blog</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="buttons">
                        <li><a>Get Involved</a></li>
                        <li onClick={this.show_modal}><a>Donate</a></li>
                    </div>
                </header>
            </div>
        );
    }
}

export default Heading;