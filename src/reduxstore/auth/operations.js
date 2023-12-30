import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearAuthHeader, serviceLogIn, serviceLogOut, serviceRefresh, serviceSignUp, setAuthHeader } from "../../api/api";

//  credentials: { name, email, password }
export const register = createAsyncThunk(
   'auth/register',
   async (credentials, thankAPI)=>{
      try {
         const responce = await serviceSignUp(credentials);
         setAuthHeader(responce.data.token);
         return responce.data
      } catch (error) {
         return thankAPI.rejectWithValue(error.message)
      }
   }
)

//  credentials: { email, password }
export const login = createAsyncThunk(
   'auth/login',
   async (credentials, thankAPI)=>{
      try {
         const responce = await serviceLogIn(credentials);
         setAuthHeader(responce.data.token);
         console.log('back login== ', responce.data)
         return responce.data
      } catch (error) {
         return thankAPI.rejectWithValue(error.message)
      }
   }
)

export const logout = createAsyncThunk(
   'auth/logout',
   async(_, thankAPI)=>{
      try {
         await serviceLogOut();
         clearAuthHeader();
      } catch (error) {
         return thankAPI.rejectWithValue(error.message)
      }
   }
)

export const refresh = createAsyncThunk(
   'auth/refresh',
   async(_, thankAPI)=>{
      try {
         const state = thankAPI.getState();
         const persistedToken = state.auth.token;
         if (persistedToken===null){
            return thankAPI.rejectWithValue('unable to read user data')
         }
         try {
            setAuthHeader(persistedToken);
            const responce = await serviceRefresh();
            return responce.data
         } catch (error) {
            return thankAPI.rejectWithValue(error.message)
         }
      } catch (error) {
         return thankAPI.rejectWithValue(error.message)
      }
   }
)