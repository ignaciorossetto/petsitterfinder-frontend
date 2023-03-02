import axios from 'axios'
import React, { useContext, useRef, useState } from 'react'
import { SearchContext } from '../../context/SearchContext'
import './searchSideBox.css'


const ListContainer = () => {
    const {pet, sex, age, size, dispatch } = useContext(SearchContext)
    const typeSelect = useRef(pet)
    const sexSelect = useRef(sex)
    const ageSelect = useRef(age)
    const sizeSelect = useRef(size)


    const handleClick = async() =>{
      const obj ={
        pet: typeSelect.current.value,
        size:   sizeSelect.current.value,
        age: ageSelect.current.value,
        sex: sexSelect.current.value  
      }
      dispatch({type: "NEW_SEARCH", payload:obj })
    }
    
  return (
    <div className="listSearch">
            <div className="lsTitle">Search</div>
            <div className="lsItem">
              <label htmlFor="" className="lsItemLabel">Mascota</label>
              <select name="type" ref={typeSelect}>
                <option value='dog'  selected={pet === 'dog' && true}>Perros</option>
                <option value='cat'  selected={pet === 'cat' && true}>Gatos</option>
                <option value='fish' selected={pet === 'fish' && true} >Peces</option>
              </select>
            </div>
            
            <div className="lsItem">
              <label htmlFor="" className="lsItemLabel">Tamano</label>
              <select name="size" ref={sizeSelect}>
                <option value='' selected={size === '-' && true}>-</option>
                <option value='S' selected={size === 'S' && true}>Pequeños</option>
                <option value='M' selected={size === 'M' && true}>Medianos</option>
                <option value='L' selected={size === 'L' && true}>Grandes</option>
              </select>
            </div>
            <div className="lsItem">
              <label htmlFor="" className="lsItemLabel">Sexo</label>
              <select name="sex" ref={sexSelect}>
                  <option value="-" selected={sex === '-' && true}>-</option>
                  <option value="male" selected={sex === 'male' && true}>Macho</option>
                  <option value="female" selected={sex === 'female' && true}>Hembra</option>
                </select>
            </div>
            <div className="lsItem">
              <label htmlFor="" className="lsItemLabel">Edad</label>
              <select name="age" ref={ageSelect}>
                  <option value="-" selected={age === '-' && true}>-</option>
                  <option value="very-young" selected={age === 'very-young' && true}>Pequeño/a (menor a un año)</option>
                  <option value="young" selected={age === 'young' && true}>Joven (entre 1 y 3 años)</option>
                  <option value="adult" selected={age === 'adult' && true}>Adult/a (entre 3 y 10 años)</option>
                  <option value="elder" selected={age === 'elder' && true}>Anciano/a (mayor a 10 años)</option>
                </select>
            </div>
            <div className="lsItem">
                <button onClick={handleClick}>Buscar!</button>
            </div>
          </div>
  )
}

export default ListContainer