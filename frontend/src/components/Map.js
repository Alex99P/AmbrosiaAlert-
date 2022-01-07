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


// {
//   "position": { "lat": 45.75565841319558, "lng": 21.2265133544922 }
// }
// {
//     "position": { "lat": 45.7405352092011, "lng": 21.266596286010756 }
// }
//  {
//     "position": { "lat": 45.7492203222726, "lng": 21.214239566040053 }
// }



const Maps=({google})=>{

  const [currentLoc,setCurrentLoc]=useState();
  const [markers,setMarkers]=useState([]);
   


    useEffect(() => {
      getData();

      navigator.geolocation.getCurrentPosition(function(position) {


    setCurrentLoc({
      lat:position.coords.latitude ,
      lng: position.coords.longitude
    })

 
    });

    },[]);

    
    

    const getData= async ()=> {

      const response= await axios.get("http://localhost:5000/datas");
      if(response.status===200){
        setMarkers(response.data); 
        console.log(response.data);
    
      }
    
    }

    const addUser = async (data) => {

      const lat = data.lat();
      const lng = data.lng();
      
      const position={ lat,lng };

      const response = await axios.post("http://localhost:5000/data", {position});
      if (response.status === 200) {
       
        setMarkers([...markers,{
      
          position
         
  
      }])
      // console.log(markers);

      }
    };
 


  const handleMapClick=(t,map,coord)=>{
      const { latLng } = coord;

   
      addUser(latLng);

    }
    
    
    return <div>
   {/* <Button  variant="primary">Delete</Button> */}

        {currentLoc&&<Map
          google={google}
          zoom={14}
          style={mapStyles}
          initialCenter={currentLoc}
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
        </Map>}

      </div>
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyCqzm6FpKHAsKPvHHf3hb77pSt4sUx21oY'
  })(Maps);
  




