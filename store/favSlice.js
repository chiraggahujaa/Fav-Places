import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favPlaces: []
};

const favSlice = createSlice({
  name: "favPlaces",
  initialState,
  reducers: {
    addFav(state, action) {
      state.favPlaces.push({id : Math.random().toString() + new Date().toLocaleString(), ...action.payload.fav });
    },
    removeFav(state, action){
      const {id} = action.payload;
      state.favPlaces = state.favPlaces.filter(place => place.id !== id);
    }
  },
});


export const favActions = favSlice.actions;
export default favSlice;