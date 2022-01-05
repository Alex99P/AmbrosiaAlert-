import React, { useState,useEffect, Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap'


import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const mapStyles = {
  position: 'relative',  
  width: '100%',
  height: '100%',
 
  
};



const App=({google})=>{



    const [markers,setMarkers]=useState([]);

    // acestea va trebui sa le iau din baza de date
    useEffect(() => {
        
        setMarkers ( [
            {
            title: "The marker`s title will appear as a tooltip.",
            name: "SOMA",
            position: { lat: 45.75080745552041, lng: 21.23930212707521 }
          },
          {
            title: "The marker`s title will appear as a tooltip.",
            name: "SOMA",
            position: { lat: 45.75565841319558, lng: 21.2265133544922 }
          },
          {
            title: "The marker`s title will appear as a tooltip.",
            name: "SOMA",
            position: { lat: 45.75571829892702, lng: 21.21732947082521 }
          },
          {
            title: "The marker`s title will appear as a tooltip.",
            name: "SOMA",
            position: { lat: 45.7494, lng: 21.2272 }
          }
        ]
        )

    },[])
 
 



  const handleMapClick=(t,map,coord)=>{
    //   console.log({t,map,coord});
      const { latLng } = coord;
   

    const lat = latLng.lat();
    const lng = latLng.lng();

    setMarkers([...markers,{
        title: "",
        name: "",
        position: { lat, lng }

    }])

    // Get current location

    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("My location: ")
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });

    
    }
    

    return <div>
   {/* <Button  variant="primary">Delete</Button> */}



        <Map
          google={google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: "45.7494",
            lng: "21.2272"
          }}
          onClick={handleMapClick}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              title={marker.title}
              name={marker.name}
              position={marker.position}
            />
            
          ))}
        </Map>

      </div>
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyCqzm6FpKHAsKPvHHf3hb77pSt4sUx21oY'
  })(App);
  




