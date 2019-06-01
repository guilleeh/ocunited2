import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import Home from '../Home';
import UpcomingEvents from '../UpcomingEvents';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp, faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleUp, faAngleDown, faCheck);

class App extends React.Component{
    render(){
        return(

            <Router>
                <Route exact path='/' render={props => (
                    <React.Fragment>
                            <Home />
                        </React.Fragment>
                )} />

                <Route path='/upcoming' component={UpcomingEvents} />

            </Router>

        );
    }
}

export default App;