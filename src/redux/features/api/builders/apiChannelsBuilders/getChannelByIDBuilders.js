export default (builders, getChannelByID) => {
    builders.addCase( getChannelByID.pending, ( state, action ) => {
        state.isLoading = true;
    })
    builders.addCase(getChannelByID.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.error.message;
    })
    builders.addCase( getChannelByID.fulfilled, ( state, action ) => {
        state.channelSelected = action.payload.channel;
        state.status = action.payload.status;
        state.isLoading = false;

        if(state.status !== 200){
            state.error = action.payload.error;
            state.message = action.payload.message;
        }
    })
}