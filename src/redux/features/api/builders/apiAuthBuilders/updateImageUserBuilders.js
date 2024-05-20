export default ( builder, updateImageUser ) => {
    builder.addCase(updateImageUser.pending, ( state,action ) => {
        state.isLoading= true;
        state.isLogged = false;
     })
     builder.addCase(updateImageUser.rejected, ( state,action ) => {
        state.error = action.error.message;
        state.isLogged = false;
        state.isLoading = false;
     })
     builder.addCase(updateImageUser.fulfilled, ( state,action ) => {
              state.isLogged = action.payload.isLogged;
              state.isLoading = false;
              state.user = action.payload;
              state.message = action.payload.message;
              state.status = action.payload.status;
     })
}