import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux';
import { FormContainerStyle } from '../FormRegister/FormRegisterStyles';
import { ApiContext } from '../../../context/ApiContext';
import { loginUser } from '../../../redux/features/api/slices/apiAuthSlice';
import Button from '../../atoms/Button/Button';

const FormLogin = ({isChat}) => {
    const [ inputUsername , setInputUsername] = useState('');
    const [ inputPassword , setInputPassword] = useState('');
    const { setStateAlert } = useContext(ApiContext);
    const dispatch = useDispatch();

    const sendLogin = async (e) => {
        e.preventDefault();
        if(!inputPassword || !inputPassword){
          setStateAlert({status: 404, message: 'Debes completar todos los campos'});
          return;
        } else {
          const user = {
            username : inputUsername,
            password: inputPassword
          }
          dispatch(loginUser(user));
        }
      }

  return (
    <FormContainerStyle isChat={isChat}>
        <h2>Iniciar sesion</h2>
        <input type="text" placeholder={"Nombre de usuario"} required={true} value={inputUsername} onChange={(e) => setInputUsername(e.target.value)}/>
        <input type="password" placeholder='Contraseña' required={true} value={inputPassword} onChange={(e) => setInputPassword(e.target.value)}/>
        <Button title={'Iniciar Sesión'} handleFunction={(e) => sendLogin(e)}></Button>
  
        <p>No tienes una cuenta ? <a href='/register'>Regístrate!</a></p>
    </FormContainerStyle>
  )
}

export default FormLogin