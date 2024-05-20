import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { leagueStates } from "../../../../libs/getLeagueStates";
import fetchApiLeaguesBuilder from "../builders/apiLeaguesBuilders/fetchApiLeaguesBuilder";

const initialState = {
    content:[],
    ligue1:[],
    serieA:[],
    premierLeague:[],
    libertadores:[],
    championsLeague:[],
    ligaArgentina:[],
    eredivise:[],
    brasileirao: [],
    bundesliga:[],
    primeiraLiga: [],
    laLiga:[],
    isLoading:false,
    error: null,
    status: null
};

export const fetchApiLeagues = createAsyncThunk(
    'content/fetchContent',
    async (idLeague) => {
        try {
            const getIdLocalStorage = idLeague ? idLeague : localStorage.getItem('idLeague') 
            const dataIdLeague= JSON.stringify({ idLeague: getIdLocalStorage });

            const connect = await fetch(`${import.meta.env.VITE_URL_BACKEND}leagues/getLeaguesByID`,{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                mode:'cors',
                body: dataIdLeague
            });

            const res = await connect.json();
            return res.resApi.data;
        } catch (error) {
            console.log(error);
            return;
        }
    }

)

export const apiLeagueSlice = createSlice({
    name:'apiLeagues',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        fetchApiLeaguesBuilder(builder, fetchApiLeagues);
    }
})

export default apiLeagueSlice.reducer;