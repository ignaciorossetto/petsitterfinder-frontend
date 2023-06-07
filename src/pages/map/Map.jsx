import React from "react";
import {  useLoadScript } from "@react-google-maps/api";
import './map.css'
import MapComponent from "../../components/mapComponent/MapComponent";

const libr = ['places']

const Map = () => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_API_KEY,
        libraries: libr,
        mapId:'a97afa9e56a87dc9'
    })

    if(!isLoaded) return <div>Loading...</div>


  return <MapComponent/>
};

export default Map;
