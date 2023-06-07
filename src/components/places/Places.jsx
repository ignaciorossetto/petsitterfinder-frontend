import React from 'react'
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng
} from 'use-places-autocomplete'
import './places.css'

const Places = ({setOffice,setMarker, setMarkerClick, value, setValue, data, status, ready, clearSuggestions}) => {

    const handlePlacesClick = async(val) => {
        setValue(val, false)
        setMarkerClick(null)
        setMarker(null)
        clearSuggestions()
        const result = await getGeocode({address: val})
        const {lat, lng} = await getLatLng(result[0])
        setOffice({lat, lng})

    }



  return (
    <>
        <input
        type='text'
        value={value} 
        onChange={e=> {
            setValue(e.target.value)
        }}
        disabled={!ready}
        placeholder='Domicilio...'
        />
        <>
            {
                data.length === 0 && status === 'OK' ? 
                    <div>
                      
                    </div> : status === 'OK' ? <> {data.map(({place_id, description})=> (
                        <div key={place_id} className='placesOptionsResult' onClick={(e)=> handlePlacesClick(description)}>
                            {description}
                        </div>

                   ))}<button onClick={()=> {setMarkerClick(true); setOffice(null); setValue('')}}>Queres marcarlo en el mapa?</button></> : status === 'ZERO_RESULTS' && 
                   <div>
                    No se encontraron resultados. <button onClick={()=> {setMarkerClick(true); setOffice(null)}}>Queres marcarlo en el mapa?</button>
                   </div>
            }
        </>
    </>
  )
}

export default Places