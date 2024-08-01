// userSlice.js
import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {isAuthenticated: false, userDetails: {}},
  reducers: {
    login(state, action) {
      // 리듀서 로직
    },
    logout(state) {
      // 리듀서 로직
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
