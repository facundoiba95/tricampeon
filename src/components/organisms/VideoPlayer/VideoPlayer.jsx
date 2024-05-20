import React, { useEffect, useRef } from 'react'
import { VideoPlayerContainerStyles, VideoPlayerStyles } from './VideoPlayerStyles'
import { useSelector } from 'react-redux';
import AlternativeChannels from '../../molecules/AlternativeChannels/AlternativeChannels';
import ModalError from '../../molecules/ModalError/ModalError';
import { useParams } from 'react-router-dom';

const VideoPlayer = ({event, urlOtherEvent}) => {
  const { channelSelected, idEvent } = useSelector(state => state.apiChannels);
  const { indexChannel } = useSelector(state => state.apiChannels);
  const params = useParams();
  
  const renderVideo = () => {
    if(urlOtherEvent == "#"){
      return (<ModalError error={'No hay canales disponibles'} status={404} />)
    } else {
      return (
        <VideoPlayerStyles
           src={`${import.meta.env.VITE_URL_BACKEND}channels/getStream/${idEvent}?op=${indexChannel == null ? Number(0) : Number(indexChannel)}&idChannel=${channelSelected[0]._id}`} 
           allow='encrypted-media' 
           allowFullScreen={true}
           sandbox="allow-same-origin allow-scripts"
           scrolling='no'
          />
      )
    }
  }
  return (
    <VideoPlayerContainerStyles>
      {renderVideo()}
        <AlternativeChannels event={event}/>
    </VideoPlayerContainerStyles>
  )
}

export default VideoPlayer