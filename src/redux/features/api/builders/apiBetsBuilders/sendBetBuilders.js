export default (builder, sendBet) => {
    builder.addCase(sendBet.rejected, ( state,action ) => {
        state.isLoading = false;
        state.error = action.error.message;
    })
    builder.addCase(sendBet.pending, ( state,action ) => {
        state.isLoading = true;
    })
    builder.addCase(sendBet.fulfilled, ( state,action ) => {
        state.isLoading = false;
        state.bet = action.payload;
    })
}