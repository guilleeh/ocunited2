import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './quotes.css';

class Quotes extends React.Component{

    render(){
        return (
            <div id="white">
            <div className="quotes">
                <Carousel
                    indicators={false}
                >
                <Carousel.Item>
                    <div className="text">
                    <h3>The THRIVE House has been amazing for me. It's allowed me to go to college and not have to worry about having a job that will support me or live in my car. I'm in a much better spot than I was a year ago. I've changed a lot over the past year and not a lot of people can say
                        they've changed a lot in a year but I really have. OC United has provided so many opportunities and really just supports you along the way. I couldn't thank them enough.
                    </h3>
                    <p>J., Thrive Participant</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="text">
                    <h3>18 months ago I joined OC United's Domestic Violence support group, as a Spanish translator, I came to help others, but God used this group, to bring tremendous healing in my heart, and to teach me to recognize what a healthy relationship is supposed to look like.</h3>
                    <p>B., Domestic Abuse Support Group</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="text">
                    <h3>Awww thank you so much for always helping and taking care of my kids. Thank you for helping me educate them and put smile on their faces. I appreciate it so much.</h3>
                    <p>T., Mother from Valencia Park Neighborhood</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="text">
                    <h3>With limited funds to give, J and I are very selective about where to invest in kingdom work. Supporting OC United is a no-brainer. We believe strongly in your mission and the way you're pursuing it!</h3>
                    <p>J., Donor</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="text">
                    <h3>OC United has made a positive impact in the lives of many Valencia Park Students and families. Thanks to the United Kids after-school program, our students benefit from extended learning and social-emotional support in a nurturing environment. We are incredibly grateful for the 
                        outpouring of love and support that OC United has shown to our students, families, and community!
                    </h3>
                    <p>Cindy Bak, Principal, Valencia Park Elementary</p>
                    </div>
                </Carousel.Item>
                </Carousel>
            </div></div>
        );
    }
}

export default Quotes;