export default ( builder, loginUser ) => {
    builder.addCase(loginUser.pending, ( state,action ) => {
        state.isLoading= true;
        state.isLogged = false;
     })
     builder.addCase(loginUser.rejected, ( state,action ) => {
        state.error = action.error.message;
        state.isLogged = false;
        state.isLoading = false;
     })
     builder.addCase(loginUser.fulfilled, ( state,action ) => {
              state.isLogged = action.payload.isLogged;
              state.isLoading = false;
              state.user = action.payload
              localStorage.setItem('token',action.payload.token)

            //   if(action.payload.isLogged){
            //       connectionSocket();
            //   }
     })
}