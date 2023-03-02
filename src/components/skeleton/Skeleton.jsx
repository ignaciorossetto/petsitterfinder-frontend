import React from 'react'
import './skeleton.css'

const Skeleton = ({type, counter}) => {
  let Counter = counter
  const FeedSkeleton = () => {
    if (type==='feed') {
      return <>
      <div className='skSearchItem'>
        <div className='skImgContainer'>
          <div className="skImg"></div>
        </div>
          <div className="skDescContainer">
          <div className="skDescCont">
              <div className='skTitle'></div>
              <div className='skDesc'></div>
              <div className='skDesc'></div>
              <div className='skDesc'></div>
              <div className='skDesc'></div>
              <div className='skDesc'></div>
              <div className='skDesc'></div>
          </div>
          </div>
      </div>
      </>
    }
    if (type==='h-cards') {
      return <>
      <div className='hskSearchItem'>
        <div className='hskImgContainer'>
          <div className="hskImg"></div>
              <div className='hskDesc'></div>
        </div>
        <div className='hskImgContainer'>
          <div className="hskImg"></div>
              <div className='hskDesc'></div>
        </div>
        <div className='hskImgContainer'>
          <div className="hskImg"></div>
              <div className='hskDesc'></div>
        </div>
      </div>
      </>
    }
    
  }

    return Array(Counter).fill(<FeedSkeleton />)
  

}

export default Skeleton