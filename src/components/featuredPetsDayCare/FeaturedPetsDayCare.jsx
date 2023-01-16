import React from 'react'
import './featuredPetsDayCare.css'

const featuredPetsDayCare = () => {
  return (
    <div className='fPetsDayCareContainer'>
        <h1 className='fPetsDayCareTitle'>Nuestras guarderias preferidas</h1>
        <div className="fPetsDayCareList">
            <div className="fPetsDayCareItem">
                <img src="https://www.lavoz.com.ar/resizer/QCIINBorL53cZpKBb6nelCIXeBU=/1023x683/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/EWVCPCDDO5F47C5LRLU6LV3QZY.jpg" alt="" className="fPetsDayCareImg" />
                <div className="fPetsDayCareTitles">
                    <span className='fpName'>Alem</span>
                    <span className="fpPrice">Desde $1300 el dia</span>
                    <div className="fpRating">
                        <button>8.5</button>
                        <span>Excelente!</span>

                    </div>
                </div>
            </div>
            <div className="fPetsDayCareItem">
                <img src="https://imgar.zonapropcdn.com/avisos/1/00/43/62/77/74/1200x1200/1667516301.jpg" alt="" className="fPetsDayCareImg" />
                <div className="fPetsDayCareTitles">
                    <span className='fpName'>Pet King</span>
                    <span className="fpPrice">Desde $1300 el dia</span>
                    <div className="fpRating">
                        <button>8.5</button>
                        <span>Excelente!</span>

                    </div>
                </div>
            </div>
            <div className="fPetsDayCareItem">
                <img src="https://nearindex.com/img/ubzXxfGSMV3wr5lATPcAVOMib5NUiTtak5ix8om4puXQ1TXvvMA5AzKWYD6FP2fj2nWiJ25Yfz8av_1MZ8SCZcWnutadlO6HAFbUQtgYQ8BbD1aoRBg88JNwUwPKBJ_NO5fc10VqmLspaQJ6-7xATlkDDAsiMx76scvk_mNNPPIDA2h_SVNgVnMcwBKkvFKsSXXr-aohmWVEDyrB6lXM89ot-jhZB7pbcwoMYS8eSzU" alt="" className="fPetsDayCareImg" />
                <div className="fPetsDayCareTitles">
                    <span className='fpName'>Pixies</span>
                    <span className="fpPrice">Desde $1300 el dia</span>
                    <div className="fpRating">
                        <button>8.5</button>
                        <span>Excelente!</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default featuredPetsDayCare