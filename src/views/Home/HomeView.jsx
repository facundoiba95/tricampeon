import React, { useContext, useEffect } from 'react'
import Button from '../../components/atoms/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ApiContext } from '../../context/ApiContext'
import RankingTable from '../../components/molecules/RankingTable/RankingTable'
import ContainerTables from '../../components/molecules/ContainerTables/ContainerTables'
import Banner from '../../components/molecules/Banner/Banner'
import { restartStateChannels } from '../../redux/features/api/slices/apiChannelsSlice'
import { restartSearchMatch } from '../../redux/features/api/slices/apiMatchesSlice'
import HeadHome from '../../components/molecules/HeadHome/HeadHome'
import { validateSession } from '../../redux/features/api/slices/apiAuthSlice'
import MatchesByLeaguesHome from '../../components/organisms/MatchesByLeagueHome/MatchesByLeagueHome'
import { socket } from '../../services/socket'

const HomeView = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { matches, isLoading } = useSelector(state => state.apiMatches);
  const { isLogged } = useSelector(state => state.apiAuth);
  const { connectionSocket, setConnectionSocket } = useContext(ApiContext);

  const goMatchs = () => { 
    window.scrollTo(0,0)
    navigator('/leagues/106/ranking');
  }

  const goRanking = () => { 
    window.scrollTo(0,0)
    navigator('/ranking/leagues');
  }

  const { isAll, setIsAll } = useContext(ApiContext);

   useEffect(() => {
    dispatch(restartStateChannels());
    dispatch(restartSearchMatch());
    dispatch(validateSession());
    setIsAll(true);

    window.scroll({
      top:0,
      behavior: 'smooth'
    })
   }, [])

  //  useEffect(() => {
  //   if(isLogged && connectionSocket){
  //     socket.disconnect();
  //     setConnectionSocket(false);
  //   }
  //  }, [ connectionSocket, isLogged ]);
   
  return (
    <>
      <HeadHome/>
      <MatchesByLeaguesHome idLeague={2021} dataMatches={matches}/>
      <div style={{marginTop:'3rem', marginBottom:'1rem'}}>
        <Banner/>
      </div>
      <div style={{marginTop:'3rem', marginBottom:'1rem'}}>
        <ContainerTables isAll={isAll}>
          <RankingTable idLeague={107} />
          <RankingTable idLeague={106} />
        </ContainerTables>
      </div>
      <Button handleFunction={goRanking} title={'Ver mas tablas'}/>
    </>
  )
}

export default HomeView