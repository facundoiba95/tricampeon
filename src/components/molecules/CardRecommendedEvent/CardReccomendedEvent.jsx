import React, { useContext } from 'react'
import { CardReccomendedEventsStyles } from '../ReccomendedEvents/ReccomendedEventsStyles'
import { useNavigate, useParams } from 'react-router-dom';
import onlivegif from '../../../assets/onlive.gif';
import { getFlagCompetition, getFlagCup } from '../../../libs/getLogosLeagues';

const CardReccomendedEvent = ({
    homeTeam,
    awayTeam,
    channels,
    id,
    imgCountry,
    league,
    hour,
    matchStatus,
    scores,
    matches,
    tournamentId,
    handleJoinEvent
}) => {
    const navigator = useNavigate();
    const params = useParams();

    const goToLiveEvent = (channels) => {
        if(channels.length){
          params.idEvent = id;
          window.scroll({
            top: 0,
            behavior: 'smooth'
          })
          navigator(`/liveEvents/${params.idEvent}`);
        }
    };


    const setImgURLtournament = (tournamentId) => {
      if(getFlagCompetition[tournamentId]){
        return `https://optaplayerstats.statsperform.com/images/flags/${getFlagCompetition[tournamentId]}.svg`
      } else {
        return getFlagCup[tournamentId];
      }
    }

  return (
    <CardReccomendedEventsStyles onClick={() => goToLiveEvent(channels)}>
    <span className='competition'>
      <img src={setImgURLtournament(tournamentId)} alt="img country league" />
      <b>{league}</b>
      {
        matchStatus === 'PLAYING' || matchStatus === 'PAUSED'
        ? <img src={onlivegif} alt="" className='onlive'/>
        : <small>{hour}</small>
      }
    </span>
    <span className='containerTeams'>
       <span className='homeTeam'>
           <img src={homeTeam.imgProps.src} alt="img crest homeTeam" />
           <h4>{homeTeam.name}</h4>
           {
            matchStatus === "PLAYING"
            ? <h4 className='scoreNumber'>{scores.homeScore}</h4>
            : <></>
           }
       </span>
       <span className='awayTeam'>
           <img src={awayTeam.imgProps.src} alt="img crest awayTeam" />
           <h4>{awayTeam.name}</h4>
           {
            matchStatus === "PLAYING"
            ? <h4 className='scoreNumber'>{scores.awayScore}</h4>
            : <></>
           }
       </span>
    </span>
</CardReccomendedEventsStyles>
  )
}

export default CardReccomendedEvent