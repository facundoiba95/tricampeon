import { Routes as RoutesRouterDom, Route, BrowserRouter, useParams } from "react-router-dom";
import React, { useContext } from 'react'

//Vistas
import HomeView from '../views/Home/HomeView'
import RegisterView from '../views/Register/RegisterView'
import LoginView from '../views/Login/LoginView';
import FixtureView from '../views/Fixture/FixtureView';
import RankingView from '../views/Ranking/RankingView';
import ProfileView from '../views/Profile/ProfileView';
import FeedView from "../views/Feed/FeedView";
import NavbarHeader from "../components/organisms/NavbarHeader/NavbarHeader";
import Footer from "../components/organisms/Footer/Footer";
import LeaguesView from "../views/Leagues/LeaguesView";
import Prode from "../views/Prode/Prode";
import LiveEvents from "../views/LiveEvents/LiveEvents";
import EventSelected from "../components/organisms/EventSelected/EventSelected";
import Channels from "../components/organisms/Channels/Channels";
import Alert from "../components/molecules/Alert/Alert";
import { ApiContext } from "../context/ApiContext";
import ChannelSchedule from "../components/organisms/ChannelSchedule/ChannelSchedule";
import OtherEvents from "../components/molecules/OtherEvents/OtherEvents";


const Routes = () => {
  const {stateAlert} = useContext(ApiContext);

  return (
    <BrowserRouter>
    <NavbarHeader/>
    <Alert status={stateAlert.status} message={stateAlert.message}/>
    <RoutesRouterDom>
        <Route path='/' element={<HomeView/>}/>
        <Route path='/register' element={<RegisterView/>}/>
        <Route path='/login' element={<LoginView/>}/>
        <Route path='/prode/league/:idLeague/:idMatch' element={<Prode/>} />
        <Route path='/prode' element={<Prode/>}/>
        <Route path='/fixture' element={<FixtureView/>}/>
        <Route path='/ranking/leagues' element={<RankingView/>}/>
        <Route path='/profile/:idUser' element={<ProfileView/>}/>
        <Route path='/feed' element={<FeedView/>}/>
        <Route path='/liveEvents' element={<LiveEvents/>}/>4
        <Route path='/liveEvents/channelSchedule' element={<LiveEvents><ChannelSchedule/></LiveEvents>}/>
        <Route path='/liveEvents/otherEvents/:titleEvent' element={<LiveEvents><OtherEvents/></LiveEvents>}/>
        <Route path='/liveEvents/channels' element={<LiveEvents><Channels/></LiveEvents>}/>
        <Route path='/liveEvents/channels/:idChannel' element={<LiveEvents><EventSelected/></LiveEvents>}/>
        <Route path='/liveEvents/:idEvent' element={<LiveEvents><EventSelected/></LiveEvents>}/>
        <Route path='/leagues/:idLeague/ranking' element={<LeaguesView/>}/>
        <Route path='/leagues/:idLeague/scorers' element={<LeaguesView/>}/>
        <Route path='/leagues/:idLeague/fixture' element={<LeaguesView/>}/>
    </RoutesRouterDom>
    <Footer/>
    </BrowserRouter>
  )
}

export default Routes