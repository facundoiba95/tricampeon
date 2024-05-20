import React, { useContext, useState } from 'react'
import { BoxTyperMessageStyles, TyperMessageContainerStyles } from './TyperMessageStyles'
import { socket } from '../../../services/socket';
import { useSelector } from 'react-redux';
import { ApiContext } from '../../../context/ApiContext';

const TyperMessage = () => {
    const [ inputComment, setInputComment ] = useState('');
    const { isLogged, user } = useSelector(state => state.apiAuth);
    const { urlOtherEvent } = useContext(ApiContext);
    const { idEvent } = useSelector(state => state.apiChannels);

    const handleUserLogged_Socket = () => {
      socket.emit('sendMessage', {
        id: socket.id,
        user: user.sendUser.username,
        idEvent,
        message: inputComment
    });
    }

  const handleMessage = async () => {
    if(!inputComment) return;
    if(isLogged){
      handleUserLogged_Socket();
      setInputComment('');
    }
  }
  
  return (
    <TyperMessageContainerStyles>
        <BoxTyperMessageStyles onSubmit={(e) => e.preventDefault()}>
            <textarea 
            type="text" 
            placeholder='Escribe un comentario ...' 
            value={inputComment} 
            onChange={(e) => setInputComment(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleMessage()
                }
            }}
            />
            <button className='btnAddComment' onClick={() => {}}>Enviar</button>
        </BoxTyperMessageStyles>
    </TyperMessageContainerStyles>
  )
}

export default TyperMessage