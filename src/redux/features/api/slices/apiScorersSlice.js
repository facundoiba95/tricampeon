import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchScorersByLeagueBuilders from "../builders/apiScorersBuilders/fetchScorersByLeagueBuilders";
import fetchScorersByLeagueArgentinaBuilders from "../builders/apiScorersBuilders/fetchScorersByLeagueArgentinaBuilders";

const initialState= {
    scorersByLeague: [],
    scorersByLeagueArgentina:[],
    error: null,
    isLoading: false
}

export const fetchScorersByLeague = createAsyncThunk(
    'scorersByLeague/fetchScorersByLeague',
    async ( codeLeague ) => {
        try {
            const league = JSON.stringify({code: codeLeague});
            const reqApi = await fetch(`${import.meta.env.VITE_URL_BACKEND}scorers/getScorersByLeagues`,{
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                mode:'cors',
                body: league
            })
            const resApi = await reqApi.json();
            const scorers = resApi.changeLogos[0].scorers;

            localStorage.setItem('scorersLeague', JSON.stringify(scorers))
            return scorers;
        } catch (error) {
            console.log({error});
            return {error};
        }
    }
)

export const fetchScorersByLeagueArgentina = createAsyncThunk(
    'scorersByLeagueArgentina/fetchScorersByLeagueArgentina',
    async () => {
        try {
            const reqApi = await fetch(`${import.meta.env.VITE_URL_BACKEND}scorers/getScorersByLeagueArgentina`,{
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                mode:'cors',
            })
            
            const resApi = await reqApi.json();
            return resApi;
        } catch (error) {
            console.log({error});
            return {error};
        }
    }
)

export const apiScorersSlice = createSlice({
    name:"apiScorers",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        fetchScorersByLeagueBuilders(builder, fetchScorersByLeague);
        fetchScorersByLeagueArgentinaBuilders(builder, fetchScorersByLeagueArgentina);
    }
})

export default apiScorersSlice.reducer;