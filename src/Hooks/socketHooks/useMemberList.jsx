import { useContext, useEffect, useState } from 'react';
import { socket } from '../../services/socket';
import { useSelector } from 'react-redux';
import { ApiContext } from '../../context/ApiContext';
import { useParams } from 'react-router-dom';

const useMemberList = () => {
  const [ memberList, setMemberList ] = useState([]);
  const { isLogged, user } = useSelector(state => state.apiAuth);
  const { connectionSocket, urlOtherEvent } = useContext(ApiContext);
  const { idEvent } = useSelector(state => state.apiChannels);
  
  useEffect(() => {
    const handleSockets = () => {
      socket.emit('listMembers', {
        id: socket.id,
        idEvent,
        user: user.sendUser.username
      });
      socket.on('listMembers', (data) => {
        setMemberList(data);
      });
    };

    if (isLogged && connectionSocket) {
      handleSockets();
    }

    return () => {
      socket.off('listMembers');
    };
  }, [isLogged, connectionSocket]);

  return memberList;
};

export default useMemberList;