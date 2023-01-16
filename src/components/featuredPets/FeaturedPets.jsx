import React from 'react'
import './featuredPets.css'

const FeaturedPets = () => {
    return (
      <div className="featuredPetsContainer">
        <h1 className="featuredPetsTitle">Necesitan casa antes del 15/01/2023</h1>
          <div className="featuredPetList">
              <div className="featuredPetItem">
                  <img className='featuredPetImg' src='https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785077_960_720.jpg' alt="perro" />
                  <div className="featuredPetTitles">
                      <h1>Juan</h1>
                      <h2>15/01/2023 to 25/01/2023</h2>
                  </div>
              </div>
              <div className="featuredPetItem">
              <img className='featuredPetImg' src='https://cdn.pixabay.com/photo/2022/12/31/14/32/cat-7688749_960_720.jpg' alt="perro" />
                  <div className="featuredPetTitles">
                      <h1>Gaturro</h1>
                      <h2>15/01/2023 to 25/01/2023</h2>
                  </div>
              </div>
              <div className="featuredPetItem">
              <img className='featuredPetImg' src='https://cdn.pixabay.com/photo/2017/03/14/14/49/cat-2143332_960_720.jpg' alt="perro" />
                  <div className="featuredPetTitles">
                      <h1>Oliver</h1>
                      <h2>15/01/2023 to 25/01/2023</h2>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default FeaturedPets