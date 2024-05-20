import { leagueStates } from "../../../../../libs/getLeagueStates";

export default (builder, fetchApiLeagues) => {
    builder.addCase(fetchApiLeagues.fulfilled, ( state, action ) => {
        if(action.meta.arg){
            state[leagueStates[action.meta.arg]] = action.payload;
            localStorage.setItem(`${leagueStates[action.meta.arg]}`, JSON.stringify(leagueStates[action.meta.arg]));
            state.isLoading = false;
            state.status = action.payload;
        }
        state.status = action.payload.status;
        state.content = action.payload;
    })
    builder.addCase(fetchApiLeagues.pending, ( state, action ) => {
        state.isLoading = true;
        return;
    })
    builder.addCase(fetchApiLeagues.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
        return;
    })
}