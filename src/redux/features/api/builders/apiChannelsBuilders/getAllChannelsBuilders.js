export default (builders, getAllChannels) => {
    builders.addCase( getAllChannels.pending, ( state, action ) => {
        state.isLoading = true;
    })
    builders.addCase(getAllChannels.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.status = action.payload.status;
    })
    builders.addCase( getAllChannels.fulfilled, ( state, action ) => {
        state.channels = action.payload.channels;
        state.status = action.payload.status;
        state.isLoading = false;
    })
}