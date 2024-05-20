export default ( builder, createUser ) => {
    builder.addCase(createUser.pending, ( state,action ) => {
        state.isLoading = true;
     })
     builder.addCase(createUser.rejected, ( state,action ) => {
        state.isLoading = false;
        state.error = action.error.message;
     })
     builder.addCase(createUser.fulfilled, ( state,action ) => {
        state.user = action.payload;
        state.isLoading = false;
     })
}