export default (builder, getMatchByID) => {
    builder.addCase( getMatchByID.pending, ( state, action ) => {
        state.isLoading = true;
    })
    builder.addCase(getMatchByID.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.status = action.payload.status;
    })
    builder.addCase(getMatchByID.fulfilled, ( state, action ) => {
        state.searchMatch = action.payload.match;
        state.status = action.payload.status;
        state.message = action.payload.message;
        state.isLoading = false;
    })
}