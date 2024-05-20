export default (builders, getChannelSchedule) => {
    builders.addCase( getChannelSchedule.pending, ( state, action ) => {
        state.isLoading = true;
    })
    builders.addCase(getChannelSchedule.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.error.message;
    })
    builders.addCase( getChannelSchedule.fulfilled, ( state, action ) => {
        state.schedule = action.payload.schedule;
        state.status = action.payload.status;
        state.isLoading = false;

        if(state.status !== 200){
            state.error = action.payload.error;
        }
    })
}