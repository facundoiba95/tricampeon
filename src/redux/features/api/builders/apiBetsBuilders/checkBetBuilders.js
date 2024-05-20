export default (builder, checkBet) => {
    builder.addCase(checkBet.rejected, ( state,action ) => {
        state.isLoading = false;
        state.error = action.error.message;
    })
    builder.addCase(checkBet.pending, ( state,action ) => {
        state.isLoading = true;
    })
    builder.addCase(checkBet.fulfilled, ( state,action ) => {
        state.dataBet = action.payload;
        state.isLoading = false;
    })
}