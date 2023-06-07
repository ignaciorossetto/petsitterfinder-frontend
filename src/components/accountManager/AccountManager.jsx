import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import './accountManager.css'

const AccountManager = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!user) {
        navigate("/error", { state: { error: "No iniciaste sesion" } });
      }
    }, []);

  return (
    <div className='accMan'>
          <h1>Bienvenido {user?.username}</h1>
          <h2>Panel de control</h2>
        <div className='accManContainer'>
            <div className="accManItemContainer accManItemContainerSetting">
            <Link to="/user/info">
            <h2>Panel usuario</h2>
            </Link>
            </div>
            {user.type==='user' && 
            <div className="accManItemContainer accManItemContainerPets">
            <Link to="/user/pets">
              <h2>Panel mascotas</h2>
            </Link>
            </div>
            }
            <div className="accManItemContainer">
            <Link to="/user/pets/daycareinfo">
              <h2>Historial de cuidados</h2>
            </Link>
            </div>
            <div className="accManItemContainer">
            <Link to="/user/payments">
              <h2>Pagos</h2>
            </Link>
            </div>
            <div className="accManItemContainer">
            <Link to="/user/messenger">
              <h2>Chat</h2>
            </Link>
          </div>
        </div>
            </div>
  )
}

export default AccountManager