import React, {  useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faPersonShelter, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/AuthContext";
import axios from 'axios'
import config from "../../config/config";


const Navbar = ({type}) => {

  const navigate = useNavigate()
  const {user, dispatch} = useContext(AuthContext)
  const handleLogOut = async() => {
    try {
      dispatch({type: "LOGOUT"})
      // document.cookie = 'access_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        icon: 'success',
        title: 'Logout successfully'
      })
      const response = await axios.get(`${config.url}/api/auth/logout`)
      if(response) navigate('/')
    } catch (error) {
      
    }
  }






  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to='/' className="navLogoLink">
          <span className="logo"> Pet Sitter Finder</span>
        </Link>
        {type !== 'l/r' && 
        <div className="navItems">
          { !user &&
            <>
              <Link to='/register'>
                <button className="navButton">Register</button>
              </Link>
              <Link to={'/login'}>
                  <button className="navButton"><FontAwesomeIcon className="navIcon" icon={faPaw}/>  Login Mascotas</button>
              </Link>
              <Link to={'/login-sitter'}>
                  <button className="navButton"><FontAwesomeIcon className="navIcon" icon={faPersonShelter}/>  Login Cuidadores</button>
              </Link>
            </>
            
          }
           {user?.type === 'sitter' ? 
             <>
              
               <Link to={`/user/`}>
                 <button className="navButton"><FontAwesomeIcon className="navIcon" icon={faPaw}/>  Cuenta</button>
               </Link>
                   <button onClick={handleLogOut} className="navButton"><FontAwesomeIcon icon={faRightFromBracket} />  Log out</button>
             </>
             : user?.type === 'user' &&
             <>
               <Link to={`/user/pets`}>
                 <button className="navButton"><FontAwesomeIcon className="navIcon" icon={faPaw}/>  Mascotas</button>
               </Link>
              
               <Link to={`/user/`}>
                 <button className="navButton"><FontAwesomeIcon className="navIcon" icon={faUser} />  Cuenta</button>
               </Link>
                   <button onClick={handleLogOut} className="navButton"><FontAwesomeIcon className="navIcon" icon={faRightFromBracket} />  Log out</button>
             </>
            
           }
           </div>
         }
      </div>
    </div>
  );
};

export default Navbar;
