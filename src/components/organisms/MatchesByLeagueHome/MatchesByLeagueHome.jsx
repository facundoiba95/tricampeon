import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  fetchMatchesToday } from '../../../redux/features/api/slices/apiMatchesSlice';
import FootballLoader from '../../molecules/FootballLoader/FootballLoader';
import MatchesByLeagues from '../../molecules/MatchesByLeagues/MatchesByLeagues';
import { dateToday } from '../../../Hooks/dateHooks/useDate';

const MatchesByLeaguesHome = ({ idLeague }) => {
    const { isLoading, matches } = useSelector(state => state.apiMatches);
    const dispatch = useDispatch();

    useEffect(()=> {
      dispatch(fetchMatchesToday(dateToday))
    },[ dispatch ])

  return (
    <>
    {
      isLoading 
      ? <FootballLoader isActive={isLoading}/>
      : matches
      ? <MatchesByLeagues dataMatches={matches} titleLeague={'asd'} idLeague={idLeague}/>
      : <></>
    }
    </>
    
  )
}

export default MatchesByLeaguesHome