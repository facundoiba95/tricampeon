import { configureStore } from "@reduxjs/toolkit";
import apiLeagueSlice from "../features/api/slices/apiLeagueSlice";
import apiMatchesSlice from "../features/api/slices/apiMatchesSlice";
import apiScorersSlice from "../features/api/slices/apiScorersSlice";
import apiAuthSlice from "../features/api/slices/apiAuthSlice";
import apiBetSlice from "../features/api/slices/apiBetSlice";
import apiUserSlice from "../features/api/slices/apiUserSlice";
import apiChannelsSlice from "../features/api/slices/apiChannelsSlice";

const store = configureStore({
    reducer:{
        apiLeagues: apiLeagueSlice,
        apiMatches: apiMatchesSlice,
        apiScorers: apiScorersSlice,
        apiAuth: apiAuthSlice,
        apiBets: apiBetSlice,
        apiUsers: apiUserSlice,
        apiChannels: apiChannelsSlice
    }
})

export default store;