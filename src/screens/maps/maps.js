import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

import Modal from '../../components/mapModalWithInfo/mapModalInfo';
import Spinner from '../../assets/1481 (2).gif'
import { StandaloneSearchBox } from '@react-google-maps/api';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY
const containerStyle = {
    width: '90%',
    height: '100vh'
};




function Map() {

    const [currentLocation, setCurrentLocation] = useState(null);
    const [bookStoreMarkers, setBookStoreMarkers] = useState([]);
    const [currentMarkerInfo, setCurrentMarkerInfo]= useState()

    //modal for the map marker that was clicked 
    const [show,setShow] = useState(false)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCurrentLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
            axios.get(`https://whispering-reaches-81740.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${API_KEY}&location=${position.coords.latitude},${position.coords.longitude}&radius=10000&type=book store&keyword=book`, {

            }).then(res => setBookStoreMarkers(res.data.results))


        })




    }, [])




    return (
        <React.Fragment>
        {
           ( bookStoreMarkers.length > 0) ? 
            <LoadScript
                googleMapsApiKey={API_KEY}
            >
                 
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={currentLocation}
                    zoom={10}
                    
                >
                     
                    { /* Child components, such as markers, info windows, etc. */}
                   {
                       bookStoreMarkers.map((mark,i)=>{
                     
                         
                           return <Marker key={i} position={mark.geometry.location} onClick={() => {
                               setCurrentMarkerInfo(mark);
                               setShow(true);
                              
                               }} />
                           
                           })
                   }
                      
                       
                </GoogleMap>
            </LoadScript>
            :
                    <img src={Spinner} alt="spinner" className="spinner" />

      
        }

            {show && <Modal show={show} setShow={setShow} currentMarkerInfo={currentMarkerInfo} />}
        </React.Fragment>
       
    )
}

export default React.memo(Map)