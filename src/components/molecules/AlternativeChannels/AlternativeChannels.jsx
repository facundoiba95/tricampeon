import React, { useState } from 'react'
import { ContainerButtonsChannelStyles, ImgChannelStyles, SelectChannelsButtonContainerStyles } from '../../organisms/VideoPlayer/VideoPlayerStyles';
import { useDispatch } from 'react-redux';
import { setChannelSelected, setIndexChannel } from '../../../redux/features/api/slices/apiChannelsSlice';
import { ItemOptionalChannelStyles, ListOptionalChannelStyles, colores } from './AlternativeChannelsStyles';
import { useParams } from 'react-router-dom';

const AlternativeChannels = ({event}) => {
    
    const dispatch = useDispatch();
    const [ openList, setOpenList ] = useState(false);
    const params = useParams();
    
    const handleSetSubChannel = (index) => {
      setOpenList(!openList);
      dispatch(setIndexChannel(index))
    }

    const handleSetChannel = (channelSelected) => {
      setOpenList(!openList)
      dispatch(setChannelSelected(channelSelected));
      params.channel = channelSelected[0].altName;
    }

    const renderSubChannels = (channels) => {
      return channels.map((item,index) => {
        return (
          <ItemOptionalChannelStyles  onClick={() => handleSetSubChannel(index)} key={index}>
            <p>Opción {index + 1}</p>
          </ItemOptionalChannelStyles>
        )
      })
    }

  const renderButtonChannel = () => {
    return event.map((item, index) => {
      const { imgChannel, urlChannel, altName} = item;

      return (
        <div key={index} onClick={() => handleSetChannel([item]) } style={{position: 'relative'}}>
          <ImgChannelStyles src={imgChannel} alt={altName} key={index} onClick={() => setOpenList(!openList)}/>
          <ListOptionalChannelStyles openList={params.channel == altName && openList}>
            {renderSubChannels(urlChannel)}
          </ListOptionalChannelStyles>
        </div>
      )
    })
  }

  return (
    <SelectChannelsButtonContainerStyles>
      <h4>Opciones de transmisión: </h4>
      <ContainerButtonsChannelStyles>
        {renderButtonChannel()}
      </ContainerButtonsChannelStyles>
    </SelectChannelsButtonContainerStyles>
  )
}

export default AlternativeChannels