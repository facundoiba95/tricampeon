import React, { useContext } from 'react'
import { NavChatContainerStyles } from './NavChatStyles'
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { ApiContext } from '../../../context/ApiContext';

const NavChat = () => {
  const { setValueNavChat } = useContext(ApiContext);

  return (
    <NavChatContainerStyles>
        <IoChatbubbleEllipsesSharp className='iconNavChat'data-valuenav={'chat'} onClick={() => setValueNavChat('chat')}/>
        <FaUsers className='iconNavChat' data-valuenav={'members'} onClick={() => setValueNavChat('members')}/>
    </NavChatContainerStyles>
  )
}

export default NavChat