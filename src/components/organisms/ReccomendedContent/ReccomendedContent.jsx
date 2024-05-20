import React, { useContext } from 'react';
import { ContainerDefaultStyle } from '../../../views/Leagues/LeaguesViewStyles';
import { useSelector } from 'react-redux';
import ReccomendedEvents from '../../molecules/ReccomendedEvents/ReccomendedEvents';
import ReccomenedChannels from '../../molecules/ReccomendedChannels/RecommendedChannels';
import { connectionSocket, socket } from '../../../services/socket';
import { ApiContext } from '../../../context/ApiContext';
import { useParams } from 'react-router-dom';

const ReccomendedContent = () => {
  const { channelsByMatch} = useSelector(state => state.apiChannels);

    // Si es un evento: Deben mostrarse otros eventos en vivo
    // Si es un canal: Deben mostrarse otros canales 

  return (
    <ContainerDefaultStyle>
       {
        channelsByMatch.length
        ? <ReccomendedEvents />
        : <ReccomenedChannels />
       }
    </ContainerDefaultStyle>
  )
}

export default ReccomendedContent