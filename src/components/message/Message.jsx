import React from "react";
import "./message.css";
import {format} from 'timeago.js'

const Message = ({ message, own }) => {
  const s = own ? "message own" : "message"
  return (
    <div className={s}>
      <div className="messageTop">
        <img
          src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
          alt=""
          className="messageImg"
        />
        <p className="messageText">{message?.text}</p>
      </div>
      <div className="messageBottom">{format(message?.createdAt)}</div>
    </div>
  );
};

export default Message;
