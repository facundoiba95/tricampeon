import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import sendBetBuilders from "../builders/apiBetsBuilders/sendBetBuilders";
import getBetsBuilders from "../builders/apiBetsBuilders/getBetsBuilders";
import checkBetBuilders from "../builders/apiBetsBuilders/checkBetBuilders";

const initialState = {
    bet: [],
    checked:null,
    dataBet:[],
    isLoading: false,
    status: null,
    error: null
}

export const sendBet = createAsyncThunk(
    'bets/sendBet',
    async (bet) => {
        try {

            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_BACKEND}bets/sendBet`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                },
                body: JSON.stringify(bet)
            })
            const res = await req.json();

            if(res.status == 200){
                alert('Apuesta realizada!')    
            } else if(res.status == 203){
                alert('Ya realizaste esta apuesta.')
            }
            return res;
        } catch (error) {
            console.log(error);
        }
    }
)

export const getBets = createAsyncThunk(
    'bets/getBets',
    async (idUser) => {
        if(idUser){
        const req = await fetch(`${import.meta.env.VITE_URL_BACKEND}bets/getBets`)
        const res = await req.json();
            const filterBetByIdUser = res.filter(obj => {
                for (let i = 0; i < obj.user.length; i++) {
                  if (obj.user[i]._id === idUser) {
                    return true;
                  }
                }
                return false;
              });
              return filterBetByIdUser;
        } else {
            const req = await fetch(`${import.meta.env.VITE_URL_BACKEND}bets/getBets`)
            const res = await req.json();
            return res;
        }
        
    }
)

export const checkBet = createAsyncThunk(
    'bets/checkBet',
    async (idBet) => {
        try {
            const token = localStorage.getItem('token');
            const searchBetted = await JSON.parse(localStorage.getItem('searchBetted'));
            const searchBettedArg = await JSON.parse(localStorage.getItem('searchBettedArg'));

            const dataMatchUpdated = searchBettedArg ? searchBettedArg : searchBetted;
            const bet = JSON.stringify({idBet,dataMatchUpdated});

                const req = await fetch(`${import.meta.env.VITE_URL_BACKEND}bets/checkBet`,{
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json",
                        "x-access-token": `${token}`
                    },
                    body: bet
                })
                const res = await req.json();

   
              localStorage.removeItem('searchBetted');
              localStorage.removeItem('searchBettedArg');
              return res.verificationResult;
        } catch (error) {
            console.log(error);
            alert('Ocurrio un error al checkear la apuesta.')
            return;
        }
    }
)

export const apiBetSlice = createSlice({
    name: 'apiBets',
    initialState,
    reducers:{},
    extraReducers: ( builder ) => {
        sendBetBuilders(builder, sendBet);
        getBetsBuilders(builder, getBets);
        checkBetBuilders(builder, checkBet);
    }
})

export default apiBetSlice.reducer;