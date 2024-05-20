import React, { useContext, useState } from 'react'
import { FormContainerStyle } from './FormRegisterStyles'
import Button from '../../atoms/Button/Button'
import Compressor from 'compressorjs'
import { useDispatch, useSelector } from 'react-redux'
import { FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { ApiContext } from '../../../context/ApiContext'
import { createUser, resetStatusAuth } from '../../../redux/features/api/slices/apiAuthSlice'

const FormRegister = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const { setStateAlert } = useContext(ApiContext);
    const {user} = useSelector(state => state.apiAuth);
    const [ valueImg, setValueImg ] = useState('https://cdn.landesa.org/wp-content/uploads/default-user-image.png')
    const [ inputUsername, setInputUsername ] = useState('');
    const [ inputPassword, setInputPassword ] = useState('');
    const [ inputRepeatPassword, setInputRepeatPassword ] = useState('');
    const [ inputEmail, setInputEmail ] = useState('');
    const [ hiddenPassword, setHiddenPassword ] = useState(false);


    const handleCompressorImg = (e) => {
        const image = document.querySelector('#imgUser')
        let list = new DataTransfer() // nueva lista para enviar al backend
        const limitFileCloudinary = 10485760;
        
        new Compressor( image.files[0], {
                quality: 0.8,
                success: (compressedResult) => {
                    if(compressedResult.size > limitFileCloudinary) {  // limite de Mb por archivo en Cloudinary
                        alert('El archivo no puede superar los 10Mb')
                        setValueImg('https://cdn.landesa.org/wp-content/uploads/default-user-image.png')
                        image.value = '';
                    } else {
                        setValueImg(URL.createObjectURL(e.target.files[0]));
                        let file = new File([compressedResult], compressedResult.name)
                        list.items.add(file);
                        const Filelist = list.files;
                        image.files = Filelist;
                    }
                }
            }
        )
    }

    const validateInputs = () => {
        if (!inputUsername || !inputPassword || !inputRepeatPassword || !inputEmail || !valueImg) {
          setStateAlert({status: 404, message: 'Por favor, completa todos los campos.'});
          return false;
        }
    
        if (inputPassword !== inputRepeatPassword) {
          setStateAlert({status: 400, message: 'Las contraseñas no coinciden.'});
          return false;
        }
    
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(inputEmail)) {
          setStateAlert({status: 400, message: 'Por favor, ingresa un email válido.'});
          return false;
        }

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$-_!%*?&])[A-Za-z\d@$!%-_*?&]{8,}$/;
        if (!passwordPattern.test(inputPassword)) {
          setStateAlert({status: 203, message: 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.'});
          return false;
        }

        // EXPRESIONES REGULARES
        // (?=.*[a-z]): Al menos una letra minúscula.
        // (?=.*[A-Z]): Al menos una letra mayúscula.
        // (?=.*\d): Al menos un dígito (número).
        // (?=.*[@$!%*?&]): Al menos un carácter especial.
        // {8,}: Al menos 8 caracteres en total.

        return true;
      };

    const sendRegister = async (e) => {
        e.preventDefault();
        if(validateInputs()){
            const createForm = document.querySelector('#createForm');
            dispatch(createUser(createForm))
        }
    }

  return (
     <FormContainerStyle id='createForm' name='createForm' onSubmit={(e) => sendRegister(e)}>
       <h3>Completá el registro</h3>
       <input type="text" name='username' placeholder='Nombre de usuario' value={inputUsername} onChange={(e) => setInputUsername(e.target.value)} />
       <span className='passwordContainer'>
         <input type={!hiddenPassword ? "password" : "text"} name='password' placeholder='Contraseña' value={inputPassword} onChange={(e) => setInputPassword(e.target.value)}/>
         <input type={!hiddenPassword ? "password" : "text"} name='repeatPassword' placeholder='Repetir contraseña' value={inputRepeatPassword} onChange={(e) => setInputRepeatPassword(e.target.value)}/>
         <span style={{display: 'flex', alignItems:'center', gap: '10px'}}>         
            <FaEye className='showPasswordIcon' onClick={() => setHiddenPassword(!hiddenPassword)}/>
            <small>Mostrar contraseña</small>
         </span>
       </span>
       <input type="email" name='email' placeholder='Email' value={inputEmail} onChange={(e) => setInputEmail(e.target.value)}/>
       <div className='imgContainer'>
         <small>Foto de perfil:</small>
           <span className='img'>
            <img src={valueImg} alt="" />
           </span> 
           <input 
           accept='image/*'
           type="file" 
           name="imgUser" 
           id="imgUser" 
           onChange={(e) => handleCompressorImg(e)}
           />
       </div> 
       <Button title={'Registrarme'}></Button>
     </FormContainerStyle>
    )
}

export default FormRegister





// e.preventDefault();
        
// const user = {
//     username: inputUsername,
//     password: inputPassword,
//     email: inputEmail
// }
// if(inputPassword !== inputRepeatPassword){
//     alert('Las contraseñas no coinciden! Por favor, revísalas.')
//     return;
// } 

// const sendUser =  await fetch(`${import.meta.env.VITE_URL_BACKEND}users/createUser`,{
//     method: "POST",
//     headers: {
//         "Content-Type":"application/json"
//     },
//     body: JSON.stringify(user)
// })

// switch (sendUser.status) {
//     case 200:
//         alert('Se creo el usuario correctamente!')
//         break;
//     case 203:
//         alert('El usuario o email ya existen!')
//         break;
//     default:
//         alert('Ocurrio un error.')
//         break;
// }
     