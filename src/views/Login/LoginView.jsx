import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetStatusAuth, validateSession } from '../../redux/features/api/slices/apiAuthSlice'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ApiContext } from '../../context/ApiContext'
import FootballLoader from '../../components/molecules/FootballLoader/FootballLoader'
import FormLogin from '../../components/molecules/FormLogin/FormLogin'

const LoginView = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { setStateAlert } = useContext(ApiContext);
  const params = useParams();
  const { user, isLogged, isLoading } = useSelector(state => state.apiAuth);

  useEffect(() => setStateAlert({status: user.status, message: user.message }), [user])

  useEffect(() => {
    if(isLogged){
      dispatch(resetStatusAuth())
      params.idUser = user.sendUser._id;
      navigator(`/profile/${params.idUser}`)
    } else {
      navigator('/login')
    }
  }, [ isLogged ])

  useEffect(() => {
    dispatch(validateSession())
  }, []);

  return (
    <>
    {
      isLoading 
      ? <FootballLoader isActive={isLoading}/>
      : <FormLogin/>
    }
    </>
  )
}

export default LoginView