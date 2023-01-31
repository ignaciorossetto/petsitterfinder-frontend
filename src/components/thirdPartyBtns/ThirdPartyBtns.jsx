import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './thirdPartyBtns.css'

const ThirdPartyBtns = ({type}) => {
  return (
    <div className='tpContainer'>
        <span className="otherLoginSpan">  </span>
        <div className="tploginContainer">
            <FontAwesomeIcon className="tploginContainerIcon gIcon" icon={faGoogle}/>
            <span>{type==='login' ? 'Ingresa' : 'Registrate'} con Google</span>
          </div>
          <div className="tploginContainer">
            <FontAwesomeIcon className="tploginContainerIcon fbIcon" icon={faFacebook}/>
            <span>{type==='login' ? 'Ingresa' : 'Registrate'} con Facebook</span>
          </div>
    </div>
  )
}

export default ThirdPartyBtns