import React from 'react'
import { EmptyChatModalContainerStyles } from './EmptyChatModalStyles'
import FormLogin from '../FormLogin/FormLogin'
import { useSelector } from 'react-redux'
import Loader from '../Loader/Loader'

const EmptyChatModal = () => {
  const { isLoading } = useSelector(state => state.apiAuth);

  return (
    <EmptyChatModalContainerStyles>
        {
          isLoading
          ? <Loader/>
          : <>
              <h2>Inicia sesión para ingresar al chat!</h2>
              <FormLogin isChat={true}/>
            </>
        }
    </EmptyChatModalContainerStyles>
  )
}

export default EmptyChatModal