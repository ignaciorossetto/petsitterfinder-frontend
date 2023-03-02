import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import './imageSlider.css'


const ImageSlider = ({images}) => {
    const [number, setNumber] = useState(0)
    const handleSliderClick = (mov) => {
        const maxLenght = images.length
        let newNumber;
        if (mov==='r'){
            newNumber = number === 0 ? maxLenght-1 : number - 1
        } else {
            newNumber = number === maxLenght-1 ? 0 : number + 1
        }
        setNumber(newNumber)
    }

  return (
    <div className="imageContainer">
        <div className="imagenCont">
        {images?.length > 1 && <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={()=>handleSliderClick('l')} className='sliderArrow'/>}
        
        <img src={images[number]} alt="" className="petImg"/>
        {images?.length > 1 && <FontAwesomeIcon icon={faArrowAltCircleRight} onClick={()=>handleSliderClick('r')} className='sliderArrow'/>}
        </div>
    </div>
  )
}

export default ImageSlider