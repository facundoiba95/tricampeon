import React, { useContext, useEffect } from 'react';
import { Alert as MuiAlert } from '@mui/material';
import { ApiContext } from '../../../context/ApiContext';

const Alert = () => {
    const { stateAlert, setStateAlert  } = useContext(ApiContext);
    const styleAlert = {
        maxWidth: '350px',
        margin:'0 auto', 
        position: 'absolute',
        top: '70px',
        left:'50%',
        transform: 'translate(-50%)',
        zIndex: '2000',
        display: `${stateAlert.status === '' || stateAlert.status === undefined  ? "none" : "flex"}`,
      }

    const statusAlert = {
        200: 'success',
        203: 'warning',
        400: 'error',
        500: 'error',
        404: 'error',
        401: 'error'
      }

  return (
    <MuiAlert variant="filled" severity={statusAlert[stateAlert.status]} style={styleAlert} onClose={() => setStateAlert({status: "", message: ""})}>
      {stateAlert.message}
    </MuiAlert>
  );
};

export default Alert;