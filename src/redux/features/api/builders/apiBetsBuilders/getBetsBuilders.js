export default (builder, getBets) => {
    builder.addCase(getBets.rejected, ( state,action ) => {
        state.isLoading = false;
        state.error = action.error.message;
    })
    builder.addCase(getBets.pending, ( state,action ) => {
        state.isLoading = true;
    })
    builder.addCase(getBets.fulfilled, ( state,action ) => {
        state.bet = action.payload;
        state.isLoading = false;
    })
}