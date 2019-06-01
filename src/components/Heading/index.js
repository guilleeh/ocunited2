import React from 'react';
import './index.css';
import ReactModal from 'react-modal';
import Donation from '../Donation';
import EventDropdown from './eventdropdown';
import { Link } from 'react-router-dom';


class Heading extends React.Component{
    state={
        donation_visibility:false,
        event_dropdown_show: false,
    };

    show_modal = () =>{
        this.setState({donation_visibility:true});
        document.body.style.setProperty("overflow-y","hidden");
    }

    hide_modal = () =>{
        this.setState({donation_visibility:false});
        document.body.style.setProperty("overflow-y","auto");
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 100;
          if (isTop && document.documentElement.style.getPropertyValue("--header-color")!=="none"){
            document.documentElement.style.setProperty("--header-color","none");
          }
          else if(!isTop && document.documentElement.style.getPropertyValue("--header-color")!=="#001D34"){
            document.documentElement.style.setProperty("--header-color","#001D34");
          }
        });
    }

    render(){
        return(
            <div className="heading">
                <ReactModal 
                    isOpen={this.state.donation_visibility}
                    onRequestClose={this.hide_modal}
                    shouldCloseOnOverlayClick={true}
                    shouldCloseOnEsc={true}
                    className="DonationModal"
                    overlayClassName="Overlay"
                >
                    <div id = "makeadonation">Make a Donation</div>
                    <Donation hide_modal={this.hide_modal} />
                </ReactModal>
                <header className="site-header">
                <Link className="linkItem" to='/'>
                    <div className="site-branding">
                        <img alt="logo" src="https://ocunited.org/wp-content/themes/ocunited/images/ocu-logo.png"/> 
                    </div>
                    </Link>
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