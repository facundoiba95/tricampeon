import React, { useEffect, useState } from 'react'
import { ReccomendChannelsContainerStyles, TitleReccomendContentStyles } from '../../organisms/ReccomendedContent/ReccomendedContentStyles';
import { useSelector } from 'react-redux';
import CardReccomendedEvent from '../CardRecommendedEvent/CardReccomendedEvent';

const ReccomendedEvents = () => {
    const [ events, setEvents ] = useState([]);
    const { matches, searchMatch } = useSelector(state => state.apiMatches);
    const dateEvents = searchMatch[0].matchDateText.slice(0,10);
    
    // matchStatus SCHEDULED o PLAYING, muestra primero los PLAYING
    const filterAndSortMatches = () => {
      let unsortedMatches = []
      matches.forEach(item => {
         for (let i = 0; i < item.matches.length; i++) {
          const element = item.matches[i];
          if(element.matchStatus !== 'FINISHED' && element.id !== searchMatch[0].id && element.channels){
              unsortedMatches.push(element);
          }  
         }
      })

      setEvents(unsortedMatches.flat().sort((a,b) => {
        if(a.matchStatus === 'PLAYING' && b.matchStatus !== 'PLAYING' ){
          return -1
        } else if(b.matchStatus === 'PLAYING' && a.matchStatus !== 'PLAYING'){
          return 1;
        } else {
          return 0;
        }
      }))
    }
    
    useEffect(() => {
      filterAndSortMatches()
    },[])

    const renderEvents = () => {
        return events.map((item, index) => {
            const { contestants, channels, id, matchStatus, goals, localTime, tournamentId, competitionName } = item;
            const awayTeam = contestants.awayTeam;
            const homeTeam = contestants.homeTeam;

            return (
              <CardReccomendedEvent
              homeTeam={homeTeam}
              awayTeam={awayTeam}
              channels={channels}
              id={id}
              matchStatus={matchStatus}
              scores={goals}
              league={competitionName}
              imgCountry={''}
              hour={localTime}
              matches={events}
              tournamentId={tournamentId}
              key={index}
              />
            )
        }
      )
    }

      
  return (
    <>
      <TitleReccomendContentStyles>Más eventos en vivo</TitleReccomendContentStyles>
      <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
        <b>Fecha: </b>
        <h3>{dateEvents}</h3>
      </span>
      <ReccomendChannelsContainerStyles dataLength={events.length >= 3} containerChannel={false}>
        {renderEvents()}
      </ReccomendChannelsContainerStyles>
    </>
  )
}

export default ReccomendedEvents