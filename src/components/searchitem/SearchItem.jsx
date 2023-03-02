import React from 'react'
import './searchItem.css'
import { Link } from 'react-router-dom'

const SearchItem = ({item}) => {

  return (
    <div className='searchItem'>
      <div className='siImgContainer'>
        <img src={item.images[0]} alt="" className="siImg" />
      </div>
        <div className="siDescContainer">
        <div className="siDesc">
            <h1 className="descName">{item.name}</h1>
            <div className="descName">Nombre: {item.name}</div>
            <div className="descName">Mascota: {item.type === 'cat' ? 'Gato' : item.type === 'dog' ? 'Perro' : 'Pecera' }</div>
            <div className="descAge">Tamano: {item.size}</div>
            <div className="descBreed">Raza: {item.breed}</div>
            <div className="descDates">Fechas: {item.dates[0]} - {item.dates[1]}</div>
            <div className="descDates">Dueñe: {item.ownerName}</div>
        </div>
        <Link to={`/pets/${item.type}/${item._id}`} state={item}>
            <button className='itemBtn'>Detalles sobre {item.name}</button>
        </Link>
        </div>
    </div>
  )
}

export default SearchItem
