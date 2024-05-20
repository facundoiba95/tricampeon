import React, { useContext } from 'react'
import { CardEventScheduleContainerStyle } from './CardEventScheduleStyles'
import { ApiContext } from '../../../context/ApiContext';
import { useNavigate, useParams } from 'react-router-dom';

const CardEventSchedule = ({title, img, league, url, status, _id}) => {
  const { urlOtherEvent, setUrlOtherEvent } = useContext(ApiContext);
  const params = useParams();
  const navigator = useNavigate();

  const goEventSelected = (e) => {
    setUrlOtherEvent({
      url,
      _id
    });
    params.titleEvent = title;
    navigator(`/liveEvents/otherEvents/${params.titleEvent}`)
  }
  
  return (
    <CardEventScheduleContainerStyle onClick={(e) => goEventSelected(e)}>
        <h3>{title}</h3>
        <p>{league}</p>
        <b>{status}</b>
        {
          url == "#"
          ? <span className='logoTricampeon'>
            <b>Evento en </b>
            <h2>TRICAMPEÓN</h2>
            </span>
          : <img src={img} alt="img event schedule"/>
        }
    </CardEventScheduleContainerStyle>
  )
}

export default CardEventSchedule