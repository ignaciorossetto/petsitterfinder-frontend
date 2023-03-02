import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './list.css'
import SearchSideBox from '../../components/searchSideBox/SearchSideBox'

import SearchItem from '../../components/searchitem/SearchItem'
import EmailSubs from '../../components/emailSubs/EmailSubs'
import useFetch from '../../hooks/useFetch'
import Skeleton from '../../components/skeleton/Skeleton'
import { SearchContext } from '../../context/SearchContext'
import axios from 'axios'
import config from "../../config/config.js";


const List = () => {

  const {pet, sex, age, size, dispatch} = useContext(SearchContext)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  
  const fetchPets = async(url)=> {
    setLoading(true)
    const response = await axios.get(url)
    setData(response.data)
    setLoading(false)
  }


  useEffect(()=>{
    const petSearch = `type=${pet}&`
    const sexSearch = sex === '-' ? '' : `sex=${sex}&`
    const ageSearch = age === '-' ? '' : `age=${age}&`
    const sizeSearch = size === '-' ? '' : `size=${size}&`
    const url = `${config.url}/api/pets/?available=true&${petSearch}${sexSearch}${ageSearch}${sizeSearch}`
    console.log(url);
    fetchPets(url)
  }, [pet, sex, age, size])



  return (
    <div>
      <Navbar/>
      <Header type={'list'}/>
      <div className="listContainer">
        <div className="listWrapper">
          <SearchSideBox />
          <div className="listResult">
            {
              loading  ? <Skeleton type={'feed'} counter={3}/> :
            data?.length > 0 ? 
            data?.map((item)=> {
              return <SearchItem key={item._id} item={item}/>
            }) : <h1>
              Lo siento, proba con otra categoria de mascotas!</h1>
              
            }
          </div>   
        </div>
      </div>
      <EmailSubs/>
      <Footer/>
    </div>
  )
}

export default List