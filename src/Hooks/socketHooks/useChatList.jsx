import React, { useContext, useEffect, useState } from 'react'
import { socket } from '../../services/socket';
import { useSelector } from 'react-redux';
import { ApiContext } from '../../context/ApiContext';

const useChatList = () => {
    const [ listChat, setListChat ] = useState([]);
    const { isLogged } = useSelector(state => state.apiAuth);
    const { connectionSocket } = useContext(ApiContext);

    const handleSockets = () => {
        socket.on('userConnected', (data) => {
            setListChat(prevListChat => [...prevListChat, data]); 
        })
        socket.on('recivedMessage', (data) => {
            setListChat(prevListChat => [...prevListChat, data]); 
        });
        socket.on('userDisconnected', (data) => {
            setListChat(prevListChat => [...prevListChat, data]); 
        })

        return () => {
            socket.off('userConnected');
            socket.off('recivedMessage');
            socket.off('userDisconnected');
        }
    }

    useEffect(() => {
       if(isLogged && connectionSocket){
          handleSockets()
       }
    }, [ socket, isLogged ]);

  return listChat;
}

export default useChatList