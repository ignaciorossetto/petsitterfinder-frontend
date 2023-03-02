import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import "./switch.css";
import config from "../../config/config.js";


const Switch = ({ state, petId, updater }) => {
  const [availability, setAvalability] = useState(state)
  console.log(config.port);
  const handleChange = async(e) => {
    
    try {
      await axios.put(`${config.url}/api/pets/${petId}`, {available: !availability})
      await axios.get(`${config.url}/api/auth/updateUser`);
      setAvalability(!availability)
      Swal.fire({
        icon: `${e.target.checked === true  ? 'error' : 'success'}`,
        title:  `${e.target.checked === true  ? 'Mascota no disponible' : 'Mascota disponible'}`,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      })
      
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title:  `Hubo un error`,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      })
    }
  }

  return (
    <label className="switch">
      <input
        className="switchCheckBox"
        checked={availability}
        onClick={handleChange}
        type="checkbox"
      />
      <span className="switchSlider" />
    </label>
  );
};

export default Switch;
