import React, { useContext, useEffect } from 'react'
import { ContainerChatAndVideoStyles } from '../../organisms/EventSelected/EventSelectedStyles'
import VideoPlayer from '../../organisms/VideoPlayer/VideoPlayer'
import ChatSection from '../../organisms/ChatSection/ChatSection'
import { ApiContext } from '../../../context/ApiContext'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

const OtherEvents = () => {
    const { urlOtherEvent } = useContext(ApiContext); 
    const dispatch = useDispatch();
    const params = useParams();

  return (
    <>
    <h2 className='titleOtherEvent'>{params.titleEvent}</h2>
      <ContainerChatAndVideoStyles>
        <VideoPlayer urlOtherEvent={urlOtherEvent.url} event={[]}/>
        <ChatSection/>
      </ContainerChatAndVideoStyles>
    </>
  )
}

export default OtherEvents