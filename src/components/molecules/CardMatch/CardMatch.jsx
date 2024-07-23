import React, { useContext } from 'react';
import { CardContainerStyle } from './CardMatchStyles';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchMatch } from '../../../redux/features/api/slices/apiMatchesSlice';
import { FaVideo, FaCrown, FaHandshake } from "react-icons/fa";
import onlivegif from '../../../assets/onlive.gif'
import { dateToday } from '../../../Hooks/dateHooks/useDate';
import { ApiContext } from '../../../context/ApiContext';

const CardMatch = ({ 
  teamHome, 
  teamAway,
  hour, 
  date, 
  status,
  homeScore,
  awayScore,
  imgURLHome,
  imgURLAway,
  isBet,
  idMatch,
  dataMatches,
  channels
 }) => {
  const navigator = useNavigate();
  const params = useParams();

  const goToLiveEvent = async () => {
      if(channels.length && date == dateToday){
          params.idEvent = idMatch;
          localStorage.setItem('idEvent', idMatch)
          window.scroll({
             top: 0,
            behavior: 'smooth'
          })
          navigator(`/liveEvents/${params.idEvent}`);
      }
  };


  return (
    <CardContainerStyle status={status} isBet={isBet} onClick={goToLiveEvent} isWinner={awayScore > homeScore}>
        <span className='dateMatch'>
          {
            status === "FIXTURE" 
            ? <>
                <h4>{hour}</h4>
                <p>{date}</p>
              </>
            : <></>
          }
          {
            status === "LIVE"
            ? <img src={onlivegif} alt='' className='imgLive'/>
            : <p className='progress'>{status}</p>
          }
        </span>
        <div className='containerTeam'>
            <span className='teamsMatchHome'>
              { 
                 homeScore > awayScore && status === "FINISHED" 
                 ? <FaCrown className="crownHomeTeam"/> 
                 : <></> 
              }
              <span>
                <img src={imgURLHome} alt="image from team 1" loading={'lazy'}/>
              </span>
              <p className='nameTeam'>{teamHome}</p>
            </span>
            <span className='status'>
              {homeScore === awayScore && status === "FINISHED" ? <FaHandshake className='drawIcon'/> : <></>}
              <span>
                <p>{status === 'FINISHED' || status === 'LIVE' ? homeScore : ''}</p>
                <small>-</small>
                <p>{status === 'FINISHED' || status === 'LIVE' ? awayScore : ''}</p>
              </span>
            </span>
            <span className='teamsMatchAway'>
               { 
                 awayScore > homeScore && status === "FINISHED" 
                 ? <FaCrown className="crownAwayTeam"/> 
                 : <></> 
              }              
              <img src={imgURLAway} alt="image from team 2" loading={'lazy'}/>
              <p className='nameTeam'>{teamAway}</p>
            </span>
        </div>
        {
          channels && status !== "FINISHED"
          ? <FaVideo className='iconTv'/> 
          : <></>
        }
    </CardContainerStyle>
  )
}

export default CardMatch