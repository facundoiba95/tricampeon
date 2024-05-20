import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ApiContext } from '../../../context/ApiContext';
import ContainerTables from '../../molecules/ContainerTables/ContainerTables';
import RankingTable from '../../molecules/RankingTable/RankingTable';
import { useDispatch } from 'react-redux';
import { fetchScorersByLeague, fetchScorersByLeagueArgentina } from '../../../redux/features/api/slices/apiScorersSlice';
import { scorersStates } from '../../../libs/getScorersStates';

const RankingTableByLeague = () => {
    const params = useParams();
    const idLeague = params.idLeague;
    const { isAll, setIsAll } = useContext(ApiContext);

    const dispatch = useDispatch();

    useEffect(()=> { 
      if(idLeague === 152){
        dispatch(fetchScorersByLeagueArgentina());
      } else {
        dispatch(fetchScorersByLeague(scorersStates[ params.idLeague ]))
      }
   },[ params.idLeague ])
    
  return (
    <ContainerTables isAll={isAll}>
        <RankingTable idLeague={params.idLeague}/>
   </ContainerTables> 
  )
}

export default RankingTableByLeague