import React, { useEffect, useState } from 'react'
import { ListEventsContainerStyles } from './ListEventsStyles';
import { useLocation } from 'react-router-dom';

const LiveEvents = ({children}) => {
  const [ titlePage, setTitlePage ] = useState('');
   const location = useLocation()
   useEffect(() => {
    if(location.pathname === '/liveEvents/channels'){
      setTitlePage('CANALES EN DIRECTO')
    }
   }, [])
  return (
    <ListEventsContainerStyles>
        <h2>{titlePage}</h2>
        {children}
    </ListEventsContainerStyles>
  )
}

export default LiveEvents