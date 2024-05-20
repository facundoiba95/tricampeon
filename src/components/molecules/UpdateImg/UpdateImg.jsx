import React, { useContext, useEffect, useState } from 'react'
import { ContainerBackdropFilterStyles, FormUpdateImgStyles } from './UpdateImgStyles'
import { ApiContext } from '../../../context/ApiContext'
import Compressor from 'compressorjs'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateImageUser, resetStatusAuth } from '../../../redux/features/api/slices/apiAuthSlice'
import Loader from '../Loader/Loader'

const UpdateImg = () => {
    const { openBackdropFilter, setOpenBackdropFilter } = useContext(ApiContext);
    const { user, isLoading, message } = useSelector(state => state.apiAuth);
    const [ loadImg, setLoadImg ] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.style.overflow = !openBackdropFilter ? 'auto' : 'hidden';
    }, [ openBackdropFilter ])
    
    const handleCompressImage = (e) => {
        const image = document.getElementById('imgUser').files;
        const limitFileCloudinary = 10485760;
        
        new Compressor(image[0], {
            quality: 0.6,
            success ( resultCompressor) {
                if(resultCompressor.size > limitFileCloudinary){
                    console.error('Imagen demasiado grande. Se permiten subir imagenes hasta 10.4MB.');
                    alert('Imagen demasiado grande. Se permiten subir imagenes hasta 10.4MB.')
                    return;
                }

                setLoadImg(URL.createObjectURL(e.target.files[0]))
                image.files = resultCompressor;
            },
            error(err) {
                console.log('Ocurrio un error en la compresion de imagen. ', err);
            }
        })
    }


    const handleSendImage = (e) => {
        e.preventDefault();
        const formUpdateImage = document.getElementById('formUpdateImage');
        dispatch(UpdateImageUser(formUpdateImage));
    }

    useEffect(() => {
        if(user.status == 200){
            dispatch(resetStatusAuth());
            setOpenBackdropFilter(false);
        }
    }, [ isLoading, user.status ]);

  return (
    <ContainerBackdropFilterStyles hidden={openBackdropFilter}>
        {
            isLoading
            ? <Loader/>
            : <FormUpdateImgStyles onSubmit={(e) => handleSendImage(e)} id='formUpdateImage'>
                <h3 className='closeWindow' onClick={() => setOpenBackdropFilter(false)}>Cerrar</h3>
                 <img src={loadImg} alt="imgUser" />
                 <input 
                 type="file"
                 accept='image/*'
                 name='imgUser'
                 id='imgUser'
                 onChange={(e) => handleCompressImage(e)}
                 />
                <button>Cambiar imagen</button>
              </FormUpdateImgStyles>
        }
    </ContainerBackdropFilterStyles>
  )
}

export default UpdateImg