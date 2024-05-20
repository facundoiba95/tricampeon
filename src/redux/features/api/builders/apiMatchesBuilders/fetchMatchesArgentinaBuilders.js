export default (builder, fetchMatchesArgentina) => {
    builder.addCase(fetchMatchesArgentina.pending, ( state, action ) => {
        state.isLoading = true;
        return state;
    })
    builder.addCase(fetchMatchesArgentina.rejected, ( state, action ) => {
        state.error = action.error.message;
        state.isLoading = false;
        return state;
    })
    builder.addCase(fetchMatchesArgentina.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.ligaArgentina = action.payload;
        return state;
    })
}