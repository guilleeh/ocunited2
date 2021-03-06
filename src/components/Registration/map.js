/* Used for registration modal on UpcomingEvents page */
import React from 'react';
import {Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const mapStyles = {
 width: '35%',
 height: '35%',
};
class MapContainer extends React.Component {
 constructor(props) {
   super(props);
    this.state = { 
     /* Placeholder map lat/long */
     stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
             {latitude: 47.359423, longitude: -122.021071},
             {latitude: 47.2052192687988, longitude: -121.988426208496},
             {latitude: 47.6307081, longitude: -122.1434325},
             {latitude: 47.3084488, longitude: -122.2140121},
             {latitude: 47.5524695, longitude: -122.0425407}]

   }
 }

 displayMarkers = () => {
   return this.state.stores.map((store, index) => {
     return <Marker key={index} id={index} position={{
      lat: store.latitude,
      lng: store.longitude
    }}
    onClick={() => console.log("You clicked me!")} />
   })
 }

 
  render() {
   return (
       <Map
         google={this.props.google}
         zoom={13}
         style={mapStyles}
         initialCenter={{ lat: 33.9, lng: -117.90}}
       >
         <Marker position={{ lat: 33.9, lng: -117.90}} />
       </Map>
   );
 }
}

export default GoogleApiWrapper({
 apiKey: {/* Insert Google map API key */}
})(MapContainer);


