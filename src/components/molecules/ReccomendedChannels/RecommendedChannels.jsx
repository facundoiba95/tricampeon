import React from 'react'
import { useSelector } from 'react-redux';
import { ReccomendChannelsContainerStyles, TitleReccomendContentStyles } from '../../organisms/ReccomendedContent/ReccomendedContentStyles';
import CardChannel from '../CardChannel/CardChannel';

const ReccomenedChannels = () => {
    const { channels, channelsByMatch } = useSelector(state => state.apiChannels);

    const renderChannels = () => {
        const channelsCopy = [...channels];  // channels es un estado inmutable por Redux, entonces hago una copia para modificarlo.
    
        const sortChannels = channelsCopy.sort(() => Math.random() - 0.5);
        
        const selectedChannels = sortChannels.slice(0, 6);
    
        return selectedChannels.map((channel, index) => {
            const { imgChannel, urlChannel, altName, _id } = channel;
    
            return (
                <CardChannel 
                channel={channel}
                imgChannel={imgChannel}
                _id={_id}
                altName={altName}
                index={index}
                />
            )
        });
    }

  return (
    <>
       <TitleReccomendContentStyles>Canales recomendados</TitleReccomendContentStyles>
       <ReccomendChannelsContainerStyles dataLength={channelsByMatch.length >= 2} containerChannel={true}>
         {renderChannels()}
       </ReccomendChannelsContainerStyles>
    </>
  )
}

export default ReccomenedChannels