import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import config from "../../config/config.js";
import { SearchContext } from "../../context/SearchContext.js";
import useFetch from "../../hooks/useFetch";
import Skeleton from "../skeleton/Skeleton.jsx";
import "./petList.css";

const PetList = () => {
  const navigate = useNavigate();
  const{data, loading, error} = useFetch(`${config.url}/api/pets/countByCat?types=dog,cat,fish`)
  const { dispatch} = useContext(SearchContext);
    const handleSearch = (type) => {
    const obj ={
      pet: type,
      sex: '',
      size: '',
      age: ''
    }
    console.log(obj);
    dispatch({type: "NEW_SEARCH", payload:obj })
    navigate(`/pets/${type}`)
  };
  return (
    <div className="pListContainer">
      <h1 className="pTitle">Mascotas por categoria!</h1>
      <div className="pList">

        {loading ? 
        <div className="petListSkeletonContainer">
          <Skeleton type={'h-cards'} counter={1} /> 
        </div>
        : data.data && <>
        
          <div className="pListItem" onClick={()=>handleSearch('dog')}>
          <img src="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_960_720.jpg" alt="" className="pListImg" />
          <div className="pListTitles">
            <h1>Perros</h1>
            <h2>{data.data[0]} cerca de tu ubicacion</h2>
          </div>
        </div>

        <div className="pListItem" onClick={()=>handleSearch('cat')}>
          <img src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg" alt="" className="pListImg" />
          <div className="pListTitles">
            <h1>Gatos</h1>
            <h2>{data.data[1]} cerca de tu ubicacion</h2>
          </div>
        </div>

        <div className="pListItem" onClick={()=>handleSearch('fish')}>
          <img src="https://okdiario.com/img/2020/02/26/cuidados-de-tu-pecera-en-invierno-1-655x368.jpg" alt="" className="pListImg" />
          <div className="pListTitles">
            <h1>Peceras</h1>
            <h2>{data.data[2]} cerca de tu ubicacion</h2>
          </div>
        </div>
        </>
        }
      </div>
    </div>
  );
};

export default PetList;
