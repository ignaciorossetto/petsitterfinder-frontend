import axios from "axios";
import React, { useEffect, useState } from "react";
import "./conversations.css";

const Conversations = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);
  const friendId = conversation?.members.find((m) => m !== currentUser._id);
  useEffect(() => {
    const getUser = async () => {
      try {
          const res = await axios.get(
            `http://localhost:5000/api/conversations/user/friend/${friendId}?type=${currentUser?.type}`
          );
          return setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [friendId]);

  return (
    <div className="conversation">
      <div className="convImgsContainer">
        <img src={user?.profileImg} alt="" className="conversationImg" />
      </div>
      <span className="conversationName">{user?.username}</span>
    </div>
  );
};

export default Conversations;








// I tried to implement a conversation per per user/pet. 
// frontend=> Pet/Conversation component
// backend => conv model/route
// socket =>  the problem was here, i needed a socket id for every user/pet - sitter conv.
