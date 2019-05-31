import React from 'react';
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
           //<Home />
           <UpcomingEvents />
        );
    }
}

export default App;