import React, { useContext, useEffect } from 'react'
import FormRegister from '../../components/molecules/FormRegister/FormRegister'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { resetStatusAuth, validateSession } from '../../redux/features/api/slices/apiAuthSlice';
import { ApiContext } from '../../context/ApiContext';
import FootballLoader from '../../components/molecules/FootballLoader/FootballLoader';

const RegisterView = () => {
  const { user, isLoading, isLogged } = useSelector(state => state.apiAuth);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { setStateAlert } = useContext(ApiContext);

  useEffect(() => setStateAlert({status: user.status, message: user.message}),[user.status])
  
  useEffect(() => {
    if(isLogged){
      dispatch(resetStatusAuth())
      params.idUser = user.sendUser._id;
      navigator(`/profile/${params.idUser}`)
    } else {
      navigator('/register')
    }
  }, [ isLogged ])


  useEffect(() => {
    dispatch(validateSession())
  }, []);
  return (
    <>
    {
      isLoading
      ? <FootballLoader/>
      : <FormRegister/>
    }
    </>
  )
}

export default RegisterView