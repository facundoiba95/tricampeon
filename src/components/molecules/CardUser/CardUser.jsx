import React, { useContext, useEffect } from 'react'
import { CardUserContainerStyle } from './CardUserStyles'
import { useDispatch, useSelector } from 'react-redux'
// icons
import { AiOutlineUser } from 'react-icons/ai';
import { MdAlternateEmail } from 'react-icons/md';
import { BsCalendarDate } from 'react-icons/bs';
import ModalAuth from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';
import { ApiContext } from '../../../context/ApiContext';
import SectionInProgress from '../SectionInProgress/SectionInProgress';
import { validateSession } from '../../../redux/features/api/slices/apiAuthSlice';
import UpdateImg from '../UpdateImg/UpdateImg';


const CardUser = () => {
    const { user, status, message } = useSelector(state => state.apiAuth);  
    const sendUser = user.sendUser ?  user.sendUser : [];
    
    const isLogged = useSelector(state => state.apiAuth.isLogged);
    const imgUserDefault = 'https://cdn.landesa.org/wp-content/uploads/default-user-image.png'
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const { setIsOpenModal, setStateAlert, openBackdropFilter, setOpenBackdropFilter } = useContext(ApiContext);


    const goLogin = () => navigator('/login');
    const goRegister = () => navigator('/register');

    const renderModal = () => {
        setIsOpenModal(true)
         return ( 
            <ModalAuth 
               titleModal={'Debes iniciar sesion o registrarte para continuar.'} 
               handleFunctionBtnOne={() => goLogin()} 
               handleFunctionBtnTwo={() => goRegister()}
               titleBtnOne={'Login'}
               titleBtnTwo={'Register'}
               />
         )
    }

    const renderImg = () => {
      if(sendUser.imgUrl == ''){
        return imgUserDefault
      } else {
        return sendUser.imgUrl
      }
    }
   
    const renderCard = () => {
      return (
          <>
            <div className='headerCardProfile'>
              <img src={renderImg()} alt="" className='imgUser'/>
              <button onClick={() => setOpenBackdropFilter(!openBackdropFilter)}>Cambiar imagen</button>
            </div>
            <ul className='infoUserProfile'>
              <li><p><AiOutlineUser/><b>Username: </b>{sendUser.username}</p></li>
              <li><p><MdAlternateEmail/><b>Email: </b>{sendUser.email}</p></li>
              <li><p><BsCalendarDate/><b>Fecha de alta: </b>{sendUser.createdAt.slice(0,10).split("")}</p></li>
            </ul>
          </>
      )
  } 
  
    useEffect(() => setStateAlert({status,message}),[ status ])

    useEffect(() => {
      dispatch(validateSession())
    }, [])
  return (
    <CardUserContainerStyle>
      <UpdateImg/>
        {
            isLogged 
            ? renderCard()
            : renderModal()
        }
        <SectionInProgress/>
    </CardUserContainerStyle>
  )
}

export default CardUser