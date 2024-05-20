import React from 'react'
import { SectionInProgressContainerStyles } from './SectionInProgressStyles'
import { IoConstructOutline } from "react-icons/io5";

const SectionInProgress = () => {
  return (
    <SectionInProgressContainerStyles>
        <IoConstructOutline className='iconConstructor'/>
        <h2>Esta sección esta en construcción.</h2>
    </SectionInProgressContainerStyles>
  )
}

export default SectionInProgress