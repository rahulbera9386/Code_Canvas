import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  currentUser: null,
  error: null,
  loading: false
}


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    signInSuccess: (state, action) => {
      state.loading = false,
        state.currentUser = action.payload;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false,
        state.error = action.payload;
    }
  }
});



const [signInStart,signInSuccess,signInFailure]=userSlice.actions;

export default userSlice.reducer;