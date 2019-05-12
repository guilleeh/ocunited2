import React from 'react';
import Heading from '../Heading';
import Slideshow from './slideshow';

class Home extends React.Component{
    render(){
        return(
            <div>
                <Heading />
                <Slideshow />
            </div>
        );
    }
}

export default Home;