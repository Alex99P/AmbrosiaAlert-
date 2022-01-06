import React, { useState,useEffect, Component } from 'react';
import '../App.css';
import { Button } from 'react-bootstrap'
import axios from 'axios';


import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const mapStyles = {
  position: 'relative',  
  width: '100%',
  height: '100%',
 
  
};



const Maps=({google})=>{



    const [markers,setMarkers]=useState([]);

    // acestea va trebui sa le iau din baza de date
    useEffect(() => {
      getData();

    },[]);

    const getData= async ()=> {

      const response= await axios.get("http://localhost:5000/datas");
      if(response.status===200){
        setMarkers(response.data); //aici
    
      }
    
    }
 


  const handleMapClick=(t,map,coord)=>{
      const { latLng } = coord;
   

    const lat = latLng.lat();
    const lng = latLng.lng();


    setMarkers([...markers,{
      
        // title: "",
        // name: "",
        position: { lat, lng },
        // id:''

    }])

    // Get current location

    // navigator.geolocation.getCurrentPosition(function(position) {
    //   console.log("My location: ")
    //   console.log("Latitude is :", position.coords.latitude);
    //   console.log("Longitude is :", position.coords.longitude);
    // });


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
          { markers.map((marker, index) => (
            <Marker
              key={marker.id}
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
  })(Maps);
  




