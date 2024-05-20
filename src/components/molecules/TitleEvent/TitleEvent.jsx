import React, { useEffect, useRef, useState } from 'react'
import { TitleEventContainerStyles, TitleMatchContainerStyles } from './TitleEventStyles'
import { useSelector } from 'react-redux';
import { IoShieldOutline } from "react-icons/io5";
import { MdStadium } from "react-icons/md";
import { TfiCup } from "react-icons/tfi";

const TitleEvent = () => {
    const eventSelected = useSelector(state => state.apiMatches.searchMatch);
    const homeTeam = eventSelected.length ? eventSelected[0].contestants.homeTeam : [];
    const awayTeam = eventSelected.length ? eventSelected[0].contestants.awayTeam : [];
    const { channelSelected } = useSelector(state => state.apiChannels);

    const renderTitleMatch = () => {
      return (
        <TitleMatchContainerStyles>
           <span className='containerTeams'>
             <span className='homeTeam'>
                 {
                   homeTeam.imgProps.src ?
                   <img src={homeTeam.imgProps.src} alt="crest homeTeam"/>
                   : <IoShieldOutline className='iconCrest'/>
                    }
                 <h3>{homeTeam.name}</h3>
             </span>
             <span className='awayTeam'>
                 {
                   awayTeam.imgProps.src ?
                   <img src={awayTeam.imgProps.src} alt="crest awayTeam"/>
                   : <IoShieldOutline className='iconCrest'/>
                 }
                 <h3>{awayTeam.name}</h3>
             </span>
           </span>
           <span className='line'></span>
           <span className='dataEventSelected'>
             <p><MdStadium className='iconStadium'/>{eventSelected[0].venue}</p>
             <p><TfiCup className='iconCup'/>{eventSelected[0].shareProps ? eventSelected[0].shareProps.tournament.replace("-", " "): ''}</p>
           </span>
        </TitleMatchContainerStyles>
      )
    }

    const renderTitleChannel = () => {
      return (
          <h3>{channelSelected[0].altName}</h3>
      )
    }

  return (
    <TitleEventContainerStyles>
      {
        eventSelected.length
        ? renderTitleMatch()
        : renderTitleChannel()
      }
    </TitleEventContainerStyles>
  )
}

export default TitleEvent