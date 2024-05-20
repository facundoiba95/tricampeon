import React, { useContext } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import RankingTable from '../../components/molecules/RankingTable/RankingTable';
import ContainerTables from '../../components/molecules/ContainerTables/ContainerTables';
import { ApiContext } from '../../context/ApiContext';
import { ContainerDefaultStyle, ContainerLogoLeagueStyles } from './LeaguesViewStyles';
import NavbarWithFilter from '../../components/organisms/NavbarWithFilter/NavbarWithFilter';
import { useDispatch } from 'react-redux';

import { logoLeaguesByIdLeague } from '../../libs/getLogosLeagues';
import Scorers from '../../components/organisms/Scorers/Scorers';

const LeaguesView = ({children}) => {
    const params= useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const navigator = useNavigate();
    const idLeague = Number(params.idLeague);
    const { isAll, setIsAll } = useContext(ApiContext);

    // const localStorageScorersArgentina = JSON.parse(localStorage.getItem('scorersLeagueArgentina'))
    // const localStorageScorers = JSON.parse(localStorage.getItem('scorersLeague'))
    const handleRoutes = () => {

      if(location.pathname === `/leagues/${idLeague}/ranking`){
        setIsAll(false);
        return (
              <ContainerTables isAll={isAll}>
               <RankingTable idLeague={idLeague}/> 
              </ContainerTables> 
        )
      } else if(location.pathname === `/leagues/${idLeague}/scorers`){
        setIsAll(false);
          return (
            <Scorers idLeague={idLeague}/>
          )
      } else if(location.pathname === `/leagues/${idLeague}/fixture`){
        return (
          <Fixture idLeague={params.idLeague}/>
        )
      }
    }

    
  return (
    <ContainerDefaultStyle>
        <NavbarWithFilter/>
        <ContainerLogoLeagueStyles>
          <img src={logoLeaguesByIdLeague[idLeague]} alt="img logo" className='imgLeague'/>
        </ContainerLogoLeagueStyles>
          {handleRoutes()}
    </ContainerDefaultStyle>
    )
}

export default LeaguesView