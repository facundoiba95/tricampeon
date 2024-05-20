import React, { useState } from 'react'
import { ContainerNavMatchStyles, ItemNavMatchdayStyles, NavStyles } from './NavMatchDayStyles'
import { useDispatch } from 'react-redux';
import { fetchMatchesToday } from '../../../redux/features/api/slices/apiMatchesSlice';
import { dateToday, dateTomorrow, dateYesterday } from '../../../Hooks/dateHooks/useDate';

const NavMatchDay = () => {
  const [dateMatch, setDateMatch] = useState('now');
  const dispatch = useDispatch();
  
  const handleGetMatchday = (e) => {
    const daySelected = e.target.dataset.date;
    setDateMatch(daySelected);
  
    let selectedDate;
    
    switch (daySelected) {
      case "yesterday":
        selectedDate = dateYesterday;
        break;
      case "now":
        selectedDate = dateToday;
        break;
      case "tomorrow":
        selectedDate = dateTomorrow;
        break;
      default:
        selectedDate = dateToday; // Valor por defecto si no se selecciona ninguna fecha válida
        break;
    }
  
    dispatch(fetchMatchesToday(selectedDate));
  };

  return (
    <ContainerNavMatchStyles>
        <NavStyles>
            <ItemNavMatchdayStyles data-date={'yesterday'} onClick={(e) => handleGetMatchday(e)} dateMatch={dateMatch == "yesterday"}>Ayer</ItemNavMatchdayStyles>
            <ItemNavMatchdayStyles data-date={'now'} onClick={(e) => handleGetMatchday(e)} dateMatch={dateMatch == "now"}>HOY</ItemNavMatchdayStyles>
            <ItemNavMatchdayStyles data-date={'tomorrow'} onClick={(e) => handleGetMatchday(e)} dateMatch={dateMatch == "tomorrow"}>Mañana</ItemNavMatchdayStyles>
        </NavStyles>
    </ContainerNavMatchStyles>
  )
}

export default NavMatchDay