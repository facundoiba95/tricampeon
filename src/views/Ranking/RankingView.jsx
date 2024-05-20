import React, { useContext, useEffect } from 'react'
import ContainerTables from '../../components/molecules/ContainerTables/ContainerTables'
import RankingTable from '../../components/molecules/RankingTable/RankingTable'
import { useSelector } from 'react-redux'
import { ApiContext } from '../../context/ApiContext'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const RankingView = () => {
  const { isAll, setIsAll } = useContext(ApiContext);
  
  //state leagues ranking
  const premierLeague = useSelector(state => state.apiLeagues.premierLeague);
  const laLiga = useSelector(state => state.apiLeagues.laLiga);
  const serieA = useSelector(state => state.apiLeagues.serieA);
  const libertadores = useSelector(state => state.apiLeagues.libertadores);
  const championsLeague = useSelector(state => state.apiLeagues.championsLeague);
  const brasileirao = useSelector(state => state.apiLeagues.brasileirao)
  const eurocopa = useSelector(state => state.apiLeagues.eurocopa);
  const bundesliga = useSelector(state => state.apiLeagues.bundesliga);
  const eredivise = useSelector(state => state.apiLeagues.eurocopa);
  const primeiraLiga = useSelector(state => state.apiLeagues.primeiraLiga);
  const ligue1 = useSelector(state => state.apiLeagues.ligue1);

  const handleRouteRanking = () => {
      setIsAll(!true);
       return (
         <>
          <RankingTable idLeague={106} handleState={premierLeague}/>
          <RankingTable idLeague={107} handleState={serieA}/>
          <RankingTable idLeague={109} handleState={ligue1}/>
          <RankingTable idLeague={101} handleState={laLiga}/>
          {/* <RankingTable idLeague={152} handleState={ligaArgentinaranking}/> */}
          <RankingTable idLeague={155} handleState={brasileirao}/>
          <RankingTable idLeague={110} handleState={primeiraLiga}/>
          <RankingTable idLeague={146} handleState={eredivise}/>
          <RankingTable idLeague={108} handleState={bundesliga}/>
         </>
       )
  }

  
  useEffect(()=> {
    setIsAll(false)
  },[])

  return (
    <ContainerTables isAll={isAll}>
      {handleRouteRanking()}
    </ContainerTables>
  )
}

export default RankingView