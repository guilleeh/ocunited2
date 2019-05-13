import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './image_carousel.css';

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
        ]
    }

    render(){
        return (
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
                    alt="OC United"/>
                </Carousel.Item> 
                <Carousel.Item>
                <img
                    className="slide-item"
                    src= {this.state.slideImages[1]}
                    alt="OC United"/>
                </Carousel.Item> 
                <Carousel.Item>
                <img
                    className="slide-item"
                    src= {this.state.slideImages[2]}
                    alt="OC United"/>
                </Carousel.Item> 
                <Carousel.Item>
                <img
                    className="slide-item"
                    src= {this.state.slideImages[3]}
                    alt="OC United"/>
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
                    alt="OC United"/>
                </Carousel.Item> 
                <Carousel.Item>
                <img
                    className="slide-item"
                    src= {this.state.slideImages[6]}
                    alt="OC United"/>
                </Carousel.Item> 
                <Carousel.Item>
                <img
                    className="slide-item"
                    src= {this.state.slideImages[7]}
                    alt="OC United"/>
                </Carousel.Item> 
            </Carousel>
        </div>
        );
    }
}

export default Slideshow;