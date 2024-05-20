export default (builder, getUsers) => {
    builder.addCase(getUsers.rejected, ( state,action ) => {
        state.error = action.error.message;
        state.isLoading = false;
    })
    builder.addCase(getUsers.pending, ( state,action ) => {
        state.isLoading = true;
    })
    builder.addCase(getUsers.fulfilled, ( state,action ) => {
        state.users = action.payload;
        state.isLoading = false;
    })
}