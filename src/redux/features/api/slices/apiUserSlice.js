import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getUsersBuilders from "../builders/apiUsersBuilders/getUsersBuilders";

const initialState = {
    users:[],
    user:[],
    isLoading: false,
    error:null
}

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_BACKEND}users/getUsers`)
            const res = await req.json();
            return res;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
)

export const apiUserSlice = createSlice({
    name:'apiUsers',
    initialState,
    reducers:{},
    extraReducers: ( builder ) => {
        getUsersBuilders(builder, getUsers);
    }
})

export default apiUserSlice.reducer;