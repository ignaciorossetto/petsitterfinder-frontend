import React from 'react'
import './searchItem.css'

const SearchItem = ({item}) => {
  return (
    <div className='searchItem'>
        <img src={item.thumbnail} alt="" className="siImg" />
        <div className="siDescContainer">
        <div className="siDesc">
            <h1 className="descName">{item.name}</h1>
            <div className="descName">Nombre: {item.name}</div>
            <div className="descAge">Edad: {item.age}</div>
            <div className="descGender">Genero: {item.gender}</div>
            <div className="descBreed">Raza: {item.breed}</div>
            <div className="descDates">Fechas: {item.start_date} - {item.end_date}</div>
            <div className="descDates">Dueñe: Juan</div>
        </div>
        <button className='itemBtn'>Detalles sobre {item.name}</button>
        </div>
    </div>
  )
}

export default SearchItem
