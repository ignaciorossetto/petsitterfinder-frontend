import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="footerContainer">
        <div className="footerListContainer">
          <ul className="footerList">
            <li className="footerListItem">Item</li>
            <li className="footerListItem">Item</li>
            <li className="footerListItem">Item</li>
            <li className="footerListItem">Item</li>
            <li className="footerListItem">Item</li>
          </ul>
        </div>
        <div className="footerListContainer">
          <ul className="footerList">
            <li className="footerListItem">Item</li>
            <li className="footerListItem">Item</li>
            <li className="footerListItem">Item</li>
            <li className="footerListItem">Item</li>
            <li className="footerListItem">Item</li>
          </ul>
        </div>
        <div className="footerListContainer">
          <ul className="footerList">
            <li className="footerListItem">Ins</li>
            <li className="footerListItem">Face</li>
            <li className="footerListItem">Twit</li>
            <li className="footerListItem">Wapp</li>
            <li className="footerListItem">Link</li>
          </ul>
        </div>
      </div>
    </div>
      <div className="footerCopyR">© 2023 PetSitterFinder.com ™</div>
    </>
  );
};

export default Footer;
