import React, { useState } from 'react'
import './searchSideBox.css'
import { DateRange } from "react-date-range";
import {format} from 'date-fns'


const ListContainer = ({pet, place, date_}) => {
    const [selectDog, setSelectDog] = useState(pet === 'dog' && true)
    const [selectFish, setSelectFish] = useState(pet === 'fish' && true)
    const [selectCat, setSelectCat] = useState(pet === 'cat' && true)
    const [openCalendar, setOpenCalendar] = useState(false)
    const [date, setDate] = useState(date_)
    
  return (
    <div className="listSearch">
            <div className="lsTitle">Search</div>
            <div className="lsItem">
              <label htmlFor="" className="lsItemLabel">Mascota</label>
              <select>
                <option>Todas</option>
                <option selected={selectDog}>Perros</option>
                <option selected={selectCat}>Gatos</option>
                <option selected={selectFish}>Peces</option>
              </select>
            </div>
            <div className="lsItem">
              <label htmlFor="" className="lsItemLabel">Lugar</label>
              <input type="text" className="lsItemInput" placeholder={place} />
            </div>
            <div className="lsItem">
              <label htmlFor="" className="lsItemLabel">Fechas </label>
              <span
              onClick={()=> setOpenCalendar(!openCalendar)}
              >{date && `${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
               {openCalendar && <DateRange
                onChange={(item)=> setDate([item.selection])}
                editableDateInputs={true}
                minDate={new Date()}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='sideBoxCalendar'
                />}
            </div>
            <div className="lsItem">
              <label htmlFor="" className="lsItemLabel">Categoria</label>
              <select>
                <option>-</option>
                <option>Perros Pequeños</option>
                <option>Perros Grandes</option>
                <option>Cachorros</option>
              </select>
            </div>
            <div className="lsItem">
              <label htmlFor="" className="lsItemLabel">Sexo</label>
              <select>
                <option>-</option>
                <option>Hembra</option>
                <option>Macho</option>
              </select>
            </div>
            <div className="lsItem">
                <button>Buscar!</button>
            </div>
          </div>
  )
}

export default ListContainer