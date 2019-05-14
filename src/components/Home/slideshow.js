import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './slideshow.css';

class Slideshow extends React.Component{
    state={
        slideImages : [
            require('./images/clean.jpg'),
            require('./images/egg.jpg'),
            require('./images/fullerton.jpg'),
            require('./images/grad.jpg'),
            require('./images/kids.jpg'),
            require('./images/love_fullerton.jpg'),
            require('./images/love_placentia.jpg'),
            require('./images/pumpkin.jpg')
        ],

        domestic_abuse:require('./images/da.jpg'),
        foster_care:require('./images/fc.jpg'),
        homelessness:require('./images/h.jpg'),
        neighborhoods:require('./images/n.jpg')
    }

    render(){
        return (
            <div id="black">
                <div className="carousel-div">
                    <Carousel
                        slide='false'
                        fade='true'
                        controls={false}
                        indicators={false}
                        pauseOnHover={false}
                    >
                        <Carousel.Item>
                        <img
                            className="slide-item"
                            src= {this.state.slideImages[0]}
                            alt="OC United"
                            draggable="false"/>
                        </Carousel.Item> 
                        <Carousel.Item>
                        <img
                            className="slide-item"
                            src= {this.state.slideImages[1]}
                            alt="OC United"
                            draggable="false"
                            />
                        </Carousel.Item> 
                        <Carousel.Item>
                        <img
                            className="slide-item"
                            src= {this.state.slideImages[2]}
                            alt="OC United"
                            draggable="false"
                            />
                        </Carousel.Item> 
                        <Carousel.Item>
                        <img
                            className="slide-item"
                            src= {this.state.slideImages[3]}
                            alt="OC United"
                            draggable="false"
                            />
                        </Carousel.Item> 
                        <Carousel.Item>
                        <img
                            className="slide-item"
                            src= {this.state.slideImages[4]}
                            alt="OC United"/>
                        </Carousel.Item> 
                        <Carousel.Item>
                        <img
                            className="slide-item"
                            src= {this.state.slideImages[5]}
                            alt="OC United"
                            draggable="false"
                            />
                        </Carousel.Item> 
                        <Carousel.Item>
                        <img
                            className="slide-item"
                            src= {this.state.slideImages[6]}
                            alt="OC United"
                            draggable="false"
                            />
                        </Carousel.Item> 
                        <Carousel.Item>
                        <img
                            className="slide-item"
                            src= {this.state.slideImages[7]}
                            alt="OC United"
                            draggable="false"
                            />
                        </Carousel.Item> 
                    </Carousel>
                </div>
                <div id="overlay-text">pls fix the the bottom 2 carousel arrows and add footer info</div>
                <div className="category-container">
                    <div className="item homelessness"> <img src={this.state.homelessness} alt="Homelessness"/> Homelessness</div>
                    <div className="item fostercare"> <img src={this.state.foster_care} alt="Foster Care"/> Foster Care</div>
                    <div className="item neighborhoods"> <img src={this.state.neighborhoods} alt="Neighborhoods"/> Neighborhoods</div>
                    <div className="item domesticabuse"> <img src={this.state.domestic_abuse} alt="Domestic Abuse"/> Domestic Abuse</div>
                </div>
            </div>
        );
    }
}

export default Slideshow;