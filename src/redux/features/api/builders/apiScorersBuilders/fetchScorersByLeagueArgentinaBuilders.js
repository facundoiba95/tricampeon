export default (builder, fetchScorersByLeagueArgentina) => {
    builder.addCase(fetchScorersByLeagueArgentina.rejected, ( state,action ) => {
        state.error = action.error.message;
        state.isLoading = false;
        return state;
    })
    builder.addCase(fetchScorersByLeagueArgentina.pending, ( state,action ) => {
        state.isLoading = true;
        return state;
    })
    builder.addCase(fetchScorersByLeagueArgentina.fulfilled, ( state,action ) => {
        state.scorersByLeagueArgentina = action.payload;
        state.isLoading = false;
        return state;
    })
}