import { Avatar } from '@material-ui/core'
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import db from './firebase';
import './SidebarChat.css'

function SidebarChat({id, name, addNewChat }) {

    const [messages, setMessages] = useState("");
    
    useEffect(() => {
        if(id){
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            })
        }
    }, [id]);

    const createChat = () => {
        const roomName = prompt("Please Enter Name for Chat");

        if(roomName){
            db.collection("rooms").add({
                name: roomName
            })
        }
    };
   
    return !addNewChat ? (
        <Link to={`/rooms/${id}`} key={id}>
            <div className='sidebarChat'>
                <Avatar src = {'https://avatars.dicebear.com/api/human/123.svg'}/>
                <div className='sidebarchatinfo'>
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    )
}

export default SidebarChat
