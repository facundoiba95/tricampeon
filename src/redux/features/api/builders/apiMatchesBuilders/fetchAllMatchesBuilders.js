export default (builder, fetchAllMatches) => {
    builder.addCase(fetchAllMatches.rejected, ( state,action ) => {
        state.isLoading = false;
        state.error = action.error.message;
    })
    builder.addCase(fetchAllMatches.pending, ( state,action ) => {
        state.isLoading = true;
    })
    builder.addCase(fetchAllMatches.fulfilled, ( state,action ) => {
        state.content = action.payload;
        state.isLoading = false;
    } )
}