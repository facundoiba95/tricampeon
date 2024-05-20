import React, { useEffect, useRef } from 'react';
import { ListChatContainerStyles, MessageItemStyles } from './ListChatStyles';
import { socket } from '../../../services/socket';
import useChatList from '../../../Hooks/socketHooks/useChatList';

const ListChat = () => {
    const listEndRef = useRef(null);
    const listChatContainerRef = useRef(null);
    const listChat = useChatList();


    // mostrar el ultimo mensaje recibido o enviado.
    useEffect(() => {
        scrollToBottom();
    }, [listChat]);

    const scrollToBottom = () => {
        listChatContainerRef.current.scrollTo({
            top: listChatContainerRef.current.scrollHeight,
            behavior: 'smooth'
        });
    };
    
    const renderMessages = () => {
        return listChat.map((msg, index) => (
            <MessageItemStyles key={index} thisUser={socket.id === msg.id} type={msg.type}>
                <h5>{msg.user}</h5>
                <pre>{msg.message}</pre>
            </MessageItemStyles>
        ));
    };


    return (
        <ListChatContainerStyles ref={listChatContainerRef}>
            <h3>Chat</h3>
            {renderMessages()}
            <div ref={listEndRef} />
        </ListChatContainerStyles>
    );
};

export default ListChat;