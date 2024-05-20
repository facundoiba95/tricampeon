import React, { useEffect } from 'react'
import TitleEvent from '../TitleEvent/TitleEvent'
import VideoPlayer from '../../organisms/VideoPlayer/VideoPlayer'
import { ContainerChatAndVideoStyles } from '../../organisms/EventSelected/EventSelectedStyles'
import ChatSection from '../../organisms/ChatSection/ChatSection'
import ReccomendedContent from '../../organisms/ReccomendedContent/ReccomendedContent'
import Loader from '../Loader/Loader'
import { useSelector } from 'react-redux'
import ModalError from '../ModalError/ModalError'

const SectionEventSelected = ({ dataChannels, isLoading, status, error }) => {
  
    return (
    <>
    {
        isLoading 
        ? <Loader/>
        : status !== 200 
        ? <ModalError status={status} error={error}/>
        : !dataChannels.length
        ? <Loader/>
        : <>
            <TitleEvent />
            <ContainerChatAndVideoStyles>
              <VideoPlayer event={dataChannels}/>
              <ChatSection/>
            </ContainerChatAndVideoStyles>
            <ReccomendedContent/>
          </>
    }
    </>
  )
}

export default SectionEventSelected