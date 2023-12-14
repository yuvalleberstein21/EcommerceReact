import { createSlice } from '@reduxjs/toolkit';


// appAPI
import AppAPI from '../services/appApi';

const initialState = null;

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
})

export default userSlice.reducer;