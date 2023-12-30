import { createAsyncThunk } from "@reduxjs/toolkit";
import { serviceAddContact, serviceChangeContact, serviceDeleteContact, serviceGetToday } from "../api/api";

export const fetchToday = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
   try {
      const response = await serviceGetToday();
      return response.data;
   } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
   }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
   try {
      const response = await serviceAddContact(contact);
      return response.data;
   } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
   }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
   try {
      const response = await serviceDeleteContact(id);
      return response.data;
   } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
   }
});

export const changeContact = createAsyncThunk("contacts/changeContact", async (contact, thunkAPI) => {
   try {
      const response = await serviceChangeContact(contact);
      return response.data;
   } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
   }
});
