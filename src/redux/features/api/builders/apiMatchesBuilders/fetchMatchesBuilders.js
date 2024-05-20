export default (builder, fetchMatches) => {
    builder.addCase( fetchMatches.pending, ( state, action ) => {
        state.isLoading = true;
    })
    builder.addCase(fetchMatches.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.error.message;
    })
    builder.addCase( fetchMatches.fulfilled, ( state, action ) => {
        state.matchesLeague = action.payload;
        state.isLoading = false;
    })
}