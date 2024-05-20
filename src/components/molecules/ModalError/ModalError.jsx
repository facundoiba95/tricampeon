import React from 'react'
import { ModalErrorContainerStyles } from './ModalErrorStyles'
import { TbFaceIdError } from "react-icons/tb";

const ModalError = ({error, status}) => {
    const errorList = {
        404: 'No se encontraron canales para esta transmisión.',
        500: 'Ocurrio un error en el servidor. Recarga la pagina!',
    }

    console.log(error);
  return (
    <ModalErrorContainerStyles>
        <TbFaceIdError className='iconError'/>
        <h2>{errorList[status]}</h2>
    </ModalErrorContainerStyles>
  )
}

export default ModalError