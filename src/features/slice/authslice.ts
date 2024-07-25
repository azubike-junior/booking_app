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

        console.log(">>>>>>paylooa", payload);

        const res = payload.res.data
        
        setItem("access_token", res.access_token)
        setItem("first_name", res.firstname)
        setItem("last_name", res.lastname)
        setItem("user_id", res.id)
        setItem("email", res.email)
        setItem("phone", res.mobilenumber)
        setItem("type", res.type)
        setItem("verified", res.type)
      }
    )
  }
});

export const { setUserState } = authSlice.actions;

export default authSlice.reducer;