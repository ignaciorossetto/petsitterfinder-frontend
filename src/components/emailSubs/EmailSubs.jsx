import React from 'react'
import './emailSubs.css'


const EmailSubs = () => {
  return (
    <div className="eSubsContainer">
        <div className="eSubsTitles">
            <span className='eSubsTitlesMain'>Recibi un mail cuando haya mascotas para cuidar! </span>
            <span className='eSubsTitlesSec'></span>
        </div>
        <div className="eSubsEmail">
            <input type='email' className="eSubsEmailInput" placeholder='Escribi tu email'/>
            <button className='eSubsEmailBtn'>Suscribite</button>
        </div>
    </div>
  )
}

export default EmailSubs