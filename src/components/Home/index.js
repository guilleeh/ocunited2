import React from 'react';
import Heading from '../Heading';
import Slideshow from './slideshow';
import './index.css'

import Support from './images/support.jpg';

class Home extends React.Component{
    render(){
        return(
            <div>
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
                    <h2>Watch the Video Now</h2>
                </div>
                
            </div>
        );
    }
}

export default Home;