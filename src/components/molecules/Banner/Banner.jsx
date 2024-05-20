import React from 'react'
import { BannerContainerStyles } from './BannerStyles'
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigator = useNavigate();

    const goLiveEvents = () => navigator('/liveEvents/channels');


  return (
    <BannerContainerStyles>
        <h1 onClick={goLiveEvents}>Ver canales en vivo!</h1>
    </BannerContainerStyles>
  )
}

export default Banner