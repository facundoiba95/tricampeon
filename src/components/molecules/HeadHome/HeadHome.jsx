import React from 'react'
import TitleContainer from '../../atoms/TitleContainer/TitleContainer'
import NavMatchDay from '../../organisms/NavMatchday/NavMatchDay'
import { ContainerHeadHomeStyles } from './HeadHomeStyles'

const HeadHome = () => {
  return (
    <ContainerHeadHomeStyles>
       <TitleContainer><h2>MATCHDAY</h2></TitleContainer>
       <NavMatchDay/> 
    </ContainerHeadHomeStyles>
  )
}

export default HeadHome