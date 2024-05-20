import React from 'react'
import { ListChatContainerStyles, MemberItemStyles } from '../ListChat/ListChatStyles';
import useMemberList from '../../../Hooks/socketHooks/useMemberList';

const ListMembers = () => {
    const memberList = useMemberList();

    function renderMembers() {
        return memberList.map(member => (
            <MemberItemStyles>
                <h5>{member.user}</h5>
            </MemberItemStyles>
        ));
    }

  return (
    <ListChatContainerStyles>
        <h3>Participantes</h3>
        {renderMembers()}
    </ListChatContainerStyles>
  )
}

export default ListMembers