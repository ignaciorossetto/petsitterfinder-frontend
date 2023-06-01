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
        <div className='accManContainer'>
          <h1>Bienvenido {user?.username}</h1>
          <h2>Panel de control</h2>
          <ul>
            <Link to="/user/info">
              <li>Panel cuenta</li>
            </Link>
            {user.type==='user' && 
            <Link to="/user/pets">
              <li>Panel mascotas</li>
            </Link>
            }
            <Link to="/user/pets/daycareinfo">
              <li>Historial de cuidados</li>
            </Link>
            <Link to="/user/payments">
              <li>Pagos</li>
            </Link>
            <Link to="/user/messenger">
              <li>Chat</li>
            </Link>
          </ul>
        </div>
  )
}

export default AccountManager