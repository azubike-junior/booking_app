import { setItem } from '@/utils';
import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../auth';

type initState = {
  user: any
  verificationStr: string
}

const initialState: initState = {
  user: null,
  verificationStr: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserState: (state, action) => {
      state.user = action.payload;
    },
    setVerificationState: (state, action) => {
      state.verificationStr = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled, (_state, { payload }: any) => {

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

export const { setUserState, setVerificationState} = authSlice.actions;

export default authSlice.reducer;