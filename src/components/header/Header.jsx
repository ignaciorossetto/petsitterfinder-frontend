import {
  faCalendarDays,
  faCat,
  faDog,
  faFish,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./header.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";

const Header = ({ type }) => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [itemList1, setItemList1] = useState(true);
  const [itemList2, setItemList2] = useState(false);
  const [itemList3, setItemList3] = useState(false);
  const [searchBarIcon, setSearchBarIcon] = useState(faCat);
  const [searchBarText, setSearchBarText] = useState('doggo');

  const handleListItems = (e) => {
    if (e === 'dogBtn') {
      console.log(e === 'dogBtn');
      setItemList1(true)
      setItemList2(false)
      setItemList3(false)
      setSearchBarIcon(faDog)
      setSearchBarText('doggo')
      return
    } else if ( e === 'fishBtn') {
      setItemList1(false)
      setItemList2(true)
      setItemList3(false)
      setSearchBarIcon(faFish)
      setSearchBarText('fish')
      return
    } else {
      setItemList1(false)
      setItemList2(false)
      setItemList3(true)
      setSearchBarIcon(faCat)
      setSearchBarText('kitty')
      return
    }
  }

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div
            id="dogBtn"
            className={`headerListItem ${itemList1 && "active"}`}
            onClick={()=> handleListItems('dogBtn')}
          >
            <FontAwesomeIcon icon={faDog} />
            <span>Perros</span>
          </div>
          <div 
            id="fishBtn"
            className={`headerListItem ${itemList2 && "active"}`}
            onClick={()=> handleListItems('fishBtn')}
            >
            <FontAwesomeIcon icon={faFish} />
            <span>Peces</span>
          </div>
          <div 
            id="catBtn"
            className={`headerListItem ${itemList3 && "active"}`}
            onClick={()=> handleListItems('catBtn')}
            >
            <FontAwesomeIcon icon={faCat} />
            <span>Gatos</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              Cuidar una mascota nunca fue tan facil!
            </h1>
            <p className="headerDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis dolores, iusto consequuntur quas voluptatibus fuga id
              nulla suscipit sapiente ratione ut in error velit itaque!
            </p>

            <button className="headerBtn">Register/Login</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={searchBarIcon} className="headerIcon" />
                <input
                  type="text"
                  placeholder={`Where are you looking for a ${searchBarText}?`}
                  className="headerSearchInput "
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => setOpenCalendar(!openCalendar)}
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openCalendar && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn strGreen">Buscar!</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
