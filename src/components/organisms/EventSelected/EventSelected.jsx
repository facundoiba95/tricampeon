import React, { useContext, useEffect } from 'react'
import { EventSelectedSectionStyles } from './EventSelectedStyles'
import { useDispatch, useSelector } from 'react-redux';
import { getChannelByID, setChannelSelected, setChannelsByMatch, setIdEvent } from '../../../redux/features/api/slices/apiChannelsSlice';
import { useParams } from 'react-router-dom';
import { fetchMatchesToday, getMatchByID } from '../../../redux/features/api/slices/apiMatchesSlice';
import { dateToday } from '../../../Hooks/dateHooks/useDate';
import SectionEventSelected from '../../molecules/SectionEventSelected/SectionEventSelected.';
import { ApiContext } from '../../../context/ApiContext';
import { socket } from '../../../services/socket';


const EventSelected = () => {
    const isLoadingMatches = useSelector( state => state.apiMatches.isLoading );
    const statusMatches = useSelector( state => state.apiMatches.status );
    const errorMatches = useSelector(state => state.apiMatches.error);

    const isLoadingChannels = useSelector(state => state.apiChannels.isLoading);
    const statusChannels = useSelector(state => state.apiChannels.status);
    const errorChannels = useSelector(state => state.apiChannels.error);


    const { setConnectionSocket } = useContext(ApiContext);
    const { channelsByMatch, channelSelected, idEvent } = useSelector(state => state.apiChannels);
    
    const params = useParams();
    const dispatch = useDispatch();
    
    const handleDisconnectSocket = async () => {
        if(socket){
            socket.disconnect()
            setConnectionSocket(false);
        }
    }


    useEffect(() => {
        if(params.idEvent) dispatch(fetchMatchesToday(dateToday));
    }, []);


    useEffect(() => {
        handleDisconnectSocket()
    }, [ params.idEvent || params.idChannel ]);


    useEffect(() => {
        const handleSetChannelByMatch = async () => {
            const matchByID = await dispatch(getMatchByID(params.idEvent))
            const channels = await matchByID.payload.match[0].channels;
            await dispatch(setChannelSelected([channels[0]]));  // debe ser un Array de un objeto: [{}]
            await dispatch(setChannelsByMatch(channels))
            await dispatch(setIdEvent(params.idEvent));
        };

        if(params.idEvent) handleSetChannelByMatch();
    }, [ params.idEvent ]);

    useEffect(() => {
        const handelSetChannelSelected = () => {
            dispatch(getChannelByID(params.idChannel));
            dispatch(setIdEvent(params.idChannel))
        }

        if(params.idChannel) handelSetChannelSelected()
    }, [params.idChannel])

    return (
        <EventSelectedSectionStyles>
            {
                params.idEvent
                ? <SectionEventSelected dataChannels={channelsByMatch} isLoading={isLoadingMatches || isLoadingChannels} status={statusMatches} error={errorMatches}/>
                : params.idChannel
                ? <SectionEventSelected dataChannels={channelSelected} isLoading={isLoadingChannels || isLoadingMatches} status={statusChannels} error={errorChannels}/>
                : <h2>Revisar</h2>
            }
        </EventSelectedSectionStyles>
    )
}

export default EventSelected;