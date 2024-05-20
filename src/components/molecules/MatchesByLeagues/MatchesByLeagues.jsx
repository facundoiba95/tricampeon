import React, { useEffect } from 'react'
import CardMatch from '../CardMatch/CardMatch';
import ContainerCards from '../ContainerCards/ContainerCards';
import { useSelector } from 'react-redux';
import { getFlagCompetition, getFlagCup } from '../../../libs/getLogosLeagues';

const MatchesByLeagues = () => {
  const { matches } = useSelector(state => state.apiMatches);

  const renderCards = (matchs) => {
    return matchs.map((event, index) => {
      const status = {
        'PLAYING' : 'LIVE',
        'FINISHED' : 'FINISHED',
        'PAUSED' : 'PAUSED',
        'SCHEDULED': 'FIXTURE'
      }
      
      const { localTime, matchTime, contestants, goals, channels, matchDateText } = event;
      const teamHome = contestants.homeTeam.name;
      const teamAway = contestants.awayTeam.name;
      const homeScore = goals.homeScore;
      const awayScore = goals.awayScore;
      const imgHome = contestants.homeTeam.imgProps.src;
      const imgAway = contestants.awayTeam.imgProps.src;
      const progress = status[event.matchStatus];
      const idMatch = event.id;
      const date = matchDateText.slice(0,10)

      return (
        <CardMatch 
          teamHome={teamHome}
          teamAway={teamAway}
          hour={localTime}
          date={date}
          // league={league}
          success={true}
          imgURLHome={imgHome}
          imgURLAway={imgAway}
          homeScore={homeScore}
          awayScore={awayScore}
          status={progress}
          idMatch={idMatch}
          key={index}
          dataMatches={event}
          channels={channels}
        />
      )
    })
  }


  const setImgURLtournament = (competition) => {
    if(getFlagCompetition[competition.tournamentId]){
      return `https://optaplayerstats.statsperform.com/images/flags/${getFlagCompetition[competition.tournamentId]}.svg`
    } else {
      return getFlagCup[competition.tournamentId];
    }
  }

    const renderItem = () => {
            return matches.map((match, index) => {
              const { competition, matches } = match;              
              return (
                <ContainerCards key={index}>
                  <span className='containerTitleLeague'>
                    <img src={`${setImgURLtournament(competition)}`} alt="" />
                    <h2>{competition.competitionName}</h2>
                  </span>
                  {renderCards(matches)}
                </ContainerCards>
              )
            })
    }


  return (
    <>
       {renderItem()}
    </>
  )
}

export default MatchesByLeagues;