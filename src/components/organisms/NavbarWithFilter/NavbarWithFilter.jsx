import React from 'react'
import { NavbarFilterContainerStyles, SelectStyles, customStylesSelect } from './NavbarWithFilterStyles'
import { NavLeaguesItemStyle } from '../NavbarLeagues/NavbarLeaguesStyles';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CgMenuRight } from 'react-icons/cg'
import { useContext } from 'react';
import { ApiContext } from '../../../context/ApiContext';

const NavbarWithFilter = () => {
  const params = useParams();
  const navigator = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isOpenSubmenu, setIsOpenSubmenu } = useContext(ApiContext);

  const options = [
    // {value:165, label:'Copa Libertadores'},
    // {value:103, label:'Champions League'},
    {value:107, label:'Serie A'},
    {value:109, label:'Ligue 1'},
    {value:152, label:'Liga Argentina'},
    {value:106, label:'Premier League'},
    {value:101, label:'La Liga'},
    {value:155, label:'Brasileirao'},
    {value:146, label:'Eredivise'},
    {value:110, label:'Liga Portuguesa'},
    {value:108, label:'Bundesliga'}
  ]

  const setValueDefault = options.find(league => league.value == params.idLeague);
  
  const routesNavBarFilter = {
    posiciones: ( id ) => {window.scrollTo(0,0), navigator(`/leagues/${id}/ranking`)},
    goleadores: ( id ) => {window.scrollTo(0,0), navigator(`/leagues/${id}/scorers`)},
    fixture: ( id ) => {window.scrollTo(0,0), navigator(`/leagues/${id}/fixture`)}
  }
  
   const handleRoutesSelect = (e) => {
    switch (location.pathname) {
      case `/leagues/${params.idLeague}/ranking`:
        routesNavBarFilter.posiciones(e.value)
        break;
        
      case `/leagues/${params.idLeague}/scorers`:
        routesNavBarFilter.goleadores(e.value)
        
      case `/leagues/${params.idLeague}/fixture`:
        routesNavBarFilter.fixture(e.value)
        default:
          break;
    }
  }

  const handleRoutesItem = (e) => {
    const valueItem = e.target.dataset.valueitem;
    switch (valueItem) {
      case 'posiciones':
        setIsOpenSubmenu(false)
        routesNavBarFilter.posiciones(params.idLeague)
        break;
        
      case 'goleadores':
        setIsOpenSubmenu(false)
        routesNavBarFilter.goleadores(params.idLeague)
        break;

      case 'fixture':
        setIsOpenSubmenu(false)
        routesNavBarFilter.fixture(params.idLeague)
        break;
        default:
          setIsOpenSubmenu(false)
          routesNavBarFilter.posiciones(params.idLeague)
          break;
    }
  }
  
 return (
    <NavbarFilterContainerStyles isOpenSubmenu={isOpenSubmenu}>
      <SelectStyles styles={customStylesSelect}
      options={options}
      defaultValue={setValueDefault}
      onChange={(e) => handleRoutesSelect(e)}
      />
      <span className='containerItemsNavbarFilter'>
        <NavLeaguesItemStyle data-valueitem={'posiciones'} onClick={(e) => handleRoutesItem(e)}>Posiciones</NavLeaguesItemStyle>
        <NavLeaguesItemStyle data-valueitem={'goleadores'} onClick={(e) => handleRoutesItem(e)}>Goleadores</NavLeaguesItemStyle>
        <NavLeaguesItemStyle data-valueitem={'fixture'} onClick={(e) => handleRoutesItem(e)}>Fixture</NavLeaguesItemStyle>
      </span>
      <CgMenuRight onClick={() => setIsOpenSubmenu(!isOpenSubmenu)} className='submenuIcon'/>
    </NavbarFilterContainerStyles>
  )
}

export default NavbarWithFilter