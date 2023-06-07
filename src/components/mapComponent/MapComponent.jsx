import React, { useCallback, useMemo, useRef, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";
import './mapComponent.css'
import Places from "../places/Places";
import usePlacesAutocomplete from "use-places-autocomplete";


const MapComponent = () => {
    const {
        ready,
        value,
        setValue,
        suggestions:{
            status,
            data
        },
        clearSuggestions
    } = usePlacesAutocomplete()
    const mapRef = useRef()
    const center = useMemo(()=> ({lat: -31.39928021, lng: -64.1967848}), [])
    const options = useMemo(()=> ({
        disableDefaultUI: true,
        clickableIcons: false
    }), [])
    const [marker, setMarker] = useState(null)
    const [office, setOffice] = useState('')
    const [markerClick, setMarkerClick] = useState(null)
    const onLoad = useCallback(map=> (mapRef.current = map), [])
    const onClickMap = async(e) => {
        const obj = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        }
        setMarker(obj)
        Geocode.setApiKey(process.env.REACT_APP_API_KEY);
        Geocode.fromLatLng(obj.lat, obj.lng).then(
            (response) => {
              const address = response.results[0].formatted_address;
              setValue(address, false)
              clearSuggestions()
            },
            (error) => {
              console.error(error);
            }
          );
    }
  return <div className="map">
    <div className="mapContainer">
        <div className="mapSearchBar">
            <h2>Busca tu domicilio!</h2>
            <Places 
            setOffice={(position)=> {
                setOffice(position)
                mapRef.current?.panTo(position)
            }} 
            setMarkerClick={setMarkerClick}
            value={value}
            setValue={setValue}
            data={data}
            status={status}
            ready={ready}
            clearSuggestions={clearSuggestions}
            setMarker={setMarker}
            
            />
            <br />
            <br />
            {(status === 'OK' || marker) && <button>Confirmar</button>}
        </div>
        <div className="mapGoogle">
            <GoogleMap
            zoom={(office || marker) ? 15 : 12}
            center={center}
            mapContainerClassName="mapGoogleAPI"
            options={options}
            onLoad={onLoad}
            onClick={ markerClick && onClickMap}
            >
                {office && <Marker position={office}/>}
                {marker && <Marker position={marker}/>}
            </GoogleMap>
        </div>
    </div>
  </div>;
};

export default MapComponent;
