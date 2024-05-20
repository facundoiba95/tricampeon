import React from 'react'
import { ChannelItemStyles } from '../../organisms/Channels/ChannelsStyles'
import { useNavigate, useParams } from 'react-router-dom';

const CardChannel = ({ channel, altName, _id, imgChannel }) => {
  const navigator = useNavigate();
  const params = useParams();

  const goToChannel = () => {
    params.idChannel = _id;
    window.scroll({
        top:0,
        behavior: 'smooth'
    })
    navigator(`/liveEvents/channels/${params.idChannel}`);
} 

  return (
    <ChannelItemStyles onClick={goToChannel}>
      <h3>{altName}</h3>
      <img src={imgChannel} alt="" />
    </ChannelItemStyles>
  )
}

export default CardChannel