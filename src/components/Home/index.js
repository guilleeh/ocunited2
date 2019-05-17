import React from 'react';
import Heading from '../Heading';
import Slideshow from './slideshow';
import Facts from './facts';
import Quotes from './quotes';
import Donation from '../Donation';
import ReactModal from 'react-modal';
import ModalVideo from 'react-modal-video'
import './index.css'

import Support from './images/support.jpg';
import Photos from './images/photos.png';
import Guardians from './images/fullerton.jpg';
import PlayButton from './images/play.png';

class Home extends React.Component{
    state={
        donation_visibility:false,
        event_dropdown_show: false,
        video: false,
        volunteer_video: false
    };

    show_modal = () =>{
        this.setState({donation_visibility:true});
        document.body.style.setProperty("overflow-y","hidden");
    }

    hide_modal = () =>{
        this.setState({donation_visibility:false});
        document.body.style.setProperty("overflow-y","auto");
    }

    volunteer_video_open = () => {
        this.setState({volunteer_video: true});
        document.body.style.setProperty("overflow-y","hidden");
    }

    volunteer_video_close = () =>{
        this.setState({volunteer_video: false});
        document.body.style.setProperty("overflow-y","auto");
    }

    video_open = () => {
        this.setState({video: true});
        document.body.style.setProperty("overflow-y","hidden");
    }

    video_close = () => {
        this.setState({video: false});
        document.body.style.setProperty("overflow-y","auto");
    }


    render(){
        return(
            <div>
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
                <Heading />
                <Slideshow />
                <div className="mission-statement">
                    <div className="container">
                        <div className="child-one">
                            <span id="orange">OC United</span> is just that - Orange County, united.
                        </div>
                        <div className="child-two">
                            We’re all the people who have ever thought, “I wish I could do something.” We’re a collection of citizens, non-profits, and churches that believe we can accomplish more working together than apart.
                        </div>
                    </div>
                </div>
                <div className="video-box">
                    <img src={Support} draggable="false" alt="support"/>
                    <h1>Will You Step Into the Gap With Us?</h1>
                    <div>
                        <ModalVideo channel='vimeo' isOpen={this.state.video} videoId='260971449' onClose={this.video_close} />
                        <img src={PlayButton} alt="Play" id="video" onClick={this.video_open} />
                    </div>
                    <h2>Watch the Video Now</h2>
                </div>
                <Facts />
                <Quotes />
                <div className="volunteer-box">
                    <img src={Photos} draggable="false" alt="photos"/>
                    <h1>Volunteers Stepping into the Gap</h1>
                    <div>
                        <ModalVideo channel='vimeo' isOpen={this.state.volunteer_video} videoId='260972046' onClose={this.volunteer_video_close} />
                        <img src={PlayButton} alt="Play" id="volunteer-video" onClick={this.volunteer_video_open} />
                    </div>
                    <h2>Watch the Video Now</h2>
                </div>
                <div className="action-box">
                    <img src={Guardians} alt="Guardians" draggable="false"/>
                    <h1>Take Action</h1>
                    <ul>
                        <li>
                            <h3>Get Involved</h3>
                        </li>
                        <li>
                            <h2 onClick={this.show_modal}>Donate</h2>
                        </li>
                    </ul>
                </div>
                <div className="contacts-box">
                    <div className="contact">
                        <h3>Contact</h3>
                        418 W Commonwealth Ave.,<br></br>
                        Fullerton, CA 92832<br></br>
                        <a href="tel:(714)515-3085">(714) 514-3085</a>
                    </div>
                    <div className="social">
                        <h3>Stay Connected</h3>
                        
                        <br/>
                        <a href="https://www.facebook.com/ocunitednpo/" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-facebook-f fa-lg"></i>
                        </a>

                        <a href="https://twitter.com/OCUnitedNPO" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-twitter fa-lg"></i>
                        </a>

                        <a href="https://www.instagram.com/ocunitednpo/" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-instagram fa-lg"></i>
                        </a>

                    </div>
                    <div className="newsletter">
                        <h3>Join our mailing list</h3>
                        <div className="input-group mb-3">
                        <input type="email" placeholder="Enter Your Email Address" aria-label="join email" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">JOIN</button>
                        </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="footer-items">
                        TERMS OF USE | PRIVACY POLICY | JOBS
                    <div id="copyright">
                    COPYRIGHT © 2019 OC UNITED. ALL RIGHTS RESERVED.
                    </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Home;