import React, { useContext, useEffect } from 'react'
import ContainerGridFramer from '../ContainerGridFramer/ContainerGridFramer'
import { useDispatch, useSelector } from 'react-redux'
import { getChannelSchedule } from '../../../redux/features/api/slices/apiChannelsSlice';
import CardEventSchedule from '../../molecules/CardEventSchedule/CardEventSchedule';
import { ChannelScheduleContainerStyle } from './ChannelScheduleStyles';
import FootballLoader from '../../molecules/FootballLoader/FootballLoader';
import SliderSwipper from '../SliderSwipper/SliderSwipper';
import ModalError from '../../molecules/ModalError/ModalError';
import { ApiContext } from '../../../context/ApiContext';
import { socket } from '../../../services/socket';

const ChannelSchedule = () => {
    const { schedule, isLoading, status, error } = useSelector(state => state.apiChannels);
    const { isLogged } = useSelector(state => state.apiAuth);
    const { connectionSocket, setConnectionSocket } = useContext(ApiContext);
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(getChannelSchedule());
    }, [])

    useEffect(() => {
      if(isLogged && connectionSocket){
        socket.disconnect();
        setConnectionSocket(false);
      }
     }, [ connectionSocket, isLogged ]);

    const renderSlide = () => {
      return schedule.map((channel, index) => {

        return (
          <SliderSwipper events={channel} title={index == 0 ? 'star+' : 'vix'}/>
        )
      })
    }

  return (
    <ChannelScheduleContainerStyle>
      {
        isLoading
        ? <FootballLoader/>
        : status !== 200 && error !== null
        ? <ModalError error={error.code} status={status}/>
        : renderSlide()
      }
    </ChannelScheduleContainerStyle>
  )
}

export default ChannelSchedule