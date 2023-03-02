import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./featuredPets.css";
import useFetch from "../../hooks/useFetch.js";
import { motion } from "framer-motion";
import config from '../../config/config.js'
import Skeleton from "../skeleton/Skeleton";

const FeaturedPets = () => {
  const { data, loading } = useFetch(`${config.url}/api/pets/getFeaturedPets`);
  const [leftWidth, setLeftWidth] = useState(0)
  const [today ] = useState(new Date())
  const [date ] = useState(new Date(today.getTime() + (7*24*6060*1000)))
  const [finalDate ] = useState(date.getDate()+'/'+ (date.getMonth()+1) +'/'+date.getFullYear())
  const carousel = useRef()

   useEffect(()=>{
    if (carousel.current){
      const bb = carousel.current.scrollWidth - carousel.current.offsetWidth
      setLeftWidth(-bb)
    }
  },[carousel.current?.scrollWidth])


  return (
    <>
    { data.data?.length >= 3 && ( 
      <div className="divContainer" >
      <h1 className="featuredPetsTitle">Necesitan casa antes del {finalDate}</h1>
      <motion.div className="featuredPetsContainer carousel" ref={carousel} >
        <motion.div
          className="featuredPetList "
          drag="x"
          dragConstraints={{ right: 0,  left: leftWidth}}
          
        >
          {loading
            ? <Skeleton type={'h-cards'} counter={1} />
            : data.data &&
            data.data.map((fpet) => {
                return (
                    <Link to={`/pets/${fpet.type}/${fpet._id}`}>
                  <motion.div className="featuredPetItem">
                    <img
                        className="featuredPetImg"
                        src={fpet.images[0]}
                        alt="perro"
                      />
                      <div className="featuredPetTitles"  key={fpet._id}>
                        <h1>{fpet.name}</h1>
                        <h2>{fpet.dates[0]} - {fpet.dates[1]}</h2>
                        </div>
                  </motion.div>
                    </Link>
                  );
              })}
        </motion.div>
        </motion.div>
        </div>
        )
      }
      </>
        );
      };
      
      export default FeaturedPets;
      