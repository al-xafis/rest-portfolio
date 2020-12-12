import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action){

    },
    removeUser(state){
      state.user = null;
    }
  }
})



export default usersSlice.reducer;