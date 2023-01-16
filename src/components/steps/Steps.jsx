    import React from 'react'
    import './steps.css'


    const Steps = () => {
      return (
        <div className="stepsContainer">
            <h1 className="stepsTitle">Pasa unos dias con una mascota!</h1>
            <div className="stepList">
                <div className="stepItem">
                    <img className='stepImg' src='https://media.istockphoto.com/id/1311059363/es/foto/mujer-elegante-en-la-sala-de-estar-en-el-d%C3%ADa-soleado.jpg?s=1024x1024&w=is&k=20&c=QxT1_LdhZa60nTTHvIUDvkzfNpVUhuxzy4SXVnEVUmg=' alt="perro" />
                    <div className="stepTitles">
                        <h1>Registrate en 3 pasos simples</h1>
                    </div>
                </div>
                <div className="stepItem">
                <img className='stepImg' src='https://cdn.pixabay.com/photo/2022/12/31/14/32/cat-7688749_960_720.jpg' alt="perro" />
                    <div className="stepTitles">
                        <h1>Contacta un Pet Owner</h1>
                    </div>
                </div>
                <div className="stepItem">
                <img className='stepImg' src='https://media.istockphoto.com/id/1398856548/es/foto/retrato-de-una-mujer-joven-con-un-perro-pointer-h%C3%BAngaro-y-un-peque%C3%B1o-gatito-en-sus-brazos.jpg?s=1024x1024&w=is&k=20&c=ZxBBiZ8_Zyr2utv0sRG6-KJqqkMJIGROf3O69gg1548=' alt="perro" />
                    <div className="stepTitles">
                        <h1>Confirma tu Pet Sitting!</h1>
                    </div>
                </div>
            </div>
        </div>
      )
    }
    
    export default Steps