import { setItem } from '@/utils';
import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../auth';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    setUserState: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled, (_state, { payload }: any) => {
        console.log(">>>>_tats", payload.res);
        setItem("access_token", payload.res.access_token)
        setItem("first_name", payload.res.firstname)
      }
    )
  }
});

export const { setUserState } = authSlice.actions;

export default authSlice.reducer;