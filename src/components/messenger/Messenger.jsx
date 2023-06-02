import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import io from 'socket.io-client'
import axios from 'axios'
import Conversations from '../conversations/Conversations'
import Header from '../header/Header'
import Message from '../message/Message'
import Navbar from '../navbar/Navbar'
import './messenger.css'
import { useLocation } from 'react-router-dom'
import config from '../../config/config'

const Messenger = () => {
    const {state} = useLocation()
    let [conversations, setConversations] = useState([])
    let [currentChat, setCurrentChat] = useState(state?.conv ? state?.conv : null)
    let [messages, setMessages] = useState([])
    let [newMessage, setNewMessage] = useState('')
    let [arrivalMessage, setArrivalMessage] = useState(null)
    const scrollRef = useRef()
    const socket = useRef()
    const {user} = useContext(AuthContext)



    // When Messenger mounts, socket listening to port and msg arrivals
    useEffect(()=> {
        socket.current = io("ws://localhost:8900")
        socket.current.on('getMessage', data=>{
            setArrivalMessage({
                sender:data.senderId,
                text: data.text,
                createdAt: Date.now()
            })
        })
    }, [])

    // Conditions to set displayed messages
    useEffect(()=> {
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) && setMessages(prev=> [...prev, arrivalMessage])
    },[arrivalMessage, currentChat])

    // This is for having a list of online users...
    useEffect(()=> {
        socket.current?.emit('addUser', user._id)
        socket.current?.on('getUsers', users=>{
        })
    }, [user])

    // This sets the conversations of the chatMenu
    useEffect(()=>{
        const getConversations = async() => {
            try {
                const res = await axios.get(`${config.url}/api/conversations/user/current/${user?._id}`)
                setConversations(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getConversations()

    }, [user?._id])

    //
    useEffect(()=>{
        const getMessages = async() => {
            try {
              const res = await axios.get(`${config.url}/api/messages/${currentChat?._id}`)  
              setMessages(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getMessages()
    }, [currentChat])

    useEffect(()=>{
        scrollRef.current?.scrollIntoView()
    },[messages])


    const handleSendMsg = async() => {
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id
        }

        const receiverId = currentChat.members?.find(member=> member !== user._id)

       socket.current.emit('sendMessage',{
        senderId: user._id,
        receiverId,
        text: newMessage
       }) 

        try {
            const res = await axios.post(`${config.url}/api/messages`, message)
            setMessages([...messages, res.data])
            setNewMessage('')
            return
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      }, [messages]);

    
    

  return (
    <>
    <Navbar />
    <Header type={"list"} />
    <div className="messenger">
        <div className="msnContainer">

        <div className="chatMenu">
            <div className="chatMenuWrapper">
                <input type="text" name="" className='chatMenuInput' placeholder='Busca conversaciones'/>
                {conversations.map((c)=>(
                    <div key={c._id} onClick={()=> setCurrentChat(c)} className={currentChat?._id === c?._id ? 'selectedChat' : undefined}>
                    <Conversations conversation={c} currentUser={user} />
                    </div>         
                    )
                )}
                
                
            </div>
        </div>
        <div className="chatBox">
            <div className="chatBoxWrapper">
                {
                    currentChat ? 
                    <>
                    
                    <div className="chatBoxTop">
                    {messages.length > 0 ? messages.map((m, index)=>(
                        <div ref={scrollRef} key={index}>
                            <Message message={m} own={m.sender === user._id}  />
                        </div>
                        )
                    ) : <span className='noConvClickedText'>Comienza la conversacion con!</span>}

                </div>
                <div className="chatBoxBottom">
                    <textarea name="" placeholder='Escribe tu mensaje aqui...' id="" cols="30" rows="10" className="chatMessageInput" onChange={(e)=> setNewMessage(e.target.value)} value={newMessage}></textarea>
                    <button 
                    className='chatSubmitButton'
                    onClick={handleSendMsg}
                    >
                        Enviar
                    </button>
                </div>
                </> : 
                 <span className='noConvClickedText'>Clickea en alguna conversacion....</span>
                }
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Messenger