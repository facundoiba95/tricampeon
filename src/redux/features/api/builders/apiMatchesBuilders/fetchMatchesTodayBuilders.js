export default (builder, fetchMatchesToday) => {
    builder.addCase( fetchMatchesToday.pending, ( state, action ) => {
        state.isLoading = true;
        return state;
    })
    builder.addCase(fetchMatchesToday.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.status = action.payload.status;
    })
    builder.addCase(fetchMatchesToday.fulfilled, ( state, action ) => {
        if(action.meta.arg){
            state.matches = action.payload.matches;
            state.status = action.payload.status;
            state.isLoading = false;
        }
        
        state.isLoading = false;
    })
}