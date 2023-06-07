import React, { useState } from 'react'
import {   useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import './addressGoogleMapInput.css'


const AddressGoogleMapInput = ({setAddress, register, errors}) => {
    const [validatorVariable, setValidatorVariable] = useState(null)
    
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

    const checkStatus = () => {
        if (validatorVariable) {
            return true
        }
        return false
    }

    const handlePlacesClick = async(val) => {
        setValue(val, false)
        clearSuggestions()
        const result = await getGeocode({address: val})
        const {lat, lng} = await getLatLng(result[0])
        if(status === 'OK') setValidatorVariable(true)
        setAddress({
            address: val,
            latLng: {
              lat:lat,
              lng:lng
            }
          })
    }

    return (
        <>
            <input
            type='text'
            {...register('fullAddress', {
                required: true,
                validate: checkStatus,
            })}
            disabled={!ready}
            name='fullAddress'
            className='rFormInput'
            value={value} 
            onChange={e=> {
                setValue(e.target.value)
            }}
            placeholder='Domicilio...'
            />
            {errors.fullAddress?.type === 'required' && (
            <p style={{ color: "red" }}>Debe ingresar domicilio</p>
          )}
            {(errors.fullAddress?.type === 'validate' && !validatorVariable) && (
            <p style={{ color: "red" }}>No se encontro el domicilio</p>
          )}
            <>
            {
                data.length === 0 && status === 'OK' ? 
                    <div>
                      
                    </div> : status === 'OK' && <> {data.map(({place_id, description})=> (
                        <div key={place_id} className='addressPlacesOptionsResult' onClick={(e)=> handlePlacesClick(description)}>
                            {description}
                        </div>

                   ))}</> 
            }
        </>
        </>
    )
}

export default AddressGoogleMapInput