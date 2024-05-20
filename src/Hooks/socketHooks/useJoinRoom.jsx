import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { ApiContext } from '../../context/ApiContext';
import { connectionSocket, socket } from '../../services/socket';

const useJoinRoom = () => {
    const { isLogged, user } = useSelector(state => state.apiAuth);
    const { setConnectionSocket, urlOtherEvent } = useContext(ApiContext);
    const { idEvent } = useSelector(state => state.apiChannels);

    useEffect(() => {
      if (isLogged) {
        connectionSocket();
        socket.on('connect', () => setConnectionSocket(true));
        socket.emit('joinEvent', {
          id: socket.id,
          idEvent,
          user: user.sendUser.username
        });
      }
    }, [isLogged, idEvent]);

    return isLogged;
}

export default useJoinRoom