import React, { useState,useEffect, Component } from 'react';
import '../App.css';
import { Button } from 'react-bootstrap'
import axios from 'axios';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
import NavBar from './navBar';

const mapStyles = {
  position: 'relative',  
  // width: '100%',
  height: '100%',
  marginLeft:" 230px",
  // overflow: "hidden"
};


const Maps=({google})=>{

  
  // <NavBar handleAddButon="handleAddButon" />
  const [currentLoc,setCurrentLoc]=useState();
  const [markers,setMarkers]=useState([]);
  const [btnClick,setBtnClick]=useState(false);
   



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
      setBtnClick(false);
      }
    };
 

    const handleMapClick=(t,map,coord)=>{
      const { latLng } = coord;
// console.log(btnClick);
    if(btnClick===true)
      addUser(latLng);

    }
  
     const handleAddButon=()=>{
      // console.log("aici")
      setBtnClick(true);
      }
    
    return <div>
    <div className="sidenav">
    <Button onClick={handleAddButon} variant="danger">Add alert</Button>
    </div>
        {currentLoc&&<Map
          google={google}
          zoom={15}
          style={mapStyles}
          initialCenter={currentLoc}
          onClick={handleMapClick}
        >
          { markers.map((marker, index) => (
           
            <Marker
              key={index}
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
  




