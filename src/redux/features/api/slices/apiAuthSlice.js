import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import createUserBuilders from "../builders/apiAuthBuilders/createUserBuilders";
import loginBuilders from "../builders/apiAuthBuilders/loginBuilders";
import validateSessionBuilders from "../builders/apiAuthBuilders/validateSessionBuilders";
import { socket } from "../../../../services/socket";
import updateImageUserBuilders from "../builders/apiAuthBuilders/updateImageUserBuilders";

const initialState = {
    user: [],
    isLogged: false,
    isLoading: false,
    message: null,
    error: null
}

export const createUser = createAsyncThunk(
    'auth/createUser',
    async (form) => {
        try {
            const sendForm = await fetch(`${import.meta.env.VITE_URL_BACKEND}auth/createUser`,{
                method: "POST",
                mode:'cors',
                body: new FormData(form)
            })
           const res = await sendForm.json();

           return res; 
    } catch (error) {
        alert('Ocurrio un error inesperado!')
            console.log('Error en apiAuthSlice.js createuser AsyncThunk. Error: ', error);
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (user) => {
        try {
           const sendLogin = await fetch(`${import.meta.env.VITE_URL_BACKEND}auth/login`,{
               method:"POST",
               headers:{
                 "Content-Type": "application/json"
               },
               body: JSON.stringify(user)
             })
             const res = await sendLogin.json();
             return res;
        } catch (error) {
            console.log('Error en apiAuthSlice.js loginUser AsyncThunk. Error: ', error);
        }
    }
)

export const UpdateImageUser = createAsyncThunk(
    'auth/updateImageUser',
    async (form) => {
        try {
           const token = localStorage.getItem('token');
           const req = await fetch(`${import.meta.env.VITE_URL_BACKEND}auth/updateImageUser`,{
            method: 'PUT',
            mode: 'cors',
            headers: {
                "x-access-token": token
            },
            body: new FormData(form)
           }) 

           const res = await req.json();
           return res;
        } catch (error) {
            console.log('Error en apiAuthSlice.js UpdateImageUser AsyncThunk. Error: ', error);
        }
    }
)

export const validateSession = createAsyncThunk(
    'auth/validateSession',
    async () => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_BACKEND}auth/validateSession`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                }
            });
            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en validateSession(), authSlices. Error: ', error);
            alert('Ocurrio un error en validateSession(), authSlices. Error: ', error);
        }
    }
)

export const apiAuthSlice = createSlice({
    name:'apiAuth',
    initialState,
    reducers:{
        logout: ( state, action ) => {
            state.isLogged = false;
            state.isLoading = false;
            state.user = [];
            localStorage.removeItem('token')
            return;
        },
        resetStatusAuth: (state,action) => {
            state.user.status = null;
        }
    },
    extraReducers: (builder) => {
       createUserBuilders(builder, createUser);
       loginBuilders(builder, loginUser);
       validateSessionBuilders(builder, validateSession);
       updateImageUserBuilders(builder, UpdateImageUser)
    }
})

export const { logout, resetStatusAuth } = apiAuthSlice.actions;

export default apiAuthSlice.reducer;