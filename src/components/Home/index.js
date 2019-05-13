import React from 'react';
import Heading from '../Heading';
import Slideshow from './slideshow';
import './index.css'

class Home extends React.Component{
    render(){
        return(
            <div>
                <Heading />
                <Slideshow />
                <div className="mission-statement">
                    <div>
                        OC United is just that - Orange County, United.
                    </div>
                    <div>
                        We’re all the people who have ever thought, “I wish I could do something.” We’re a collection of citizens, non-profits, and churches that believe we can accomplish more working together than apart.
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;