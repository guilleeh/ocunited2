import React from 'react';

class Heading extends React.Component{
    render(){
        return(
            <div className="heading">
                <header className="site-header">
                    <div class="site-branding">
                        <img src="https://ocunited.org/wp-content/themes/ocunited/images/ocu-logo.png"/> 
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
                        <li><a>Donate</a></li>
                    </div>
                </header>
            </div>
        );
    }
}

export default Heading;