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
        setItem("access_token", payload.res.access_token)
        setItem("first_name", payload.res.firstname)
        setItem("last_name", payload.res.lastname)
        setItem("user_id", payload.res.id)
        setItem("email", payload.res.email)
        setItem("phone", payload.res.mobilenumber)
        setItem("type", payload.res.type)
        setItem("verified", payload.res.type)
      }
    )
  }
});

export const { setUserState } = authSlice.actions;

export default authSlice.reducer;


// {
//     "id": "c0fce898-360a-4294-961b-8938d81eaef0",
//     "firstname": "zubi",
//     "lastname": "michael",
//     "email": "pearlthelma222@gmail.com",
//     "country_code": "+234",
//     "mobilenumber": "09064487771",
//     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfdG9rZW5fZXhwaXJ5IjoxNzExMDU1MzMxODYxLCJ1c2VyX2lkIjoiYzBmY2U4OTgtMzYwYS00Mjk0LTk2MWItODkzOGQ4MWVhZWYwIn0.n7HmPEbV85WGCDdyJKTdim6i96NcJdEKBWmrZfbIbp4",
//     "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWZyZXNoX3Rva2VuX2V4cGlyeSI6MTcxMTE0MTczMTg2MSwidXNlcl9pZCI6ImMwZmNlODk4LTM2MGEtNDI5NC05NjFiLTg5MzhkODFlYWVmMCJ9.IkUxeNeai41taGXFM82OiQWd56cfqZvcU2ZLWvVN0GQ",
//     "account_type": 1,
//     "type": "PropertyOwner",
//     "account_status": 1,
//     "status": "Active",
//     "verification_status": 1,
//     "ver_status": "Verified"
// }