import React, { useEffect } from 'react'
import { HeaderItemStyle, HeaderListStyle, HeaderStyle } from './NavbarHeaderStyles';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { CgMenuGridO } from 'react-icons/cg';
import { useContext } from 'react';
import { ApiContext } from '../../../context/ApiContext';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../atoms/Button/Button';
import { logout } from '../../../redux/features/api/slices/apiAuthSlice';
import { restartStateChannels } from '../../../redux/features/api/slices/apiChannelsSlice';
import { restartSearchMatch } from '../../../redux/features/api/slices/apiMatchesSlice';
import { socket } from '../../../services/socket';

const NavbarHeader = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { isOpenMenu, setIsOpenMenu, setConnectionSocket} = useContext(ApiContext);
  const isLogged = useSelector(state => state.apiAuth.isLogged);
  const user = useSelector(state => state.apiAuth.user);
  const imgUserDefault = 'https://cdn.landesa.org/wp-content/uploads/default-user-image.png'
  const location = useLocation();

  const goHome = () => {
    setIsOpenMenu(false)
    dispatch(restartStateChannels());
    dispatch(restartSearchMatch());
    window.scroll({
      top:0,
      behavior: 'smooth'
    });
    navigator('/')
  }
  
  const goFeed = () => {
    setIsOpenMenu(false)
    window.scrollTo(0,0);
    navigator('/feed')
  }

  const goRegister = () => {
    setIsOpenMenu(false)
    window.scroll({
      top:0,
      behavior: 'smooth'
    });
    navigator('/register')
  }
  const goLogin = () => {
    setIsOpenMenu(false)
    window.scroll({
      top:0,
      behavior: 'smooth'
    });
    navigator('/login')
  }

  const goChannelSchedule = () => {
    setIsOpenMenu(false)
    window.scroll({
      top:0,
      behavior: 'smooth'
    });
    navigator('/liveEvents/channelSchedule');
  }

  const goChannels = () => {
    setIsOpenMenu(false)
    window.scroll({
      top:0,
      behavior: 'smooth'
    });
    navigator('/liveEvents/channels');
  }

  const renderImg = () => {
    if(user.sendUser.imgUrl == ''){
      return imgUserDefault
    } else {
      return user.sendUser.imgUrl
    }
  }

  const handleLogout = () => {
     if(window.confirm('Deseas cerrar sesión?')){
      if(location.pathname == `/profile/${params.idUser}`){
        navigator('/')
      }
      setConnectionSocket(false)
      dispatch(logout())
      socket.disconnect()
      return ;
     } else {
      return;
     }
  }

  const goProfileUser = (e) => {
    setIsOpenMenu(false);
    const idUser = e.target.dataset.iduser;
    params.idUser = idUser;
    window.scrollTo(0,0);
    navigator(`/profile/${params.idUser}`)
  }

  return (
    <HeaderStyle isOpenMenu={isOpenMenu} isLogged={isLogged}>
      <CgMenuGridO onClick={() => setIsOpenMenu(!isOpenMenu)} className='menuIcon'/>
      <h1 onClick={goHome}>TRICAMPEÓN</h1>
      <span className='headerContainer'>
        <HeaderListStyle>
          <HeaderItemStyle onClick={goHome}>Home</HeaderItemStyle>
          <HeaderItemStyle onClick={goFeed}>Feed</HeaderItemStyle>
          {/* <HeaderItemStyle onClick={goChannelSchedule}>Agendas</HeaderItemStyle> */}
          <HeaderItemStyle onClick={goChannels}>Canales</HeaderItemStyle>
        </HeaderListStyle>
        <HeaderListStyle className='registerButtons'>
          <HeaderItemStyle onClick={goRegister} className='registerHeaderBtn'>Register</HeaderItemStyle>
          <HeaderItemStyle onClick={goLogin} className='loginHeaderBtn'>Login</HeaderItemStyle>
        </HeaderListStyle>
        <HeaderListStyle className='iconsAccount'>
          <h4 onClick={(e)=> goProfileUser(e)} data-iduser={isLogged ? user.sendUser._id : ''}>{isLogged ? user.sendUser.username : ''}</h4>
          <img src={isLogged ? renderImg() : ''} alt="" data-iduser={isLogged ? user.sendUser._id : ''} onClick={(e)=> goProfileUser(e)} />
          <Button title={'Cerrar sesión'} handleFunction={() => handleLogout()}/>
        </HeaderListStyle>
      </span>
    </HeaderStyle>
  )
}

export default NavbarHeader