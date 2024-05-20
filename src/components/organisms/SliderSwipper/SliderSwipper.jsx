import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './SliderSwipperStyles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CardEventSchedule from '../../molecules/CardEventSchedule/CardEventSchedule';
import { imgChannel } from '../../../libs/getLogosLeagues';

const SliderSwipper  = ({events, title}) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  
  const cardsEventSchedule = () =>{
    return events.map(event => {
    const { title, url, img, league, status, _id } = event;
    return (
        <SwiperSlide>
            <CardEventSchedule
              title={title}
              url={url}
              img={img}
              status={status}
              league={league}
              _id={_id}
            />
        </SwiperSlide>
        )
  })
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', width: '100%'}}>
    <img src={imgChannel[title]} alt="logo channel" style={{width: '150px', height: '80px', borderRadius: '5px', objectFit: 'contain'}}/>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {cardsEventSchedule()}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}

export default SliderSwipper;
