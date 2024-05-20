import React, { useContext, useEffect } from 'react'
import { ChatSectionContainerStyles } from './ChatSectionStyles'
import NavChat from '../../molecules/NavChat/NavChat'
import TyperMessage from '../../molecules/TyperMessage/TyperMessage'
import ListChat from '../../molecules/ListChat/ListChat'
import EmptyChatModal from '../../molecules/EmptyChatModal/EmptyChatModal'
import { ApiContext } from '../../../context/ApiContext'
import ListMembers from '../../molecules/ListMembers/ListMembers'
import useJoinRoom from '../../../Hooks/socketHooks/useJoinRoom'

const ChatSection = () => {
  const { valueNavChat } = useContext(ApiContext);
  const isLogged = useJoinRoom();

  const renderSectionChat = () => {
    if(valueNavChat === 'chat'){
      return (<ListChat/>)
    } else if(valueNavChat === 'members'){
      return (<ListMembers/>)
    }
  }

  return (
    <ChatSectionContainerStyles>
        <h3>Bienvenido al chat de <b>TRICAMPEÓN</b>!</h3>
        {
          !isLogged
          ? <EmptyChatModal/>
          : <>
              <NavChat/>
               {renderSectionChat()}
              <TyperMessage/>
            </>
        }
    </ChatSectionContainerStyles>
  )
}

export default ChatSection