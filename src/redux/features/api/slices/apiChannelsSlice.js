import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAllChannelsBuilders from "../builders/apiChannelsBuilders/getAllChannelsBuilders";
import getChannelScheduleBuilders from "../builders/apiChannelsBuilders/getChannelScheduleBuilders";
import getChannelByIDBuilders from "../builders/apiChannelsBuilders/getChannelByIDBuilders";

const initialState= {
    message: null,
    channelsByMatch: [],
    channelSelected: [],
    idEvent: null,
    indexChannel: null,
    channels: [],
    schedule: [],
    isLoading: false,
    status: null,
    error: null
}

export const getAllChannels = createAsyncThunk(
    'channels/getAllChannels',
    async () => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_BACKEND}channels/getAllChannels`);
            const res = await req.json();
            return res;
        } catch (error) {
            console.log('Ocurrio un error en apiChannelsSlice Slice: getAllChannels. Error', error);
        }
    }
)

export const getChannelSchedule = createAsyncThunk(
    'channels/getChannelSchedule',
    async () => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_BACKEND}channels/getChannelSchedule`)
            const res = await req.json();
            return res;
        } catch (error) {
            console.log('Ocurrio un error en apiChannelsSlice Slice: getChannelSchedule. Error', error);
        }
    }
)

export const getChannelByID = createAsyncThunk(
    'channels/getChannelByID',
    async (idChannel) => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_BACKEND}channels/getChannelByID/${idChannel}`)
            const res = await req.json();
            return res;
        } catch (error) {
            console.log('Ocurrio un error en apiChannelsSlice Slice: getChannelByID. Error', error);
        }
    }
)

export const apiMatchesSlice = createSlice({
    name: 'apiChannels',
    initialState,
    reducers: { 
        setChannelSelected : (state, action ) => {
            state.channelSelected = action.payload;
            return state;
        },
        restartStateChannels: (state, action) => {
            state.message = null;
            state.channelsByMatch = [];
            state.channelSelected = [];
            state.channels = [];
            state.indexChannel = null;
            state.isLoading = false;
            state.status = null;
            state.idEvent = null;
            state.error = null;
        },
        setIndexChannel: ( state,action ) => {
            state.indexChannel = action.payload;
        },
        setIdEvent: ( state, action ) => {
            state.idEvent = action.payload;
        },
        setChannelsByMatch: ( state,action ) => {
            state.channelsByMatch = action.payload;
        }

    },
    extraReducers: ( builder ) => {
        getAllChannelsBuilders(builder, getAllChannels);
        getChannelByIDBuilders(builder, getChannelByID);
        getChannelScheduleBuilders(builder, getChannelSchedule);
    }
})

export const { setChannelSelected, restartStateChannels, setIndexChannel, setIdEvent, setChannelsByMatch } = apiMatchesSlice.actions;

export default apiMatchesSlice.reducer;





