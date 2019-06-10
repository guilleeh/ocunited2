import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './facts.css';

class Facts extends React.Component{
    // orange facts slideshow
    state={
        children:require('./images/kid.jpg'),
        swing:require('./images/swing.jpg'),
        violence:require('./images/cry.jpg'),
        homeless:require('./images/homeless.jpg')
    }

    render(){
        return(
            <div id="orange-bg">
                <Carousel
                    className="facts"
                    slide='false'
                    fade='true'
                    indicators={false}
                    control = {true}
                >
                    <Carousel.Item>
                        <img
                            className="slide-item"
                            src= {this.state.children}
                            alt="Please Donate"
                            draggable="false"/>
                        <Carousel.Caption>
                            <p>Fact</p>
                            <h1>1 out of 3 children</h1>
                            <h2>in the United States live without their biological father in their home.</h2>
                        </Carousel.Caption>
                    </Carousel.Item> 
                    <Carousel.Item>
                        <img
                            className="slide-item"
                            src= {this.state.swing}
                            alt="Please Donate"
                            draggable="false"/>
                        <Carousel.Caption>
                            <p>Fact</p>
                            <h1>62,097</h1>
                            <h2>children in foster care in California</h2>
                        </Carousel.Caption>
                    </Carousel.Item> 
                    <Carousel.Item>
                        <img
                            className="slide-item"
                            src= {this.state.violence}
                            alt="Please Donate"
                            draggable="false"/>
                        <Carousel.Caption>
                            <p>Fact</p>
                            <h1>5,800</h1>
                            <h2>women and children are in domestic violence shelters in California on any given day</h2>
                        </Carousel.Caption>
                    </Carousel.Item> 
                    <Carousel.Item>
                        <img
                            className="slide-item"
                            src= {this.state.homeless}
                            alt="Please Donate"
                            draggable="false"/>
                        <Carousel.Caption>
                            <p>Fact</p>
                            <h1>20%</h1>
                            <h2>of the nation's homeless population reside in CA.</h2>
                        </Carousel.Caption>
                    </Carousel.Item> 
                </Carousel>
            </div>
        );
    }
}

export default Facts;