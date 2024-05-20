export default (builder, fetchScorersByLeague) => {
    builder.addCase(fetchScorersByLeague.rejected, ( state,action ) => {
        state.isLoading = false;
        state.error = action.error.message;
        return state;
    })
    builder.addCase(fetchScorersByLeague.pending, ( state,action ) => {
        state.isLoading = true;
        return state;
    })
    builder.addCase(fetchScorersByLeague.fulfilled, ( state,action ) => {
        state.isLoading = false;
        state.scorersByLeague = action.payload;
        return state;
    })
}