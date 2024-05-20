import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchAllMatchesBuilders from "../builders/apiMatchesBuilders/fetchAllMatchesBuilders";
import fetchMatchesBuilders from "../builders/apiMatchesBuilders/fetchMatchesBuilders";
import fetchMatchesTodayBuilders from "../builders/apiMatchesBuilders/fetchMatchesTodayBuilders";
import fetchMatchesArgentinaBuilders from "../builders/apiMatchesBuilders/fetchMatchesArgentinaBuilders";
import getMatchByIDBuilders from "../builders/apiMatchesBuilders/getMatchByIDBuilders";

const initialState= {
    matchesLeague: [],
    searchMatch:[],
    matches: [],
    isLoading: false,
    error: null
}

export const fetchAllMatches = createAsyncThunk(
    'matches/fetchAllMatches',
    async (idLeague) => {
        try {
            const dataIdLeague = JSON.stringify({idLeague: Number(idLeague)});
            const connect = await fetch(`${import.meta.env.VITE_URL_BACKEND}matches/getMatchesLeagues`, {
               method: "POST",
               headers: {
                 "Content-Type": "application/json"
               },
               body: dataIdLeague
            })
            const res = await connect.json();
            const resArray = await res.matches;
            return resArray;
        } catch (error) {
            console.log(error);
        }
    }
)

export const fetchMatches = createAsyncThunk(
    'matches/fetchMatches',
    async (idLeague) => {
        try {
           const dataIdLeague = JSON.stringify({idLeague: Number(idLeague)});
           const connect = await fetch(`${import.meta.env.VITE_URL_BACKEND}matches/getMatchesLeagues`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: dataIdLeague
           })
           const res = await connect.json();
           const resArray = res.matches;
           
           const rewriteResponse = resArray.map(match => {
                if(match.competition.type === 'CUP'){
                    return match;
                } else {
                    return { ... match, 
                        previusMatchday: match.season.currentMatchday - 1,
                        nextMatchday: match.season.currentMatchday + 1
                    }
                } 
           })

        //    localStorage.setItem('matchesLeague', JSON.stringify(rewriteResponse))

            const currentMatchday = rewriteResponse.filter(match => match.matchday === match.season.currentMatchday)
            const previusMatchday = rewriteResponse.filter(match => match.previusMatchday === match.matchday)
            const nextMatchday = rewriteResponse.filter(match => match.nextMatchday === match.matchday)
            const nextMatchDayCup = rewriteResponse.filter(match => {
                if(match.competition.type === 'CUP' && match.stage === 'SEMI_FINALS' && match.stage === 'FINAL'){
                    return match; 
                }
            })
            const scheduledMatchesCup = rewriteResponse.filter(matches => matches.status === 'TIMED')
           return {
            currentMatchday,
            previusMatchday,
            nextMatchday,
            scheduledMatchesCup,
            rewriteResponse
           };
        } catch (error) {
            console.log(error);
        }
    }
)

export const fetchMatchesToday = createAsyncThunk(
    'matches/fetchMatchesToday',
    async (dateMatch) => {
        try {
            const dateMatchValue = JSON.stringify({dateMatch});
            const connect = await fetch(`${import.meta.env.VITE_URL_BACKEND}matches/getMatches`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: dateMatchValue
            })
            
            const res = await connect.json();
            return res;
        } catch (error) {
            console.log(error);
        }
    }
)

export const fetchMatchesArgentina = createAsyncThunk(
    'matches/fetchMatchesArgentina',
    async () => {
        try {
           const connect = await fetch(`${import.meta.env.VITE_URL_BACKEND}matches/getMatchesLeagueArgentina`,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            }
           })
           const res = await connect.json();
         

           const resArray = res.matches;

          const date = new Date().toISOString().slice(0,10);
          const setPhase = resArray.map(match => {
            return {... match, phase: match.league.round.substring(0,10)}
          })
          const SegundaFase = setPhase.filter(match => match.phase == '2nd Phase ')
          
          const getMatchday = SegundaFase.find(match =>  {
            if(match.date >= date && match.phase == '2nd Phase '){
                return match.currentMatchday = Number(match.league.round.substring(12))
            };
        }).currentMatchday;

           const newArray = SegundaFase.map(match => {
            const matchday = Number(match.league.round.substring(12)); 
            return { ... match,
                matchday,
                currentMatchday: getMatchday,
                previusMatchday: getMatchday - 1,
                nextMatchday: getMatchday + 1,
            }
           })

           const currentMatchday = newArray.filter(match => match.matchday === match.currentMatchday)
           const previusMatchday = newArray.filter(match => match.previusMatchday === match.matchday)
           const nextMatchday = newArray.filter(match => match.nextMatchday === match.matchday)

        
          return {
           currentMatchday,
           previusMatchday,
           nextMatchday,
           newArray
          }        
        } catch (error) {
            console.log('Ocurrio un error en apiMatchesSlices Slice: fetchMatchesArgentina. Error', error);
        }
    }
)

export const getMatchByID = createAsyncThunk(
    'matches/getMatchByID',
    async (idMatch) => {
        try {
          const req = await fetch(`${import.meta.env.VITE_URL_BACKEND}matches/getMatchByID/${idMatch}`);
          const res = await req.json();
          return res;
        } catch (error) {
            console.log('Ocurrio un error en apiMatchesSlices Slice: getMatchByID. Error', error);
            return error;
        }
    }
)

export const apiMatchesSlice = createSlice({
    name: 'apiMatches',
    initialState,
    reducers: {
        setSearchMatch: ( state,action ) => {
            state.searchMatch = action.payload;
            return state;
        },
        restartSearchMatch: ( state,action ) => {
            state.searchMatch = []
        }
    },
    extraReducers: ( builder ) => {
        fetchAllMatchesBuilders(builder, fetchAllMatches);
        fetchMatchesBuilders(builder, fetchMatches);
        fetchMatchesTodayBuilders(builder, fetchMatchesToday);
        fetchMatchesArgentinaBuilders(builder, fetchMatchesArgentina); 
        getMatchByIDBuilders(builder, getMatchByID);       
    }
})
export const { setSearchMatch, restartSearchMatch } = apiMatchesSlice.actions;
export default apiMatchesSlice.reducer;