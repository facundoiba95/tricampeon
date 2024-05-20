import React, { useContext, useEffect } from 'react'
import { ContainerDefaultStyle } from '../../../views/Leagues/LeaguesViewStyles'
import { ChannelListStyles } from './ChannelsStyles'
import { useDispatch, useSelector } from 'react-redux'
import { getAllChannels } from '../../../redux/features/api/slices/apiChannelsSlice'
import CardChannel from '../../molecules/CardChannel/CardChannel'
import { socket } from '../../../services/socket'
import { ApiContext } from '../../../context/ApiContext'
import FootballLoader from '../../molecules/FootballLoader/FootballLoader'

const Channels = () => {
    const { isLogged } = useSelector(state => state.apiAuth);
    const {channels, isLoading} = useSelector(state => state.apiChannels);
    const { setConnectionSocket, connectionSocket } = useContext(ApiContext);
    const dispatch = useDispatch();

    useEffect(() => {
        if(isLogged && connectionSocket){
            socket.disconnect();
            setConnectionSocket(false)
        }
    }, [isLogged])

    const renderAllChannels = () => {
        return channels.map((channel, index) => {
            const { imgChannel, urlChannel, altName, _id } = channel;

            return (
                <CardChannel
                channel={channel}
                altName={altName}
                imgChannel={imgChannel}
                _id={_id}
                key={index}
                />
            )
        })
    }

    useEffect(() => {
        dispatch(getAllChannels());
    },[]);

  return (
    <ContainerDefaultStyle>
        <ChannelListStyles>
            {
                isLoading
                ? <FootballLoader/>
                : renderAllChannels()
            }
        </ChannelListStyles>
    </ContainerDefaultStyle>
  )
}

export default Channels