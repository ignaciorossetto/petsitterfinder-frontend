import { faCat, faDog, faFish } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

const Header = ({ type, petType }) => {
  const navigate = useNavigate();
  const { dispatch} = useContext(SearchContext);
  const [size_, setSize] = useState("-");
  const [sex, setSex] = useState("-");
  const [age, setAge] = useState("-");
  const [searchType, setSearchType] = useState({
    name: "dog",
    bool: true,
  });

  const handleSearch = () => {
    const obj ={
      pet: searchType.name,
      size: size_,
      age: age,
      sex: sex,
    }
    console.log(obj);
    dispatch({type: "NEW_SEARCH", payload:obj })
    navigate(`/pets/${searchType.name}`)
  };

  const handleSizeSelect = (e) => {
    console.log(e.target.value);
    setSize(e.target.value);
  };
  const handleSexSelect = (e) => {
    setSex(e.target.value);
  };
  const handleAgeSelect = (e) => {
    setAge(e.target.value);
  };

  const handleListItems = (e) => {
    if (e === "dogBtn") {
      setSearchType({
        name: "dog",
        bool: true,
      });
      return;
    } else if (e === "catBtn") {
      setSearchType({
        name: "cat",
        bool: true,
      });
      return;
    } else if (e === "fishBtn") {
      setSearchType({
        name: "fish",
        bool: true,
      });
      return;
    }
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              Que cuiden tu mascota nunca fue tan fácil!
            </h1>
            <p className="headerDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis dolores, iusto consequuntur quas voluptatibus fuga id
              nulla suscipit sapiente ratione ut in error velit itaque!
            </p>
            <Link to="/sitter-register">
              <button className="headerBtn">Registrate como <span className="headerBtnSpan"> CUIDADOR! </span></button>
            </Link>
            <div className="headerSearch">
              <div className="headerList">
                <div
                  id="dogBtn"
                  className={`headerListItem ${
                    searchType.name === "dog" && "active"
                  }`}
                  onClick={() => handleListItems("dogBtn")}
                >
                  <FontAwesomeIcon icon={faDog} />
                </div>
                <div
                  id="catBtn"
                  className={`headerListItem ${
                    searchType.name === "cat" && "active"
                  }`}
                  onClick={() => handleListItems("catBtn")}
                >
                  <FontAwesomeIcon icon={faCat} />
                </div>
                <div
                  id="fishBtn"
                  className={`headerListItem ${
                    searchType.name === "fish" && "active"
                  }`}
                  onClick={() => handleListItems("fishBtn")}
                >
                  <FontAwesomeIcon icon={faFish} />
                </div>
              </div>
              <div className="headerSearchItem">
                <label>Tamaño: </label>
                <select onChange={handleSizeSelect}>
                  <option  selected={true}>
                    -
                  </option>
                  <option value="S">Pequeno</option>
                  <option value="M">Mediano</option>
                  <option value="L">Grande</option>
                </select>
              </div>
              <div className="headerSearchItem">
                <label>Sexo: </label>
                <select name="sex"  onChange={handleSexSelect} >
                  <option value="-" selected={true}>
                    -
                  </option>
                  <option value="male">Macho</option>
                  <option value="female">Hembra</option>
                </select>
              </div>
              <div className="headerSearchItem">
                <label>Edad: </label>
                <select name="age" onChange={handleAgeSelect}>
                  <option value="-" selected>
                    -
                  </option>
                  <option value="very-young">Pequeño/a (menor a un año)</option>
                  <option value="young">Joven (entre 1 y 3 años)</option>
                  <option value="adult">Adult/a (entre 3 y 10 años)</option>
                  <option value="elder">Anciano/a (mayor a 10 años)</option>
                </select>
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn strGreen" onClick={handleSearch}>
                  Buscar!
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
